import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import ProductListing from "../components/ProductListing";
import { useProductStore } from "../store/useProduct";

vi.mock("../store/useProduct.ts", () => {
  return {
    useProductStore: vi.fn(),
  };
});

describe("Product Listing Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Loading test", () => {
    (useProductStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      products: [],
      loading: true,
      error: null,
      fetchProducts: vi.fn(),
    });

    render(
      <MemoryRouter>
        <ProductListing />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("Product list test", () => {
    const mockProducts = [
      {
        id: 1,
        title: "Product One",
        price: 29.99,
        image: "https://example.com/img1.jpg",
      },
      {
        id: 2,
        title: "Product Two",
        price: 49.99,
        image: "https://example.com/img2.jpg",
      },
    ];

    (useProductStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      products: mockProducts,
      loading: false,
      error: null,
      fetchProducts: vi.fn(),
    });

    render(
      <MemoryRouter>
        <ProductListing />
      </MemoryRouter>
    );

    expect(screen.getByText("Our Products")).toBeInTheDocument();
    expect(screen.getByText("Product One")).toBeInTheDocument();
    expect(screen.getByText("Product Two")).toBeInTheDocument();

    expect(screen.getAllByText("View Details")).toHaveLength(2);
  });
});
