import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const pilares = [
  {
    icon: 'ri-cpu-line',
    title: 'Tecnología',
    desc: 'Integración de sistemas de rastreo satelital en tiempo real, optimización matemática de rutas y automatización de reportes.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Seguridad',
    desc: 'Monitoreo ininterrumpido 24/7, control riguroso de cabinas y protocolos estrictos de mitigación de riesgos en tránsito.',
  },
  {
    icon: 'ri-leaf-line',
    title: 'Sostenibilidad',
    desc: 'Reducción proactiva de emisiones mediante algoritmos de consolidación de carga y mantenimiento de flotas verdes.',
  },
  {
    icon: 'ri-settings-4-line',
    title: 'Customización',
    desc: 'Soluciones logísticas a la medida, adaptadas a las necesidades específicas de cada cliente y su cadena de suministro.',
  },
];

export default function FilosofiaCorporativaPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Professional%20logistics%20operations%20center%20in%20Ecuador%20with%20workers%20monitoring%20screens%20and%20truck%20fleet%20in%20background%2C%20modern%20control%20room%2C%20warm%20corporate%20lighting%2C%20organized%20professional%20workspace%2C%20confident%20team%2C%20industrial%20scale%20operations&width=1600&height=700&seq=acti-pillars-bg"
            alt="Filosofía Corporativa Activlogistics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/55 to-primary-950/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="inline-block bg-accent-500 text-primary-950 text-xs font-label font-700 tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Cultura empresarial
          </div>
          <h1 className="font-heading font-900 text-4xl md:text-6xl text-background-50 leading-tight mb-4 uppercase tracking-wide">
            Filosofía Corporativa
          </h1>
          <p className="text-background-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Más que transporte — construimos relaciones de largo plazo sustentadas en valores sólidos, innovación y logística sin límites.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <a href="/" className="text-background-400 hover:text-accent-400 text-sm transition-colors">Inicio</a>
            <i className="ri-arrow-right-s-line text-background-500 text-sm"></i>
            <span className="text-accent-400 text-sm font-700">Filosofía Corporativa</span>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-24 bg-background-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
            Nuestra filosofía
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-5">
            Las bases del <strong className="text-primary-500">transporte moderno</strong>
          </h2>
          <div className="w-14 h-1 bg-accent-500 rounded-full mx-auto mb-7"></div>
          <p className="text-foreground-700 text-lg leading-relaxed">
            Establecemos las bases del transporte moderno a través de un compromiso absoluto con la excelencia logística y la innovación operativa, basados en la <strong className="text-foreground-950">integridad, eficiencia, compromiso, equidad y trabajo en equipo</strong>.
          </p>
        </div>
      </section>

      {/* Pilares de servicio */}
      <section className="py-24 bg-background-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
              Pilares de servicio
            </span>
            <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-4">
              Sobre lo que <strong className="text-primary-500">construimos cada operación</strong>
            </h2>
            <div className="w-14 h-1 bg-accent-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((p) => (
              <div key={p.title} className="bg-background-50 border border-background-200 rounded-2xl p-7 hover:border-primary-300 transition-all group">
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 group-hover:bg-primary-500 rounded-xl mb-5 transition-colors">
                  <i className={`${p.icon} text-xl text-primary-600 group-hover:text-background-50 transition-colors`}></i>
                </div>
                <h3 className="font-heading font-800 text-lg text-foreground-950 mb-3">{p.title}</h3>
                <p className="text-foreground-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto operativo */}
      <section className="py-24 bg-background-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
                Nuestro impacto operativo
              </span>
              <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-4">
                Eficiencia <strong className="text-primary-500">probada y medible</strong>
              </h2>
              <div className="w-14 h-1 bg-accent-500 rounded-full mb-6"></div>
              <p className="text-foreground-700 text-sm leading-relaxed mb-4">
                En el sector logístico, la precisión no es opcional. Nuestro riguroso porcentaje de puntualidad operativa es el resultado directo de la fusión entre tecnologías avanzadas de despacho y el personal altamente capacitado en ruta.
              </p>
              <p className="text-foreground-700 text-sm leading-relaxed">
                Monitoreamos de manera proactiva cada variable meteorológica y de tráfico terrestre para anticiparnos a posibles retrasos, asegurando la continuidad de sus operaciones comerciales.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'ri-time-line', value: '24/7', label: 'Monitoreo operativo' },
                { icon: 'ri-roadster-line', value: 'En ruta', label: 'Personal capacitado' },
                { icon: 'ri-radar-line', value: 'Proactivo', label: 'Control de variables' },
                { icon: 'ri-checkbox-circle-line', value: 'Continuidad', label: 'Operaciones aseguradas' },
              ].map((m) => (
                <div key={m.label} className="bg-background-100 border border-background-200 rounded-xl p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 mb-3">
                    <i className={`${m.icon} text-lg text-primary-600`}></i>
                  </div>
                  <p className="font-heading font-900 text-xl text-primary-600">{m.value}</p>
                  <p className="font-label font-700 text-xs text-foreground-950 mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-950"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-900 text-3xl md:text-4xl text-background-50 leading-tight mb-4">
            Más que transporte, <span className="text-accent-400">logística sin límites</span>
          </h2>
          <p className="text-background-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Conoce cómo nuestra filosofía corporativa se traduce en resultados reales para tu cadena de suministro.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-primary-950 font-label font-700 px-8 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap cursor-pointer"
          >
            Contáctanos
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
