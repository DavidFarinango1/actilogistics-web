import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const valores = [
  { icon: 'ri-shield-check-line', label: 'Integridad' },
  { icon: 'ri-speed-up-line', label: 'Eficiencia' },
  { icon: 'ri-hand-heart-line', label: 'Compromiso' },
  { icon: 'ri-scales-3-line', label: 'Equidad' },
  { icon: 'ri-team-line', label: 'Trabajo en equipo' },
];

export default function MisionVisionPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20heavy%20cargo%20trucks%20fleet%20on%20Ecuador%20highway%20through%20Andean%20mountains%2C%20dramatic%20wide%20angle%2C%20golden%20morning%20light%2C%20professional%20freight%20logistics%20photography%2C%20deep%20blue%20sky%2C%20green%20mountains%2C%20highly%20detailed%20road%20and%20lush%20vegetation%2C%20cinematic%20quality&width=1600&height=700&seq=acti-hero-1"
            alt="Misión y Visión Activlogistics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/55 to-primary-950/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="inline-block bg-accent-500 text-primary-950 text-xs font-label font-700 tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Quiénes somos
          </div>
          <h1 className="font-heading font-900 text-5xl md:text-7xl text-background-50 leading-tight mb-4 uppercase tracking-wide">
            Misión y Visión
          </h1>
          <p className="text-background-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Establecemos las bases del transporte moderno con un compromiso absoluto con la excelencia logística y la innovación operativa.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <a href="/" className="text-background-400 hover:text-accent-400 text-sm transition-colors">Inicio</a>
            <i className="ri-arrow-right-s-line text-background-500 text-sm"></i>
            <span className="text-accent-400 text-sm font-700">Misión y Visión</span>
          </div>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="py-24 bg-background-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Misión */}
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-9 flex flex-col">
              <div className="w-14 h-14 flex items-center justify-center bg-primary-500 rounded-xl mb-6">
                <i className="ri-focus-3-line text-2xl text-background-50"></i>
              </div>
              <span className="font-label font-700 text-xs text-primary-600 uppercase tracking-widest mb-2">Nuestra Misión</span>
              <h2 className="font-heading font-800 text-2xl md:text-3xl text-foreground-950 leading-tight mb-4">
                Valor que conecta negocios
              </h2>
              <p className="text-foreground-700 text-base leading-relaxed">
                Diseñar y ejecutar soluciones integrales de transporte y logística que generen valor para nuestros clientes, conectando sus negocios con oportunidades de crecimiento a través de un servicio cercano, eficiente y confiable.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-accent-50 border border-accent-200 rounded-2xl p-9 flex flex-col">
              <div className="w-14 h-14 flex items-center justify-center bg-accent-500 rounded-xl mb-6">
                <i className="ri-eye-line text-2xl text-primary-950"></i>
              </div>
              <span className="font-label font-700 text-xs text-accent-700 uppercase tracking-widest mb-2">Nuestra Visión</span>
              <h2 className="font-heading font-800 text-2xl md:text-3xl text-foreground-950 leading-tight mb-4">
                Top 50 Ecuador al 2031
              </h2>
              <p className="text-foreground-700 text-base leading-relaxed">
                Para el año 2031, formar parte de las 50 primeras empresas del sector transporte y logística del Ecuador, reconocida por su excelencia en el servicio, innovación tecnológica, cobertura regional y capacidad de convertirse en un aliado estratégico para el desarrollo de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="mt-16 text-center">
            <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
              Nuestros valores
            </span>
            <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-4">
              Los principios que nos <strong className="text-primary-500">guían</strong>
            </h2>
            <div className="w-14 h-1 bg-accent-500 rounded-full mx-auto mb-12"></div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
              {valores.map((v) => (
                <div key={v.label} className="bg-background-100 border border-background-200 rounded-2xl p-6 hover:border-primary-300 transition-all group">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-100 group-hover:bg-primary-500 rounded-xl mb-4 mx-auto transition-colors">
                    <i className={`${v.icon} text-xl text-primary-600 group-hover:text-background-50 transition-colors`}></i>
                  </div>
                  <p className="font-label font-700 text-sm text-foreground-950">{v.label}</p>
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
            Cargamos hoy el <span className="text-accent-400">futuro de mañana</span>
          </h2>
          <p className="text-background-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Impulsemos juntos el rendimiento de tu cadena de suministro con un aliado logístico cercano, eficiente y confiable.
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
