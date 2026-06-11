export default function SostenibilidadHero() {
  return (
    <section className="relative h-[420px] md:h-[560px] flex items-end pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Hands%20gently%20holding%20a%20young%20green%20seedling%20sprouting%20from%20rich%20dark%20soil%20in%20Ecuador%20forest%20region%20lush%20tropical%20vegetation%20in%20background%20warm%20golden%20sunlight%20filtering%20through%20leaves%20environmental%20conservation%20sustainability%20concept%20dramatic%20cinematic%20lighting%20deep%20green%20and%20golden%20tones%20professional%20photography&width=1800&height=560&seq=sosteni-hero-acti-2026&orientation=landscape"
          alt="Sostenibilidad Activlogistics - Compromiso con el planeta"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/55 to-primary-950/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="inline-block bg-accent-500 text-primary-950 text-xs font-label font-700 tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
          Compromiso Global
        </div>
        <h1 className="font-heading font-900 text-5xl md:text-7xl text-background-50 leading-tight mb-4 uppercase tracking-wide">
          Sostenibilidad
        </h1>
        <p className="text-background-300 text-base md:text-lg max-w-2xl leading-relaxed">
          Nos alineamos con los Objetivos de Desarrollo Sostenible de la ONU. El crecimiento empresarial y la responsabilidad con el planeta van de la mano en Activlogistics.
        </p>
        <div className="flex items-center gap-2 mt-6">
          <a href="/" className="text-background-400 hover:text-accent-400 text-sm transition-colors">Inicio</a>
          <i className="ri-arrow-right-s-line text-background-500 text-sm"></i>
          <span className="text-accent-400 text-sm font-700">Sostenibilidad</span>
        </div>
      </div>
    </section>
  );
}