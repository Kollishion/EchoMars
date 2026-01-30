import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from './useCart';

export type CheckoutStatus = 'PENDING' | 'PAID' | 'FAILED' | 'CANCELLED';

export interface SnapshotCheckoutData {
  checkoutId: string | null;
  timestamp: number | null;
  checkoutStatus: CheckoutStatus | null;
  items: CartItem[];
  totalPrice: number;

  createSnapshot: (items: CartItem[], totalPrice: number) => void;
  resetSnapshot: () => void;

  markPaid: () => void;
  markFailed: () => void;
  markCancelled: () => void;
}

export const useSnapshotCheckoutStore = create<SnapshotCheckoutData>()(
  persist(
    (set) => ({
      checkoutId: null,
      timestamp: null,
      checkoutStatus: null,
      items: [],
      totalPrice: 0,

      createSnapshot: (items, totalPrice) => {
        set((state) => {
          if (state.checkoutStatus === 'PENDING') {
            toast.error('Checkout already in progress');
            return state;
          }
          return {
            checkoutId: crypto.randomUUID(),
            timestamp: Date.now(),
            checkoutStatus: 'PENDING',
            items: structuredClone(items),
            totalPrice,
          };
        });
      },
      markPaid() {
        set((state) => {
          if (state.checkoutStatus !== 'PENDING') {
            toast.error('cannot mark PAID yet');
            return state;
          }
          return {
            checkoutStatus: 'PAID',
          };
        });
      },
      markFailed() {
        set((state) => {
          if (state.checkoutStatus !== 'PENDING') {
            toast.error('Cannot mark FAILED yet');
            return state;
          }
          return {
            checkoutStatus: 'FAILED',
          };
        });
      },
      markCancelled() {
        set((state) => {
          if (!state.checkoutStatus) {
            toast.error('No checkout to cancel');
            return state;
          }
          if (state.checkoutStatus !== 'PENDING') {
            toast.error(`Cannot cancel from ${state.checkoutStatus}`);
            return state;
          }
          return {
            checkoutStatus: 'CANCELLED',
          };
        });
      },
      resetSnapshot: () => {
        set({
          checkoutId: null,
          timestamp: null,
          checkoutStatus: null,
          items: [],
          totalPrice: 0,
        });
      },
    }),
    { name: 'snapshot-storage' }
  )
);
