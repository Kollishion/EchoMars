import { BsCashCoin } from 'react-icons/bs';

interface PaymentMethodProps {
  onNext: () => void;
  onBack: () => void;
}

function paymentOption(i: number) {
  console.log(i);
}

export default function PaymentMethod({ onNext, onBack }: PaymentMethodProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="bg-gray-900 border border-gray-700 hover:border-blue-600 transition rounded-lg p-4 cursor-pointer flex flex-col items-center text-center">
          <input
            type="radio"
            name="method"
            className="hidden"
            defaultChecked
            onClick={() => paymentOption(1)}
          />
          <img
            src="https://readymadeui.com/images/visa.webp"
            className="w-16 mb-2"
          />
          <span className="text-gray-300 text-sm">Credit / Debit Card</span>
        </label>

        <label className="bg-gray-900 border border-gray-700 hover:border-blue-600 transition rounded-lg p-4 cursor-pointer flex flex-col items-center text-center">
          <input type="radio" name="method" className="hidden" />
          <img
            src="https://readymadeui.com/images/paypal.webp"
            className="w-20 mb-2"
          />
          <span className="text-gray-300 text-sm">PayPal</span>
        </label>

        <label className="bg-gray-900 border border-gray-700 hover:border-blue-600 transition rounded-lg p-4 cursor-pointer flex flex-col items-center text-center">
          <input type="radio" name="method" className="hidden" />
          <BsCashCoin size={30} className="text-green-500 mb-2" />
          <span className="text-gray-300 text-sm">Cash on Delivery</span>
        </label>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border border-gray-600 hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
        >
          Continue to Summary
        </button>
      </div>
    </div>
  );
}
