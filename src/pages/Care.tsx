import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Droplet, Sun, Shield, Sparkles } from 'lucide-react';

const tips = [
  {
    icon: Droplet,
    title: 'Evită Apa',
    description: 'Scoate bijuteriile înainte de duș, înot sau activități unde pot intra în contact cu apă',
  },
  {
    icon: Sun,
    title: 'Păstrare Corectă',
    description: 'Depozitează într-un loc uscat, separat de alte bijuterii pentru a evita zgârieturile',
  },
  {
    icon: Shield,
    title: 'Protejează de Chimicale',
    description: 'Aplică parfum și cosmetice înainte de a purta bijuteriile din perle',
  },
  {
    icon: Sparkles,
    title: 'Curățare Delicată',
    description: 'Șterge cu o cârpă moale și umedă după fiecare utilizare',
  },
];

export default function Care() {
  return (
    <div className="min-h-screen bg-porcelain py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-cormorant font-bold text-4xl md:text-5xl text-charcoal mb-4">
              Ghid de Îngrijire a Perlelor
            </h1>
            <p className="text-graphite text-lg">
              Păstrează-ți bijuteriile strălucitoare pentru generații
            </p>
          </div>

          {/* Quick Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gold-100 p-3 rounded-lg flex-shrink-0">
                    <tip.icon className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-cormorant font-semibold text-xl mb-2">{tip.title}</h3>
                    <p className="text-graphite">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Guide */}
          <div className="bg-white rounded-xl p-8 shadow-card mb-12">
            <h2 className="font-cormorant font-bold text-3xl mb-6">Ghid Detaliat</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="daily-care" className="border-b border-softgrey">
                <AccordionTrigger className="font-cormorant font-semibold text-xl">
                  Îngrijire Zilnică
                </AccordionTrigger>
                <AccordionContent className="text-graphite space-y-3 pt-4">
                  <p>
                    <strong>Înainte de purtare:</strong> Asigură-te că pielea este curată și uscată. 
                    Aplică orice parfum, cremă sau spray de păr cu cel puțin 15 minute înainte de 
                    a purta bijuteriile.
                  </p>
                  <p>
                    <strong>În timpul zilei:</strong> Evită contactul cu suprafețe dure și chimicale. 
                    Scoate bijuteriile când speli mâinile sau folosești produse de curățenie.
                  </p>
                  <p>
                    <strong>După purtare:</strong> Șterge ușor bijuteriile cu o cârpă moale și curată 
                    pentru a îndepărta reziduurile de uleiuri naturale și praf.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cleaning" className="border-b border-softgrey">
                <AccordionTrigger className="font-cormorant font-semibold text-xl">
                  Cum să Cureți Perlele
                </AccordionTrigger>
                <AccordionContent className="text-graphite space-y-3 pt-4">
                  <p>
                    Perlele sunt delicate și necesită îngrijire specială:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Folosește doar apă călduță și săpun bland</li>
                    <li>Șterge ușor cu o cârpă moale de bumbac sau microfibră</li>
                    <li>Nu folosi niciodată amoniac, înălbitori sau abrazivi</li>
                    <li>Nu pune perlele în aparat ultrasonic de curățare</li>
                    <li>Lasă bijuteriile să se usuce complet pe o suprafață plată înainte de depozitare</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="storage" className="border-b border-softgrey">
                <AccordionTrigger className="font-cormorant font-semibold text-xl">
                  Depozitare Corectă
                </AccordionTrigger>
                <AccordionContent className="text-graphite space-y-3 pt-4">
                  <p>
                    <strong>Mediu ideal:</strong> Păstrează perlele într-un loc uscat, la temperatura 
                    camerei. Evită căldura extremă și lumina directă a soarelui.
                  </p>
                  <p>
                    <strong>Separat:</strong> Depozitează fiecare piesă separat în săculeți de catifea 
                    sau în compartimente separate ale cutiei de bijuterii pentru a evita zgârieturile.
                  </p>
                  <p>
                    <strong>Poziție:</strong> Colierele ar trebui să fie întinse pe orizontală pentru 
                    a evita întinderea firului de mătase.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pearls-101" className="border-b border-softgrey">
                <AccordionTrigger className="font-cormorant font-semibold text-xl">
                  Tot Ce Trebuie Să Știi Despre Perle
                </AccordionTrigger>
                <AccordionContent className="text-graphite space-y-3 pt-4">
                  <p>
                    <strong>Compoziție:</strong> Perlele sunt compuse din carbonat de calciu și 
                    conchiolin, materiale organice care le fac sensibile la acizi și chimicale.
                  </p>
                  <p>
                    <strong>Scala Mohs:</strong> Perlele au o duritate de 2.5-4.5 pe scala Mohs, 
                    ceea ce le face mai moi decât majoritatea pietrelor prețioase.
                  </p>
                  <p>
                    <strong>Tipuri:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Perle de apă dulce - cultivate în iazuri și lacuri</li>
                    <li>Perle baroque - forme organice, unice</li>
                    <li>Perle seed - perle foarte mici, 2-4mm</li>
                    <li>Perle cultivate - crescute cu intervenție umană</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="maintenance" className="border-b border-softgrey">
                <AccordionTrigger className="font-cormorant font-semibold text-xl">
                  Întreținere Profesională
                </AccordionTrigger>
                <AccordionContent className="text-graphite space-y-3 pt-4">
                  <p>
                    Recomandăm aducerea bijuteriilor pentru inspecție profesională la fiecare 6-12 luni:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Verificăm închiderile și sistemele de siguranță</li>
                    <li>Inspectăm firele de mătase pentru uzură (recomandat schimb la 2-3 ani)</li>
                    <li>Curățare profesională delicată</li>
                    <li>Reașezare a perlelor dacă este necesar</li>
                  </ul>
                  <p className="pt-3">
                    Oferim servicii de retuș gratuite pentru 12 luni de la achiziție.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dos-donts" className="border-none">
                <AccordionTrigger className="font-cormorant font-semibold text-xl">
                  Ce Să Faci și Ce Să Eviți
                </AccordionTrigger>
                <AccordionContent className="text-graphite pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3">✓ Fă Asta:</h4>
                      <ul className="space-y-2">
                        <li>• Poartă perlele des - umezeala naturală le menține strălucitoare</li>
                        <li>• Șterge după fiecare purtare</li>
                        <li>• Depozitează separat și la plat</li>
                        <li>• Curăță cu apă caldă și săpun bland</li>
                        <li>• Adu la control profesional anual</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">✗ Evită Asta:</h4>
                      <ul className="space-y-2">
                        <li>• Contact cu parfum, spray de păr sau cosmetice</li>
                        <li>• Expunere la apă clorinată sau sărată</li>
                        <li>• Depozitare în medii foarte uscate</li>
                        <li>• Curățare cu soluții chimice sau ultrasunete</li>
                        <li>• Lăsarea în lumina directă a soarelui</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-brand-700 to-brand-800 rounded-xl p-8 text-white text-center">
            <h2 className="font-cormorant font-bold text-3xl mb-4">
              Ai Întrebări Despre Îngrijirea Perlelor?
            </h2>
            <p className="text-brand-100 mb-6">
              Echipa noastră este disponibilă să răspundă la orice întrebare și să îți ofere 
              sfaturi personalizate pentru îngrijirea bijuteriilor tale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@mayapearl.md"
                className="inline-flex items-center justify-center btn-secondary px-6 py-3"
              >
                Contactează-ne
              </a>
              <a
                href="https://wa.me/37379123456"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
