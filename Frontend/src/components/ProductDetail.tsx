import { Star } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCartStore } from '../store/useCart';
import { useProductStore } from '../store/useProduct';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading, error, fetchProducts } = useProductStore();
  const productId = Number(id);
  const { addToCart, clearCart } = useCartStore();
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  const product = products.find((p) => p.id === productId);
  const navigate = useNavigate();
  function toCart() {
    if (product) {
      addToCart(product, 1);
      navigate('/cart');
    }
  }
  function toBuy() {
    if (product) {
      clearCart();
      addToCart(product, 1);
      navigate('/checkout');
    }
  }
  if (loading)
    return (
      <div
        data-testid="loader"
        className="flex justify-center items-center h-screen bg-gray-900 text-white text-lg loader"
      />
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-red-400">
        {error}
      </div>
    );

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        Product not found
      </div>
    );

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center px-6 py-12">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-10">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-4">
              {product.title}
            </h1>
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < Math.round(product.rating?.rate || 4)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                {product.rating?.rate?.toFixed(1)} ({product.rating?.count})
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-10">
              ${product.price}
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <button
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-200"
                onClick={toCart}
                role="Add to Cart"
              >
                Add to Cart
              </button>
            </div>
            <button
              className="flex-1 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 py-3 rounded-xl font-semibold text-lg transition-all duration-200"
              role="Buy Now"
              onClick={toBuy}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
