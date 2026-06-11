import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ContactoHero from './components/ContactoHero';
import ContactoEmails from './components/ContactoEmails';
import ContactoForm from './components/ContactoForm';

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background-50">
      <Navbar />
      <main className="flex-1 pt-0">
        <ContactoHero />
        <ContactoEmails />
        <ContactoForm />
        {/* Google Map embed */}
        <section className="w-full h-[380px] overflow-hidden">
          <iframe
            title="Ubicación Activlogistics Ecuador"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7947865985!2d-78.49258!3d-0.22985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a4002427c9f%3A0x44b991e158ef5572!2sAv.%20Amazonas%2C%20Quito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa de ubicación de Activlogistics en Quito, Ecuador"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
}