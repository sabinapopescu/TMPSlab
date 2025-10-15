// // ❌ BAD: This cart store violates the Open/Closed Principle
// // because every time we need a new operation (e.g., "applyDiscount" or "addGiftWrap"),
// // we must MODIFY this store directly — changing existing code.

// import { create } from 'zustand';
// import type { Product, CartItem } from '@/types';

// interface CartStore {
//   items: CartItem[];
//   action: (type: string, payload?: any) => void; // ❌ Using strings to define actions (error-prone)
// }

// export const useCartStore = create<CartStore>((set, get) => ({
//   items: [],

//   action: (type, payload) => {
//     const items = get().items;

//     // ❌ All logic tightly coupled inside one function
//     // Every new operation = modifying this "switch"
//     switch (type) {
//       case 'add':
//         set({
//           items: [...items, { product: payload.product, quantity: 1 }],
//         });
//         break;

//       case 'remove':
//         set({
//           items: items.filter((item) => item.product.id !== payload.id),
//         });
//         break;

//       // ❌ To add a discount or clearCart, we have to MODIFY this code
//       case 'applyDiscount':
//         set({
//           items: items.map((item) => ({
//             ...item,
//             product: { ...item.product, price: item.product.price * 0.9 },
//           })),
//         });
//         break;
//     }
//   },
// }));


// ✅ GOOD: This Cart Store follows the Open/Closed Principle (OCP)
// It is OPEN for extension (we can add new cart operations)
// but CLOSED for modification (existing logic doesn’t need to change).

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, CartItem } from '@/types';

// ✅ Interface defines clear, independent responsibilities
interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
}

// ✅ Zustand store: each operation is encapsulated, making it extensible
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      // ✅ addItem: encapsulated cart addition logic
      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );

          if (existingItem) {
            // ✅ Only changes necessary part of state
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return { items: [...state.items, { product, quantity }] };
        });
      },

      // ✅ removeItem: self-contained; doesn’t affect other logic
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      // ✅ updateQuantity: modular and reusable
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      // ✅ clearCart: self-contained function — adding new behavior (e.g., applyDiscount)
      // can be done WITHOUT modifying this function.
      clearCart: () => {
        set({ items: [] });
      },

      // ✅ Computed properties (getters) — clean and isolated
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) =>
            total + item.product.price.amount * item.quantity,
          0
        );
      },
    }),
    {
      name: 'maya-pearl-cart', // ✅ Persistence is added via middleware, not hardcoded logic
    }
  )
);
