import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import SostenibilidadHero from './components/SostenibilidadHero';
import OdsSection from './components/OdsSection';
import PilaresVerdes from './components/PilaresVerdes';
import SostenibilidadBanner from './components/SostenibilidadBanner';
import SostenibilidadContacto from './components/SostenibilidadContacto';

export default function SostenibilidadPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <SostenibilidadHero />
      <OdsSection />
      <PilaresVerdes />
      <SostenibilidadBanner />
      <SostenibilidadContacto />
      <Footer />
    </div>
  );
}