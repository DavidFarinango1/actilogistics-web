import { Link } from 'react-router-dom';

export default function ContactoHero() {
  return (
    <section className="relative w-full h-[380px] md:h-[440px] overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Modern%20logistics%20office%20with%20professionals%20working%20on%20computers%20and%20maps%2C%20warm%20ambient%20lighting%2C%20clean%20open%20workspace%2C%20large%20windows%20with%20natural%20light%2C%20neutral%20beige%20and%20warm%20gray%20tones%2C%20elegant%20corporate%20environment%2C%20high%20detail%20editorial%20photography&width=1800&height=700&seq=contacto-hero-Actilogistics-2026&orientation=landscape"
        alt="Contacto Actilogistics"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/65"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <nav className="flex items-center gap-2 text-background-300 text-xs mb-5 font-label tracking-wider uppercase">
          <Link to="/" className="hover:text-accent-400 transition-colors">Inicio</Link>
          <i className="ri-arrow-right-s-line text-background-500"></i>
          <span className="text-accent-400">Contacto</span>
        </nav>
        <h1 className="font-heading font-900 text-5xl md:text-6xl text-background-50 tracking-widest uppercase mb-4 leading-none">
          CONTACTO
        </h1>
        <p className="text-background-200 text-base md:text-lg max-w-xl font-body leading-relaxed">
          Estamos listos para atenderte. Contáctanos por el canal de tu preferencia y te responderemos a la brevedad.
        </p>
      </div>
    </section>
  );
}