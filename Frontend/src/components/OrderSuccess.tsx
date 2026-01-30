const OrderSuccess = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="font-bold text-4xl text-white text-center">
          Payment Successful
        </h2>

        <p className="mt-4 text-lg text-gray-300 mb-11 text-center">
          Thanks for making a purchase, you can check your order summary below
        </p>

        <div className="border border-gray-700 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full bg-gray-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-700">
            <div>
              <p className="font-semibold text-white">
                Order Id:{' '}
                <span className="text-indigo-400 font-medium">#10234987</span>
              </p>
              <p className="font-semibold text-white mt-4">
                Order Payment:{' '}
                <span className="text-gray-400 font-medium">
                  18th March 2021
                </span>
              </p>
            </div>

            <button className="rounded-full py-3 px-7 font-semibold text-sm text-white bg-indigo-600 max-lg:mt-5 hover:bg-indigo-700 transition">
              Track Your Order
            </button>
          </div>

          <div className="w-full px-3 min-[400px]:px-6">
            <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-700 gap-6">
              z
              <img
                src="https://pagedone.io/asset/uploads/1701167607.png"
                alt="Premium Watch"
                className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <div>
                  <h2 className="font-semibold text-xl text-white mb-3">
                    Premium Quality Dust Watch
                  </h2>
                  <p className="text-gray-400 mb-3">By: Dust Studios</p>

                  <div className="flex items-center text-gray-300">
                    <p className="pr-4 mr-4 border-r border-gray-600">
                      Size: <span className="text-gray-400">100 ml</span>
                    </p>
                    <p>
                      Qty: <span className="text-gray-400">2</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 mt-4 lg:mt-0">
                  <div className="col-span-5 lg:col-span-1">
                    <p className="text-sm text-gray-400">Price</p>
                    <p className="text-indigo-400">$100</p>
                  </div>

                  <div className="col-span-5 lg:col-span-2">
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="mt-2 bg-emerald-900/30 text-emerald-400 rounded-full px-3 py-1 inline-block">
                      Ready for Delivery
                    </p>
                  </div>

                  <div className="col-span-5 lg:col-span-2">
                    <p className="text-sm text-gray-400">Expected Delivery</p>
                    <p className="text-emerald-400 mt-2">23rd March 2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-t border-gray-700 px-6 flex flex-col lg:flex-row items-center justify-between">
              <div className="flex flex-col sm:flex-row items-center">
                <button className="py-6 sm:pr-6 sm:border-r border-gray-700 font-semibold text-lg text-white hover:text-indigo-400 transition">
                  Cancel Order
                </button>
              </div>

              <p className="font-semibold text-lg py-6 text-white">
                Total Price: <span className="text-indigo-400">$200.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
