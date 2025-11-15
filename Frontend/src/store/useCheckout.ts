import { persist } from "zustand/middleware";
import { create } from "zustand";

interface CheckoutData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  landmark: string;
}

interface CheckoutStore {
  data: CheckoutData;
  updateField: (field: keyof CheckoutData, value: string) => void;
  clearCheckout: () => void;
}

export const useCheckoutStore = create<CheckoutStore>()(
  persist(
    (set) => ({
      data: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        landmark: "",
      },
      updateField: (field: keyof CheckoutData, value: string) =>
        set((state) => ({
          data: { ...state.data, [field]: value },
        })),
      clearCheckout: () =>
        set({
          data: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            landmark: "",
          },
        }),
    }),
    { name: "checkout-storage" }
  )
);
