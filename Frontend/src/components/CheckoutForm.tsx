import { useState } from "react";
import FormSpanError from "./FormSpanError";
import { useCheckoutStore } from "../store/useCheckout";
interface CheckoutFormProps {
  onNext: () => void;
}

export default function CheckoutForm({ onNext }: CheckoutFormProps) {
  const { updateField } = useCheckoutStore();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newErrors: { [key: string]: string } = {};

    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement)?.value.trim();

    if (!getValue("firstName")) newErrors.firstName = "First name is required";
    if (!getValue("lastName")) newErrors.lastName = "Last name is required";
    if (!getValue("email")) newErrors.email = "Email is required";
    if (!getValue("phone")) newErrors.phone = "Phone number is required";
    if (!getValue("address")) newErrors.address = "Address is required";
    if (!getValue("city")) newErrors.city = "City is required";
    if (!getValue("state")) newErrors.state = "State is required";
    if (!getValue("zip")) newErrors.zip = "Zip code is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) onNext();
  };

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">
        Delivery Details
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            First Name
          </label>
          <input
            name="firstname"
            type="text"
            placeholder="Enter First Name"
            className={`w-full bg-gray-900 border ${
              errors.firstName ? "border-red-500" : "border-gray-700"
            } text-gray-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500`}
            onChange={(e) => updateField("firstname", e.target.value)}
          />
          {errors.firstName && <FormSpanError FormError={errors.firstName} />}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Last Name
          </label>
          <input
            name="lastname"
            type="text"
            placeholder="Enter Last Name"
            className={`w-full bg-gray-900 border ${
              errors.lastName ? "border-red-500" : "border-gray-700"
            } text-gray-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500`}
            onChange={(e) => updateField("lastname", e.target.value)}
          />
          {errors.lastName && <FormSpanError FormError={errors.lastName} />}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            className={`w-full bg-gray-900 border ${
              errors.email ? "border-red-500" : "border-gray-700"
            } text-gray-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500`}
            onChange={(e) => updateField("email", e.target.value)}
          />
          {errors.email && <FormSpanError FormError={errors.email} />}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Phone
          </label>
          <input
            name="phone"
            type="text"
            placeholder="Enter Phone Number"
            inputMode="numeric"
            className={`no-spinner w-full bg-gray-900 border ${
              errors.phone ? "border-red-500" : "border-gray-700"
            } text-gray-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500`}
            onChange={(e) => updateField("phone", e.target.value)}
          />
          {errors.phone && <FormSpanError FormError={errors.phone} />}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Address
          </label>
          <input
            name="address"
            type="text"
            placeholder="Enter Address"
            className={`w-full bg-gray-900 border ${
              errors.address ? "border-red-500" : "border-gray-700"
            } text-gray-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500`}
            onChange={(e) => updateField("address", e.target.value)}
          />
          {errors.address && <FormSpanError FormError={errors.address} />}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            City
          </label>
          <input
            name="city"
            type="text"
            placeholder="Enter City"
            className={`w-full bg-gray-900 border ${
              errors.city ? "border-red-500" : "border-gray-700"
            } text-gray-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500`}
            onChange={(e) => updateField("city", e.target.value)}
          />
          {errors.city && <FormSpanError FormError={errors.city} />}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            State
          </label>
          <input
            name="state"
            type="text"
            placeholder="Enter State"
            className={`w-full bg-gray-900 border ${
              errors.state ? "border-red-500" : "border-gray-700"
            } text-gray-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500`}
            onChange={(e) => updateField("state", e.target.value)}
          />
          {errors.state && <FormSpanError FormError={errors.state} />}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Zip Code
          </label>
          <input
            name="zip"
            type="text"
            placeholder="Enter Zip Code"
            inputMode="numeric"
            className={`no-spinner w-full bg-gray-900 border ${
              errors.zip ? "border-red-500" : "border-gray-700"
            } text-gray-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500`}
            onChange={(e) => updateField("zip", e.target.value)}
          />
          {errors.zip && <FormSpanError FormError={errors.zip} />}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Landmark
          </label>
          <input
            name="landmark"
            type="text"
            placeholder="Landmark"
            className={`w-full bg-gray-900 border ${
              errors.landmark ? "border-red-500" : "border-gray-700"
            } text-gray-100 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500`}
            onChange={(e) => updateField("landmark", e.target.value)}
          />
          {errors.landmark && <FormSpanError FormError={errors.landmark} />}
        </div>
        <button
          type="submit"
          className="mt-8 col-span-full w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
