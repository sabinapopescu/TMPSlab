// // ❌ BAD: This ProductCard component violates SRP
// // It does TOO MANY things: handles UI, price formatting, stock messages, and cart logic all together.

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShoppingBag } from "lucide-react";
// import { toast } from "sonner";

// export function ProductCard({ product }: any) {
//   // ❌ UI + business logic + formatting logic mixed together
//   const handleQuickAdd = (e: React.MouseEvent) => {
//     e.preventDefault();
//     // ❌ Direct cart manipulation (no dedicated store/service)
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     cart.push({ ...product, quantity: 1 });
//     localStorage.setItem("cart", JSON.stringify(cart));

//     // ❌ UI message here too
//     toast.success(`${product.title} adăugat în coș!`);
//   };

//   // ❌ Inline formatting and currency handling
//   const formattedPrice =
//     product.price.currency === "MDL"
//       ? product.price.amount + " MDL"
//       : product.price.amount + " EUR";

//   return (
//     <motion.div className="product">
//       <Link to={`/product/${product.handle}`}>
//         <img src={product.image} alt={product.title} />
//         <h3>{product.title}</h3>
//         <p>{formattedPrice}</p>
//         {/* ❌ Directly deciding stock state here */}
//         {product.stock === 0 && <span>Stoc epuizat</span>}
//       </Link>
//       <button onClick={handleQuickAdd}>Add to Cart</button>
//     </motion.div>
//   );
// }

// ✅ GOOD: This ProductCard follows the Single Responsibility Principle (SRP).
// It has only ONE responsibility — to render a product card UI.
// All other concerns (formatting, cart, notifications) are delegated to separate modules.

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/format'; // ✅ Separate utility handles price formatting
import { getProductImage } from '@/assets/product-images'; // ✅ Asset management handled elsewhere
import { useCartStore } from '@/store/cart'; // ✅ Cart logic handled by Zustand store (not this component)
import { Button } from '@/components/ui/button';
import { toast } from 'sonner'; // ✅ Notifications handled by dedicated library

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // ✅ Uses centralized cart store instead of managing logic locally
  const addItem = useCartStore((state) => state.addItem);

  // ✅ Component delegates cart manipulation to store
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1); // handled by store logic
    toast.success(`${product.title} adăugat în coș!`); // handled by notification lib
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Link to={`/product/${product.handle}`} className="block">
        <div className="relative overflow-hidden rounded-2xl product-card-bg shadow-lg hover-lift border border-softgrey/30">
          {/* ✅ UI handles only presentation — no business logic here */}
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-gold-50/30 to-white">
            <img
              src={getProductImage(product.images[0])} // ✅ delegated image resolver
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* ✅ Conditional rendering is still UI-related, acceptable for SRP */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-brand-700 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                Nou
              </span>
            )}
            {product.madeToOrder && (
              <span className="bg-gold-500 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-md">
                La Comandă
              </span>
            )}
            {product.stock < 3 && product.stock > 0 && (
              <span className="bg-red-500 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-md">
                Stoc Limitat
              </span>
            )}
          </div>

          {/* ✅ Cart button triggers an action, but logic is abstracted */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              size="icon"
              className="btn-primary rounded-full shadow-xl h-12 w-12"
              onClick={handleQuickAdd}
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* ✅ Purely presentational section */}
        <div className="mt-5 space-y-2.5 px-1">
          <h3 className="font-cormorant font-semibold text-xl text-charcoal group-hover:text-brand-700 transition-colors leading-tight">
            {product.title}
          </h3>

          <p className="text-sm text-graphite/80 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          <div className="flex items-center justify-between pt-1">
            {/* ✅ Uses formatPrice utility — keeps display logic separate */}
            <p className="font-semibold text-lg text-brand-700">
              {formatPrice(product.price.amount, product.price.currency)}
            </p>

            {product.stock === 0 && (
              <span className="text-xs text-red-600 font-medium">Epuizat</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
