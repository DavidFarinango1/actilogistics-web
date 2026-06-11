import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import SectorsSection from './components/SectorsSection';
import BannerSection from './components/BannerSection';
import StatsSection from './components/StatsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactFormSection from './components/ContactFormSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyUsSection />
        <SectorsSection />
        <BannerSection />
        <StatsSection />
        <CertificationsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}