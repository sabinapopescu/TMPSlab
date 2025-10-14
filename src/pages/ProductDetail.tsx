import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ShoppingBag, Heart, Share2 } from 'lucide-react';
import productsData from '@/data/products.json';
import type { Product } from '@/types';
import { formatPrice, getMetalLabel, getPearlTypeLabel } from '@/lib/format';
import { getProductImage } from '@/assets/product-images';
import { useCartStore } from '@/store/cart';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/ProductCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

const products = productsData as Product[];

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const product = products.find((p) => p.handle === handle);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cormorant text-4xl mb-4">Produs Negăsit</h1>
          <Button asChild>
            <Link to="/shop">Înapoi la Magazin</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => 
      p.id !== product.id && 
      p.categories.some((cat) => product.categories.includes(cat))
    )
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, 1);
    toast.success(`${product.title} adăugat în coș!`);
  };

  return (
    <div className="min-h-screen bg-porcelain">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/shop" className="inline-flex items-center text-graphite hover:text-brand-700 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Înapoi la Magazin
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square rounded-2xl overflow-hidden product-card-bg shadow-xl mb-6 border border-softgrey/30"
            >
              <img
                src={getProductImage(product.images[selectedImage])}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? 'border-brand-700 shadow-lg scale-105'
                        : 'border-transparent hover:border-gold-500 hover:scale-105'
                    }`}
                  >
                    <img
                      src={getProductImage(image)}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              {product.isNew && (
                <span className="inline-block bg-brand-700 text-white text-xs px-3 py-1 rounded-full mb-3">
                  Nou
                </span>
              )}
              <h1 className="font-cormorant font-bold text-4xl md:text-5xl text-charcoal mb-4">
                {product.title}
              </h1>
              <p className="text-2xl font-semibold text-brand-700 mb-4">
                {formatPrice(product.price.amount, product.price.currency)}
              </p>
              <p className="text-graphite text-lg leading-relaxed">
                {product.longDesc}
              </p>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-xl p-6 shadow-card mb-6">
              <h3 className="font-cormorant font-semibold text-xl mb-4">Detalii Produs</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-graphite">Finisaj:</dt>
                  <dd className="font-medium">{getMetalLabel(product.metal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-graphite">Tip Perle:</dt>
                  <dd className="font-medium">{getPearlTypeLabel(product.pearl.type)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-graphite">Dimensiune Perle:</dt>
                  <dd className="font-medium">{product.pearl.sizeMM.join('-')}mm</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-graphite">Disponibilitate:</dt>
                  <dd className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `În stoc (${product.stock})` : 'Epuizat'}
                  </dd>
                </div>
                {product.madeToOrder && (
                  <div className="pt-3 border-t border-softgrey">
                    <p className="text-sm text-gold-700">
                      ⭐ Produs realizat la comandă - Livrare în 7-10 zile lucrătoare
                    </p>
                  </div>
                )}
              </dl>
            </div>

            {/* Actions */}
            <div className="space-y-4 mb-8">
              <Button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-full btn-primary text-lg py-6"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {product.stock > 0 ? 'Adaugă în Coș' : 'Epuizat'}
              </Button>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  Salvează
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Distribuie
                </Button>
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="delivery" className="bg-white rounded-xl px-6 shadow-card border-0">
                <AccordionTrigger className="font-cormorant font-semibold">
                  Livrare și Retur
                </AccordionTrigger>
                <AccordionContent className="text-graphite">
                  <p className="mb-3">
                    Livrare gratuită pentru comenzi peste 1500 MDL. Livrare standard în 2-3 zile lucrătoare în Chișinău.
                  </p>
                  <p>
                    Retur gratuit în 14 zile. Produsele trebuie să fie noi, nefolosite, în ambalajul original.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="materials" className="bg-white rounded-xl px-6 shadow-card border-0">
                <AccordionTrigger className="font-cormorant font-semibold">
                  Materiale și Îngrijire
                </AccordionTrigger>
                <AccordionContent className="text-graphite">
                  <p className="mb-3">
                    Perle naturale {getPearlTypeLabel(product.pearl.type).toLowerCase()}, 
                    finisaj din {getMetalLabel(product.metal).toLowerCase()} placat 18k.
                  </p>
                  <p>
                    Evitați contactul cu parfumuri și cosmetice. Păstrați într-un loc uscat, separat de alte bijuterii. 
                    Curățați cu o cârpă moale după fiecare utilizare.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warranty" className="bg-white rounded-xl px-6 shadow-card border-0">
                <AccordionTrigger className="font-cormorant font-semibold">
                  Garanție și Retuș
                </AccordionTrigger>
                <AccordionContent className="text-graphite">
                  <p>
                    Oferim garanție de 12 luni pentru toate produsele. Servicii de retuș gratuite pentru orice defecțiuni 
                    de fabricație. Ambalaj cadou inclus gratuit.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-charcoal mb-8">
              Completează Setul
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
