import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "./useProduct";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product, quantity = 1) => {
        const cart = get().cart;
        const existingItem = cart.find((item) => item.id === product.id);
        let updatedCart: CartItem[];
        if (existingItem) {
          updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          updatedCart = [...cart, { ...product, quantity }];
        }
        set({
          cart: updatedCart,
          totalItems: updatedCart.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: updatedCart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),
        });
      },
      removeFromCart: (id) => {
        const cart = get().cart;
        const updatedCart = cart.filter((item: CartItem) => item.id !== id);
        set({
          cart: updatedCart,
          totalItems: updatedCart.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: updatedCart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),
        });
      },
      updateQuantity: (id, quantity = 1) => {
        const cart = get().cart;
        const updatedCart: CartItem[] = cart.map((item: CartItem) =>
          item.id === id ? { ...item, quantity } : item
        );
        const totalItems = updatedCart.reduce(
          (sum: number, item: CartItem) => sum + item.quantity,
          0
        );
        const totalPrice = updatedCart.reduce(
          (sum: number, item: CartItem) => sum + item.price * item.quantity,
          0
        );
        set({ cart: updatedCart, totalItems, totalPrice });
      },
      clearCart: () => {
        set({ cart: [], totalItems: 0, totalPrice: 0 });
      },
      totalItems: 0,
      totalPrice: 0,
    }),
    { name: "cart-storage" }
  )
);
