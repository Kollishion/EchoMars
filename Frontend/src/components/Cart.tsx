import { FiMinus } from 'react-icons/fi';
import { IoAddOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCart';
import { useSnapshotCheckoutStore } from '../store/useCheckoutSnapshot';
export const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCartStore();

  const { createSnapshot } = useSnapshotCheckoutStore();

  if (cart.length === 0)
    return (
      <div className="flex justify-center items-center h-screen text-gray-400">
        Your cart is empty
        <Link to="/">
          <button>Go back to products</button>
        </Link>
      </div>
    );

  async function handleCheckoutFlow() {
    createSnapshot(cart, totalPrice);
    await navigate('/checkout');
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col items-center py-10 px-4">
      <h1 role="TotalItems" className="text-3xl font-bold text-blue-400 mb-8">
        My Cart ({totalItems})
      </h1>

      <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-6">
        {cart.map((item) => (
          <div
            key={item.product_id}
            className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-md object-cover"
                role="image"
              />
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p role="Price" className="text-gray-400 text-xs mt-1">
                  ${item.price}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                role="decrement"
                onClick={() =>
                  updateQuantity(
                    item.product_id,
                    Math.max(1, item.quantity - 1)
                  )
                }
                className="text-gray-300 hover:text-blue-400"
              >
                <FiMinus />
              </button>
              <span className="px-2 text-sm">{item.quantity}</span>
              <button
                role="increment"
                onClick={() =>
                  updateQuantity(item.product_id, item.quantity + 1)
                }
                className="text-gray-300 hover:text-blue-400"
              >
                <IoAddOutline />
              </button>
              <button
                role="removeFromCart"
                onClick={() => removeFromCart(item.product_id)}
                className="ml-3 text-gray-500 hover:text-red-500 transition"
              >
                <RxCross2 />
              </button>
            </div>
          </div>
        ))}

        <div className="text-center mt-6">
          <p className="text-lg font-semibold mb-4">
            Total:{' '}
            <span className="text-blue-400">${totalPrice.toFixed(2)}</span>
          </p>

          <div className="flex flex-col gap-3">
            <button
              role="clearCart"
              onClick={clearCart}
              className="w-full py-2 border border-red-600 text-red-500 rounded-md hover:bg-red-600 hover:text-white transition"
            >
              Clear Cart
            </button>
            <button
              className="w-full py-2 bg-blue-600 rounded-md text-white font-medium hover:bg-blue-500 transition"
              onClick={() => handleCheckoutFlow()}
            >
              Checkout
            </button>
            <a
              href="/"
              className="text-sm text-gray-400 hover:text-blue-400 underline mt-2"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
