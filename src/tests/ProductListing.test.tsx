import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import ProductListing from "../components/ProductListing";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("ProductListing component", () => {
  it("renders Loading... initially", () => {
    render(<ProductListing />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
  it("fetches and displays products", async () => {
    const fakeProducts = [
      {
        id: 1,
        title: "Test Product",
        price: 100,
        description: "A test item",
        category: "test",
        image: "https://via.placeholder.com/150",
      },
    ];
    
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      json: async () => fakeProducts,
    } as Response);

    render(<ProductListing />);

    await waitFor(() => {
      expect(screen.getByText("Test Product")).toBeInTheDocument();
    });

    expect(screen.getByText("$100")).toBeInTheDocument();
  });
});
