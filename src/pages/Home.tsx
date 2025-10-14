import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Gift, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import productsData from '@/data/products.json';
import type { Product } from '@/types';
import heroImage from '@/assets/hero-pearls.jpg';

const products = productsData as Product[];
const featuredProducts = products.filter(p => p.isNew || p.stock < 5).slice(0, 6);

export default function Home() {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Award,
      title: t.home.handmade,
      description: t.home.handmadeDesc,
    },
    {
      icon: RefreshCcw,
      title: t.home.warranty,
      description: t.home.warrantyDesc,
    },
    {
      icon: Gift,
      title: t.home.giftBox,
      description: t.home.giftBoxDesc,
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-porcelain/95" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="font-cormorant font-bold text-6xl md:text-7xl lg:text-8xl text-white mb-8 drop-shadow-2xl leading-tight">
            {t.home.heroTitle}<br />{t.home.heroSubtitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
            {t.home.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild className="btn-primary text-lg px-10 py-7 text-base">
              <Link to="/shop">
                {t.home.discoverCollection}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="btn-primary text-lg px-10 py-7 text-base">
              <Link to="/about">{t.home.aboutAtelier}</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white border-y border-softgrey/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-100 to-gold-50 text-brand-700 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-9 w-9" strokeWidth={1.5} />
                </div>
                <h3 className="font-cormorant font-semibold text-2xl mb-3">{value.title}</h3>
                <p className="text-graphite/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-porcelain">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-cormorant font-bold text-4xl md:text-5xl text-charcoal mb-4">
              {t.home.newBestsellers}
            </h2>
            <p className="text-xl text-graphite max-w-2xl mx-auto">
              {t.home.newBestsellersDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="btn-secondary px-8 py-6 text-lg">
              <Link to="/shop">
                {t.home.viewAll}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-cormorant font-bold text-4xl md:text-5xl mb-6">
              {t.home.customOrder}
            </h2>
            <p className="text-xl mb-8 text-brand-100">
              {t.home.customOrderDesc}
            </p>
            <Button asChild className="btn-secondary text-lg px-8 py-6 bg-white text-brand-700 hover:bg-gold-50">
              <Link to="/contact">{t.home.contactUs}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-cormorant font-bold text-4xl text-charcoal mb-2">
                {t.home.fromJournal}
              </h2>
              <p className="text-graphite">{t.home.journalDesc}</p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link to="/journal">
                {t.home.seeAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                  alt="Ghid de îngrijire pentru perle"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-cormorant font-semibold text-2xl mb-2 group-hover:text-brand-700 transition-colors">
                Ghidul Complet de Îngrijire a Perlelor
              </h3>
              <p className="text-graphite">
                Descoperă cum să păstrezi bijuteriile tale din perle strălucitoare ani de zile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                  alt="Procesul de creație"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-cormorant font-semibold text-2xl mb-2 group-hover:text-brand-700 transition-colors">
                În Culisele Atelierului Maya Pearl
              </h3>
              <p className="text-graphite">
                Fiecare bijuterie începe cu o poveste. Descoperă procesul nostru artizanal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
