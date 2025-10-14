import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log('Contact form:', data);
    toast.success('Mesajul a fost trimis! Vă vom contacta în curând.');
    reset();
  };

  const whatsappMessage = encodeURIComponent('Bună! Sunt interesat(ă) de bijuteriile Maya Pearl.');

  return (
    <div className="min-h-screen bg-porcelain py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-cormorant font-bold text-4xl md:text-5xl text-charcoal mb-4">
              Contactează-ne
            </h1>
            <p className="text-graphite text-lg">
              Suntem aici să răspundem la întrebările tale și să te ajutăm să găsești bijuteria perfectă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h2 className="font-cormorant font-semibold text-2xl mb-6">Informații Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:contact@mayapearl.md" className="text-graphite hover:text-brand-700">
                      contact@mayapearl.md
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Telefon</p>
                    <a href="tel:+37379123456" className="text-graphite hover:text-brand-700">
                      +373 79 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Atelier</p>
                    <p className="text-graphite">
                      Str. Ștefan cel Mare 123<br />
                      Chișinău, Moldova
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-softgrey">
                <h3 className="font-cormorant font-semibold text-xl mb-4">Contactează-ne Direct</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full btn-primary">
                    <a href={`https://wa.me/37379123456?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild className="w-full btn-secondary">
                    <a href="https://t.me/mayapearl" target="_blank" rel="noopener noreferrer">
                      Telegram
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h2 className="font-cormorant font-semibold text-2xl mb-6">Trimite-ne un Mesaj</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nume *</Label>
                  <Input
                    id="name"
                    {...register('name', { required: 'Numele este obligatoriu' })}
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email-ul este obligatoriu',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email invalid'
                      }
                    })}
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mesaj *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Mesajul este obligatoriu' })}
                    className="mt-1"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full btn-primary">
                  <Send className="mr-2 h-4 w-4" />
                  Trimite Mesajul
                </Button>
              </form>
            </div>
          </div>

          {/* Program */}
          <div className="bg-white rounded-xl p-8 shadow-card text-center">
            <h2 className="font-cormorant font-semibold text-2xl mb-4">Program Atelier</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div>
                <p className="font-medium">Luni - Vineri</p>
                <p className="text-graphite">10:00 - 18:00</p>
              </div>
              <div>
                <p className="font-medium">Sâmbătă</p>
                <p className="text-graphite">11:00 - 16:00</p>
              </div>
            </div>
            <p className="text-sm text-graphite mt-4">
              Programări recomandate pentru consultații personalizate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
