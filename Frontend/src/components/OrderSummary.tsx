import { useCartStore } from "../store/useCart";
import { useCheckoutStore } from "../store/useCheckout";

interface OrderSummaryProps {
  onBack: () => void;
}

export default function OrderSummary({ onBack }: OrderSummaryProps) {
  const { cart, totalItems, totalPrice, clearCart } = useCartStore();
  const { data } = useCheckoutStore();

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

      <ul className="space-y-3 text-gray-300">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.title}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <hr className="my-6 border-gray-700" />

      <div className="flex justify-between text-gray-200 text-lg font-semibold">
        <span>Total ({totalItems} items)</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <div className="mt-10 bg-gray-900 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">
          Delivery Details
        </h3>

        <div className="space-y-2 text-gray-300">
          <p>
            <strong>Name:</strong> {data.firstname} {data.lastname}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <p>
            <strong>Address:</strong> {data.address}
          </p>
          <p>
            <strong>City:</strong> {data.city}
          </p>
          <p>
            <strong>State:</strong> {data.state}
          </p>
          <p>
            <strong>Zip:</strong> {data.zip}
          </p>
          {data.landmark && (
            <p>
              <strong>Landmark:</strong> {data.landmark}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border border-gray-600 hover:bg-gray-700"
        >
          Back
        </button>

        <button
          onClick={() => {
            clearCart();
            alert("Order placed successfully!");
          }}
          className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
