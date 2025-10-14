import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/lib/format';
import { getProductImage } from '@/assets/product-images';
import { useCartStore } from '@/store/cart';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
    toast.success(`${product.title} adăugat în coș!`);
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
          {/* Image */}
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-gold-50/30 to-white">
            <img
              src={getProductImage(product.images[0])}
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Badges */}
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

          {/* Quick Add Button */}
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

        {/* Product Info */}
        <div className="mt-5 space-y-2.5 px-1">
          <h3 className="font-cormorant font-semibold text-xl text-charcoal group-hover:text-brand-700 transition-colors leading-tight">
            {product.title}
          </h3>
          <p className="text-sm text-graphite/80 line-clamp-2 leading-relaxed">{product.shortDesc}</p>
          <div className="flex items-center justify-between pt-1">
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
