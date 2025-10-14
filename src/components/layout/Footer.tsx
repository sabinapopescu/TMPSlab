import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-cormorant font-bold mb-4">Maya Pearl</h3>
            <p className="text-brand-200 text-sm leading-relaxed">
              Bijuterii artizanale din perle naturale, create cu pasiune și atenție la detalii în atelierul nostru.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cormorant font-semibold text-lg mb-4">Navigare</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-brand-200 hover:text-white transition-colors">
                  Magazin
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-brand-200 hover:text-white transition-colors">
                  Colecții
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-200 hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-brand-200 hover:text-white transition-colors">
                  Ghid de Îngrijire
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-brand-200 hover:text-white transition-colors">
                  Jurnal
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-cormorant font-semibold text-lg mb-4">Asistență</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-brand-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="text-brand-200 hover:text-white transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="text-brand-200 hover:text-white transition-colors">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <a href="https://wa.me/37379123456" className="text-brand-200 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://t.me/mayapearl" className="text-brand-200 hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="font-cormorant font-semibold text-lg mb-4">Rămâi Conectat</h4>
            <p className="text-brand-200 text-sm mb-4">
              Abonează-te pentru oferte exclusive și colecții noi
            </p>
            <form className="mb-6">
              <input
                type="email"
                placeholder="Email-ul tău"
                className="w-full px-4 py-2 rounded-lg bg-brand-800 border border-brand-700 text-white placeholder-brand-300 focus:outline-none focus:border-gold-500 text-sm"
              />
              <button
                type="submit"
                className="w-full mt-2 btn-secondary text-sm"
              >
                Abonează-te
              </button>
            </form>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/mayapearl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-200 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/mayapearl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-200 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@mayapearl.md"
                className="text-brand-200 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 mt-8 pt-8 text-center text-sm text-brand-300">
          <p>&copy; {new Date().getFullYear()} Maya Pearl. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
