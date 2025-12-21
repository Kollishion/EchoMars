import { create } from 'zustand';

export interface Product {
  id: number;
  rating: {
    rate: number;
    count: number;
  };
  product_id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  searchText: string;
  setSearchText: (s: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  searchText: '',
  fetchProducts: async () => {
    try {
      set({ loading: true });
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error('Failed to fetch new products');
      const data = await res.json();
      set({ products: data });
    } catch {
      set({ error: 'Failed to load products' });
    } finally {
      set({ loading: false });
    }
  },
  setSearchText: (s: string) => {
    set({ searchText: s });
  },
}));
