import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useCartStore } from "../store/useCart";
import { Cart } from "../components/Cart";

vi.mock("../store/useCart.ts", () => ({
  useCartStore: vi.fn(),
}));

describe("Cart testing component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("check for emptiness of cart", () => {
    const mockedCartStore = vi.mocked(useCartStore);
    mockedCartStore.mockReturnValue({
      cart: [],
    });
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });
  test("render cart summary correctly", () => {
    const mockedCartStore = vi.mocked(useCartStore);
    mockedCartStore.mockReturnValue({
      addToCart: vi.fn(),
      cart: [
        { id: 1, title: "Laptop", price: 100, quantity: 2, image: "test.png" },
      ],
      removeFromCart: vi.fn(),
      updateQuantity: vi.fn(),
      clearCart: vi.fn(),
      totalItems: 2,
      totalPrice: 100,
    });
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByRole("Price")).toBeInTheDocument();
    expect(screen.getByRole("TotalItems")).toBeInTheDocument();
    expect(screen.getByRole("image")).toBeInTheDocument();
  });
  test("render cart summary correctly", () => {
    const mockedCartStore = vi.mocked(useCartStore);
    const mockUpdateQuantity = vi.fn();
    const mockedRemoveFromCart = vi.fn();
    const mockedClearCart = vi.fn();
    mockedCartStore.mockReturnValue({
      cart: [
        { id: 1, title: "Laptop", price: 100, quantity: 2, image: "test.png" },
      ],
      removeFromCart: mockedRemoveFromCart,
      updateQuantity: mockUpdateQuantity,
      clearCart: mockedClearCart,
      totalItems: 2,
      totalPrice: 100,
    });
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    const incrementBtn = screen.getAllByRole("increment");
    fireEvent.click(incrementBtn[0]);
    expect(mockUpdateQuantity).toHaveBeenCalled();
    const decrementBtn = screen.getAllByRole("decrement");
    fireEvent.click(decrementBtn[0]);
    expect(mockUpdateQuantity).toHaveBeenCalled();
    const removeFromCartBtn = screen.getByRole("removeFromCart");
    fireEvent.click(removeFromCartBtn);
    expect(mockedRemoveFromCart).toHaveBeenCalled();
    const clearCartBtn = screen.getByRole("clearCart");
    fireEvent.click(clearCartBtn);
    expect(mockedClearCart).toHaveBeenCalled();
  });
});
