import { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';
import PaymentMethod from '../components/PaymentMethod';

export default function CheckoutPage({ signedIn = true }) {
  const [step, setStep] = useState(signedIn ? 2 : 1);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex items-start justify-center mb-8">
          <div className="flex gap-10 text-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            >
              <span>1</span>
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            >
              <span>2</span>
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 3 ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            >
              <span>3</span>
            </div>
          </div>
        </div>

        {step === 1 && <CheckoutForm onNext={() => setStep(2)} />}
        {step === 2 && (
          <PaymentMethod onNext={() => setStep(3)} onBack={() => setStep(1)} />
        )}
        {step === 3 && <OrderSummary onBack={() => setStep(2)} />}
      </div>
    </div>
  );
}
