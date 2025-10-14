import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Pasiune',
    description: 'Fiecare bijuterie este creată cu dragoste și atenție la detalii',
  },
  {
    icon: Sparkles,
    title: 'Calitate',
    description: 'Selectăm doar cele mai frumoase perle naturale pentru creațiile noastre',
  },
  {
    icon: Award,
    title: 'Meșteșug',
    description: 'Tehnici tradiționale combinate cu design modern',
  },
  {
    icon: Users,
    title: 'Comunitate',
    description: 'Construim relații pe termen lung cu clienții noștri',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-porcelain">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-brand-900 to-brand-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-cormorant font-bold text-5xl md:text-6xl mb-6">
              Povestea Maya Pearl
            </h1>
            <p className="text-xl text-brand-100">
              O călătorie dedicată artei bijuteriilor din perle naturale, 
              unde tradițiaunește modernul în fiecare piesă creată manual
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lift">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
                  alt="Atelier Maya Pearl"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cormorant font-bold text-4xl mb-6">Despre Atelierul Nostru</h2>
              <div className="space-y-4 text-graphite leading-relaxed">
                <p>
                  Maya Pearl a luat naștere din pasiunea pentru frumusețea naturală a perlelor și 
                  dorința de a crea bijuterii care să spună o poveste. Fiecare piesă din colecția 
                  noastră este realizată manual în atelierul nostru din Chișinău.
                </p>
                <p>
                  Lucrăm exclusiv cu perle naturale de cea mai înaltă calitate, selectate cu grijă 
                  pentru strălucirea și unicitatea lor. Combinăm tehnici tradiționale de bijuterie 
                  cu design contemporan pentru a crea piese intemporale.
                </p>
                <p>
                  Credem că bijuteriile sunt mai mult decât simple accesorii – ele sunt amintiri 
                  purtate, momente celebrate și povești spuse. De aceea, fiecare creație Maya Pearl 
                  vine cu garanția calității și a unei povești unice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-cormorant font-bold text-4xl mb-4">Valorile Noastre</h2>
            <p className="text-graphite text-lg max-w-2xl mx-auto">
              Principiile care ghidează fiecare aspect al activității noastre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 text-brand-700 mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-cormorant font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-graphite">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-cormorant font-bold text-4xl mb-12 text-center">
              Procesul Nostru de Creație
            </h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-700 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-cormorant font-semibold text-2xl mb-2">Selecție</h3>
                  <p className="text-graphite">
                    Alegem cu atenție cele mai frumoase perle naturale, examinând fiecare pentru 
                    strălucire, formă și calitate. Lucrăm direct cu producători de încredere.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-700 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-cormorant font-semibold text-2xl mb-2">Design</h3>
                  <p className="text-graphite">
                    Creăm schițe și modele 3D pentru fiecare piesă, asigurându-ne că designul 
                    completează frumusețea naturală a perlelor și este confortabil de purtat.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-700 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-cormorant font-semibold text-2xl mb-2">Fabricație</h3>
                  <p className="text-graphite">
                    Fiecare bijuterie este asamblată manual în atelierul nostru, cu atenție la 
                    fiecare detaliu. Folosim doar metale de calitate superioară și tehnici dovedite.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-700 text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-cormorant font-semibold text-2xl mb-2">Control Calitate</h3>
                  <p className="text-graphite">
                    Fiecare piesă trece printr-un control riguros de calitate și este ambalată cu 
                    grijă în cutia noastră signature, gata să devină un cadou special.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-16 bg-gradient-to-br from-gold-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-card">
              <p className="font-cormorant font-bold text-3xl text-brand-700 mb-2">100%</p>
              <p className="text-graphite">Handmade în Moldova</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-card">
              <p className="font-cormorant font-bold text-3xl text-brand-700 mb-2">12 Luni</p>
              <p className="text-graphite">Garanție & Retuș Gratuit</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-card">
              <p className="font-cormorant font-bold text-3xl text-brand-700 mb-2">Luxos</p>
              <p className="text-graphite">Ambalaj Cadou Inclus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
