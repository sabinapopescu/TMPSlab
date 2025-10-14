import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '@/store/cart';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());
  const { t, language, setLanguage } = useLanguage();

  const categories = [
    { label: t.categories.cercei, path: '/shop/cercei' },
    { label: t.categories.coliere, path: '/shop/coliere' },
    { label: t.categories.bratari, path: '/shop/bratari' },
    { label: t.categories.seturi, path: '/shop/seturi' },
    { label: t.categories['setuar-lariat'], path: '/shop/setuar-lariat' },
    { label: t.categories.asimetric, path: '/shop/asimetric' },
    { label: t.categories.bow, path: '/shop/bow' },
  ];

  const languages = [
    { code: 'ro', label: 'RO' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-softgrey">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-cormorant font-bold text-brand-700">
              Maya Pearl
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/shop" className="text-graphite hover:text-brand-700 transition-colors">
              {t.nav.shop}
            </Link>
            
            <div className="group relative">
              <button className="text-graphite hover:text-brand-700 transition-colors">
                {t.nav.categories}
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lift rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-softgrey">
                <div className="py-2">{/* categories mapped below */}
                  {categories.map((cat) => (
                    <Link
                      key={cat.path}
                      to={cat.path}
                      className="block px-4 py-2 text-graphite hover:bg-gold-50 hover:text-brand-700 transition-colors"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/collections" className="text-graphite hover:text-brand-700 transition-colors">
              {t.nav.collections}
            </Link>
            <Link to="/about" className="text-graphite hover:text-brand-700 transition-colors">
              {t.nav.about}
            </Link>
            <Link to="/care" className="text-graphite hover:text-brand-700 transition-colors">
              {t.nav.care}
            </Link>
            <Link to="/journal" className="text-graphite hover:text-brand-700 transition-colors">
              {t.nav.journal}
            </Link>
            <Link to="/contact" className="text-graphite hover:text-brand-700 transition-colors">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-graphite hover:text-brand-700">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as Language)}
                    className={language === lang.code ? 'bg-gold-50 font-medium' : ''}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="text-graphite hover:text-brand-700"
              asChild
            >
              <Link to="/search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-graphite hover:text-brand-700 relative"
              asChild
            >
              <Link to="/cart">
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-graphite"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-softgrey py-4 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/shop"
                className="px-4 py-2 text-graphite hover:text-brand-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.shop}
              </Link>
              
              <div className="px-4 py-2">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{t.nav.categories}</p>
                {categories.map((cat) => (
                  <Link
                    key={cat.path}
                    to={cat.path}
                    className="block py-2 text-graphite hover:text-brand-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>

              <Link
                to="/collections"
                className="px-4 py-2 text-graphite hover:text-brand-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.collections}
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-graphite hover:text-brand-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                to="/care"
                className="px-4 py-2 text-graphite hover:text-brand-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.care}
              </Link>
              <Link
                to="/journal"
                className="px-4 py-2 text-graphite hover:text-brand-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.journal}
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-graphite hover:text-brand-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
