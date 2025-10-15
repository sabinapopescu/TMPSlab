# Laboratory 0 SOLID Principles Implementation in Maya Pearl Atelier

## Author: Sabina Popescu

---

## Objectives:

* Understand and apply SOLID principles in a real-world project.
* Demonstrate Single Responsibility Principle (SRP), Open/Closed Principle (OCP), and Dependency Inversion Principle (DIP).
* Refactor and organize existing project code to improve maintainability, readability, and extensibility.

---

## Used Principles:

* **SRP (Single Responsibility Principle)** – Each component or module has only one reason to change.
* **OCP (Open/Closed Principle)** – Modules are open for extension but closed for modification.
* **DIP (Dependency Inversion Principle)** – High-level modules depend on abstractions, not concrete implementations.

---

## Implementation

### 1️⃣ Single Responsibility Principle (SRP)

**Explanation:**
The `ProductCard` component was refactored to handle **only UI presentation**, delegating cart management, notifications, and formatting to separate modules. This ensures it has **one reason to change** — the layout or display of product information.

**Bad Example (violating SRP):**

```ts
export function ProductCard({ product }: any) {
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  };

  const formattedPrice =
    product.price.currency === "MDL"
      ? product.price.amount + " MDL"
      : product.price.amount + " EUR";

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{formattedPrice}</p>
      <button onClick={handleQuickAdd}>Add to Cart</button>
    </div>
  );
}
```

**Good Example (following SRP):**

```ts
import { formatPrice } from '@/lib/format';
import { useCartStore } from '@/store/cart';
import { Button } from '@/components/ui/button';
import type { Product } from '@/types';

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{formatPrice(product.price.amount, product.price.currency)}</p>
      <Button onClick={handleQuickAdd}>Add to Cart</Button>
    </div>
  );
}
```

---

### 2️⃣ Open/Closed Principle (OCP)

**Explanation:**
The cart store is designed with **independent functions** (`addItem`, `removeItem`, `updateQuantity`, `clearCart`).
New features (like discounts or gift options) can be added **without modifying existing functions**, keeping the code **robust and maintainable**.

**Bad Example (violating OCP):**

```ts
switch(action.type) {
  case 'add':
    // add item
    break;
  case 'remove':
    // remove item
    break;
  case 'applyDiscount':
    // modify existing logic
    break;
}
```

**Good Example (following OCP):**

```ts
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => { /* ... */ },
      removeItem: (productId) => { /* ... */ },
      updateQuantity: (productId, quantity) => { /* ... */ },
      clearCart: () => set({ items: [] }),
    }),
    { name: 'maya-pearl-cart' }
  )
);
```

---

### 3️⃣ Dependency Inversion Principle (DIP)

**Explanation:**
The `Checkout` page depends on the **abstract interface** `MessagingService` rather than a concrete WhatsApp implementation.
This allows adding **Telegram, Email, or future messaging services** without changing the high-level checkout logic.

**Bad Example (violating DIP):**

```ts
<a href={`https://wa.me/37379123456?text=${generateWhatsAppMessage()}`} target="_blank">
  Trimite Comanda pe WhatsApp
</a>
```

**Good Example (following DIP):**

```ts
// Abstract interface
export interface MessagingService {
  sendOrder(items: any[], subtotal: number, shipping: number, total: number): string;
}

// WhatsApp implementation
export class WhatsAppService implements MessagingService {
  sendOrder(items, subtotal, shipping, total) {
    // generate encoded WhatsApp message
    return encodeURIComponent(message);
  }
}

// Checkout page
const messagingService: MessagingService = new WhatsAppService("+37379123456");
const messageLink = `https://wa.me/37379123456?text=${messagingService.sendOrder(items, subtotal, shipping, total)}`;

<a href={messageLink} target="_blank">Trimite Comanda pe WhatsApp</a>
```

---

## Screenshots / Results

*ProductCard component in action:*
![ProductCard Screenshot](./screenshots/productcard.png)

*Checkout WhatsApp messaging:*
![Checkout Screenshot](./screenshots/checkout.png)

> Screenshots demonstrate that all SOLID principles were correctly applied: modular, maintainable, and extendable code.

---

## Conclusions

* **SRP** ensures each component has a single responsibility, simplifying maintenance.
* **OCP** allows extending functionality (e.g., cart discounts) without modifying existing logic.
* **DIP** decouples high-level modules from low-level services, allowing easy replacement or addition of messaging services.

**Outcome:**
The Maya Pearl Atelier project demonstrates a clear application of SOLID principles, improving **code readability, flexibility, and robustness** for future extensions.
