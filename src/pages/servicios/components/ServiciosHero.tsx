export default function ServiciosHero() {
  return (
    <section className="relative h-[420px] md:h-[520px] flex items-end pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20a%20busy%20international%20cargo%20port%20and%20highway%20with%20semi-trucks%20driving%20through%20mountains%20in%20Ecuador%2C%20dramatic%20golden%20hour%20lighting%2C%20professional%20logistics%20photography%2C%20wide%20panoramic%20scene%20with%20warm%20amber%20and%20deep%20teal%20tones%2C%20bold%20cinematic%20composition&width=1800&height=520&seq=servicios-hero-Actilogistics-2026&orientation=landscape"
          alt="Servicios Actilogistics"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/60 to-primary-950/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="inline-block bg-accent-500 text-primary-950 text-xs font-label font-700 tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Nuestros Servicios
        </div>
        <h1 className="font-heading font-900 text-4xl md:text-6xl text-background-50 leading-tight mb-4">
          SERVICIOS
        </h1>
        <p className="text-background-300 text-base md:text-lg max-w-xl">
          Experiencia y profesionalidad para tu cadena de transporte y logística en Ecuador, Colombia y Perú.
        </p>
        <div className="flex items-center gap-2 mt-6">
          <a href="/" className="text-background-400 hover:text-accent-400 text-sm transition-colors">Inicio</a>
          <i className="ri-arrow-right-s-line text-background-500 text-sm"></i>
          <span className="text-accent-400 text-sm font-700">Servicios</span>
        </div>
      </div>
    </section>
  );
}