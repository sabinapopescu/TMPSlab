import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/format';
import { getProductImage } from '@/assets/product-images';
import { Button } from '@/components/ui/button';

export default function Cart() {
  const { items, updateQuantity, removeItem, getSubtotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-porcelain flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-graphite mb-4" />
          <h1 className="font-cormorant font-bold text-3xl mb-4">Coșul Tău Este Gol</h1>
          <p className="text-graphite mb-8">Descoperă colecția noastră de bijuterii din perle</p>
          <Button asChild className="btn-primary">
            <Link to="/shop">Explorează Magazinul</Link>
          </Button>
        </div>
      </div>
    );
  }

  const subtotal = getSubtotal();
  const shipping = subtotal > 1500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-porcelain py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cormorant font-bold text-4xl md:text-5xl mb-8">Coșul Tău</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white rounded-xl p-6 shadow-card">
                <div className="flex gap-6">
                  <Link to={`/product/${item.product.handle}`} className="flex-shrink-0">
                    <img
                      src={getProductImage(item.product.images[0])}
                      alt={item.product.title}
                      className="w-28 h-28 object-cover rounded-xl shadow-md"
                    />
                  </Link>

                  <div className="flex-1">{/* rest of cart item */}
                    <Link to={`/product/${item.product.handle}`}>
                      <h3 className="font-cormorant font-semibold text-xl mb-2 hover:text-brand-700 transition-colors">
                        {item.product.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-graphite mb-4">{item.product.shortDesc}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="font-semibold text-brand-700">
                          {formatPrice(item.product.price.amount * item.quantity, item.product.price.currency)}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.product.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-card sticky top-24">
              <h2 className="font-cormorant font-bold text-2xl mb-6">Sumar Comandă</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-graphite">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-graphite">Livrare</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Gratuită' : formatPrice(shipping)}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-sm text-gold-700">
                    Livrare gratuită pentru comenzi peste 1500 MDL
                  </p>
                )}
                <div className="border-t border-softgrey pt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-xl text-brand-700">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full btn-primary mb-4">
                <Link to="/checkout">Continuă la Checkout</Link>
              </Button>

              <Button asChild variant="outline" className="w-full">
                <Link to="/shop">Continuă Cumpărăturile</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
