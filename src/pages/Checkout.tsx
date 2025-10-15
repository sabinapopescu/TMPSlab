// import { Link } from 'react-router-dom';
// import { useCartStore } from '@/store/cart';
// import { formatPrice } from '@/lib/format';
// import { getProductImage } from '@/assets/product-images';
// import { Button } from '@/components/ui/button';
// import { MessageCircle } from 'lucide-react';

// export default function Checkout() {
//   const { items, getSubtotal } = useCartStore();

//   const subtotal = getSubtotal();
//   const shipping = subtotal > 1500 ? 0 : 50;
//   const total = subtotal + shipping;

//   const generateWhatsAppMessage = () => {
//     let message = `Bună! Aș dori să finalizez următoarea comandă:\n\n`;
    
//     items.forEach((item, index) => {
//       message += `${index + 1}. ${item.product.title}\n`;
//       message += `   Cantitate: ${item.quantity}\n`;
//       message += `   Preț: ${formatPrice(item.product.price.amount * item.quantity, item.product.price.currency)}\n\n`;
//     });

//     message += `Subtotal: ${formatPrice(subtotal)} MDL\n`;
//     message += `Livrare: ${shipping === 0 ? 'Gratuită' : formatPrice(shipping) + ' MDL'}\n`;
//     message += `Total: ${formatPrice(total)} MDL\n\n`;
//     message += `Vă rog să mă contactați pentru detalii de livrare și plată. Mulțumesc!`;

//     return encodeURIComponent(message);
//   };

//   if (items.length === 0) {
//     return (
//       <div className="min-h-screen bg-porcelain flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="font-cormorant font-bold text-3xl mb-4">Coșul Este Gol</h1>
//           <p className="text-graphite mb-8">Adaugă produse pentru a continua</p>
//           <Button asChild className="btn-primary">
//             <Link to="/shop">Către Magazin</Link>
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-porcelain py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-2xl mx-auto">
//           <h1 className="font-cormorant font-bold text-4xl md:text-5xl text-center mb-8">
//             Finalizare Comandă
//           </h1>

//           {/* Order Summary */}
//           <div className="bg-white rounded-xl p-8 shadow-card mb-8">
//             <h2 className="font-cormorant font-bold text-2xl mb-6">Sumar Comandă</h2>
            
//             <div className="space-y-4 mb-6">
//               {items.map((item) => (
//                 <div key={item.product.id} className="flex justify-between items-start pb-4 border-b border-softgrey">
//                   <div className="flex gap-4">
//                     <img
//                       src={getProductImage(item.product.images[0])}
//                       alt={item.product.title}
//                       className="w-20 h-20 object-cover rounded-xl shadow-md"
//                     />
//                     <div>
//                       <h3 className="font-medium">{item.product.title}</h3>
//                       <p className="text-sm text-graphite">Cantitate: {item.quantity}</p>
//                     </div>
//                   </div>
//                   <p className="font-medium">
//                     {formatPrice(item.product.price.amount * item.quantity, item.product.price.currency)}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-3 pt-4 border-t border-softgrey">
//               <div className="flex justify-between">
//                 <span className="text-graphite">Subtotal</span>
//                 <span className="font-medium">{formatPrice(subtotal)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-graphite">Livrare</span>
//                 <span className="font-medium">
//                   {shipping === 0 ? 'Gratuită' : formatPrice(shipping)}
//                 </span>
//               </div>
//               <div className="flex justify-between pt-3 border-t border-softgrey">
//                 <span className="font-bold text-lg">Total</span>
//                 <span className="font-bold text-xl text-brand-700">{formatPrice(total)}</span>
//               </div>
//             </div>
//           </div>

//           {/* WhatsApp Checkout */}
//           <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-card text-center mb-6">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
//               <MessageCircle className="h-8 w-8" />
//             </div>
//             <h2 className="font-cormorant font-bold text-2xl mb-3">
//               Finalizează pe WhatsApp
//             </h2>
//             <p className="text-graphite mb-6 max-w-md mx-auto">
//               Pentru procesarea comenzii, te rugăm să ne contactezi pe WhatsApp. 
//               Mesajul va conține automat detaliile comenzii tale.
//             </p>
//             <Button
//               asChild
//               className="btn-primary text-lg px-8 py-6 bg-green-600 hover:bg-green-700 border-green-700"
//             >
//               <a
//                 href={`https://wa.me/37379123456?text=${generateWhatsAppMessage()}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <MessageCircle className="mr-2 h-5 w-5" />
//                 Trimite Comanda pe WhatsApp
//               </a>
//             </Button>
//           </div>

//           {/* Alternative */}
//           <div className="bg-white rounded-xl p-6 shadow-card text-center">
//             <p className="text-sm text-graphite mb-4">
//               Preferi o altă metodă de contact?
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <Button asChild variant="outline">
//                 <a href="https://t.me/mayapearl" target="_blank" rel="noopener noreferrer">
//                   Telegram
//                 </a>
//               </Button>
//               <Button asChild variant="outline">
//                 <a href="mailto:contact@mayapearl.md">Email</a>
//               </Button>
//               <Button asChild variant="outline">
//                 <a href="tel:+37379123456">Telefon</a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// src/pages/Checkout.tsx
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/format';
import { getProductImage } from '@/assets/product-images';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { MessagingService, WhatsAppService } from '@/lib/services/WhatsAppService';

export default function Checkout() {
  const { items, getSubtotal } = useCartStore();

  const subtotal = getSubtotal();
  const shipping = subtotal > 1500 ? 0 : 50;
  const total = subtotal + shipping;

  // ✅ Apply DIP: high-level module depends on abstraction, not concrete service
  const messagingService: MessagingService = new WhatsAppService('+37379123456');

  const messageLink = `https://wa.me/37379123456?text=${messagingService.sendOrder(items, subtotal, shipping, total)}`;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-porcelain flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cormorant font-bold text-3xl mb-4">Coșul Este Gol</h1>
          <p className="text-graphite mb-8">Adaugă produse pentru a continua</p>
          <Button asChild className="btn-primary">
            <Link to="/shop">Către Magazin</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-porcelain py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-cormorant font-bold text-4xl md:text-5xl text-center mb-8">
            Finalizare Comandă
          </h1>

          {/* Order Summary */}
          <div className="bg-white rounded-xl p-8 shadow-card mb-8">
            <h2 className="font-cormorant font-bold text-2xl mb-6">Sumar Comandă</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-start pb-4 border-b border-softgrey">
                  <div className="flex gap-4">
                    <img
                      src={getProductImage(item.product.images[0])}
                      alt={item.product.title}
                      className="w-20 h-20 object-cover rounded-xl shadow-md"
                    />
                    <div>
                      <h3 className="font-medium">{item.product.title}</h3>
                      <p className="text-sm text-graphite">Cantitate: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">
                    {formatPrice(item.product.price.amount * item.quantity, item.product.price.currency)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-softgrey">
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
              <div className="flex justify-between pt-3 border-t border-softgrey">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-xl text-brand-700">{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Checkout */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-card text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h2 className="font-cormorant font-bold text-2xl mb-3">
              Finalizează pe WhatsApp
            </h2>
            <p className="text-graphite mb-6 max-w-md mx-auto">
              Pentru procesarea comenzii, te rugăm să ne contactezi pe WhatsApp. 
              Mesajul va conține automat detaliile comenzii tale.
            </p>
            <Button
              asChild
              className="btn-primary text-lg px-8 py-6 bg-green-600 hover:bg-green-700 border-green-700"
            >
              <a href={messageLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Trimite Comanda pe WhatsApp
              </a>
            </Button>
          </div>

          {/* Alternative */}
          <div className="bg-white rounded-xl p-6 shadow-card text-center">
            <p className="text-sm text-graphite mb-4">
              Preferi o altă metodă de contact?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="outline">
                <a href="https://t.me/mayapearl" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:contact@mayapearl.md">Email</a>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:+37379123456">Telefon</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
