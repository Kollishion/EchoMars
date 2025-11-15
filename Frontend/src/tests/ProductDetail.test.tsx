import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import ProductDetail from "../components/ProductDetail";
import { useProductStore } from "../store/useProduct";
import { useCartStore } from "../store/useCart";

vi.mock("../store/useProduct.ts", () => ({
  useProductStore: vi.fn(),
}));

vi.mock("../store/useCart.ts", () => ({
  useCartStore: vi.fn(),
}));

describe("ProductDetail Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("shows loader when loading", () => {
    const mockedProductStore = vi.mocked(useProductStore);
    mockedProductStore.mockReturnValue({
      products: [],
      loading: true,
      error: null,
      fetchProducts: vi.fn(),
    });
    const mockedCartStore = vi.mocked(useCartStore);
    mockedCartStore.mockReturnValue({
      addToCart: vi.fn(),
      cart: [],
    });
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("shows product details", () => {
    const mockProducts = [
      {
        id: 1,
        title: "Product One",
        price: 29.99,
        image: "https://example.com/img1.jpg",
        description: "something",
        rating: { rate: 4.5, count: 100 },
      },
    ];
    const mockedProductStore = vi.mocked(useProductStore);
    mockedProductStore.mockReturnValue({
      products: mockProducts,
      loading: false,
      error: null,
      fetchProducts: vi.fn(),
    });
    const mockedUseCartStore = vi.mocked(useCartStore);
    mockedUseCartStore.mockReturnValue({
      addToCart: vi.fn(),
      cart: [],
    });

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Product One")).toBeInTheDocument();
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
    expect(screen.getByText("Buy Now")).toBeInTheDocument();
  });
});
