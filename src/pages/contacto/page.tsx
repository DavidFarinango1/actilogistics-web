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
            title="Ubicación Actilogistics - Quito, Ecuador"
            src="https://maps.google.com/maps?q=Av.%20Galo%20Plaza%20Lasso%2069%20y%20Avellaneda%2C%20Quito%2C%20Ecuador&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa de ubicación de Actilogistics en Quito, Ecuador"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
}