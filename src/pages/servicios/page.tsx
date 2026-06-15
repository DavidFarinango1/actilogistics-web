import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ServiciosHero from './components/ServiciosHero';
import ValoresPilares from './components/ValoresPilares';
import ServiciosDetalle from './components/ServiciosDetalle';
import WarehouseSection from './components/WarehouseSection';
import ServiciosContactForm from './components/ServiciosContactForm';

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServiciosHero />
        <ValoresPilares />
        <ServiciosDetalle />
        <WarehouseSection />
        <ServiciosContactForm />
      </main>
      <Footer />
    </>
  );
}