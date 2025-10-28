import { useEffect } from "react";
import { useProductStore } from "../store/useProduct";
import type { Product } from "../store/useProduct";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 dark:text-gray-200">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0e1320] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-10 text-center">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: Product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="group bg-[#1a2234] rounded-2xl shadow-md hover:shadow-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="flex justify-center items-center bg-[#1f2942] p-6 h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-44 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between flex-grow p-5">
                <div>
                  <h3 className="text-base font-semibold text-white line-clamp-2 mb-2 min-h-[3.5rem]">
                    {product.title}
                  </h3>
                  <p className="text-lg font-bold text-indigo-400">
                    ${product.price}
                  </p>
                </div>

                <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
