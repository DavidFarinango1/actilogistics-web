const services = [
  {
    id: 'ecuador',
    title: 'Transporte Masivo en Ecuador',
    image: 'https://readdy.ai/api/search-image?query=Heavy%20cargo%20truck%20fleet%20on%20modern%20Ecuador%20highway%20through%20Andean%20valleys%2C%20Quito%20Guayaquil%20route%2C%20golden%20hour%20light%2C%20professional%20freight%20logistics%20photography%2C%20green%20mountains%2C%20industrial%20transport%20operations%2C%20wide%20angle%20dramatic&width=800&height=520&seq=acti-service-ecuador&orientation=landscape',
    description: 'Especialistas en el transporte masivo en Ecuador con puntos de operación en las principales ciudades del país. Infraestructura encaminada al aseguramiento total de la calidad en el servicio.',
    extras: ['Quito · Guayaquil · Cuenca', 'Crossdocking', 'Rastreo en tiempo real'],
  },
  {
    id: 'internacional',
    title: 'Transporte Internacional',
    image: 'https://readdy.ai/api/search-image?query=International%20freight%20trucks%20at%20South%20America%20border%20crossing%20between%20Ecuador%20Colombia%20Peru%2C%20customs%20terminal%2C%20professional%20cargo%20convoy%2C%20dramatic%20Andean%20mountain%20landscape%2C%20cinematic%20wide%20shot%2C%20logistics%20operations&width=800&height=520&seq=acti-service-internacional&orientation=landscape',
    description: 'Expertos en transporte terrestre internacional. Conectamos Ecuador, Colombia y Perú con soluciones integrales, gestión aduanera y trazabilidad completa del embarque las 24 horas.',
    extras: ['Ecuador · Colombia · Perú', 'Agenciamiento de Aduanas', 'Trazabilidad 24h'],
  },
  {
    id: 'tecnologia',
    title: 'Logística Tecnológica',
    image: 'https://readdy.ai/api/search-image?query=Modern%20logistics%20control%20room%20with%20satellite%20tracking%20screens%20monitoring%20trucks%20on%20Ecuador%20road%20network%2C%20professional%20operations%20center%2C%20dark%20ambient%20lighting%2C%20tech%20displays%20showing%20GPS%20routes%2C%20organized%20workspace%2C%20cutting%20edge%20technology&width=800&height=520&seq=acti-service-tech&orientation=landscape',
    description: 'Plataforma tecnológica de integración con sistemas de rastreo satelital en tiempo real, optimización matemática de rutas y automatización de reportes para asegurar la continuidad de sus operaciones.',
    extras: ['GPS Satelital', 'Optimización de rutas', 'Reportes automáticos'],
  },
  {
    id: 'carga-especial',
    title: 'Carga Especial y Proyectos',
    image: 'https://readdy.ai/api/search-image?query=Oversized%20cargo%20truck%20transporting%20large%20industrial%20machinery%20and%20infrastructure%20equipment%20on%20Ecuador%20highway%2C%20heavy%20haul%20transport%2C%20oversize%20load%20sign%2C%20dramatic%20Andean%20scenic%20background%2C%20professional%20logistics%20photography%2C%20warm%20light&width=800&height=520&seq=acti-service-special&orientation=landscape',
    description: 'Soluciones especializadas para el transporte de maquinaria, equipos industriales y proyectos de infraestructura. Garantizamos la llegada eficiente y segura de componentes críticos a su destino.',
    extras: ['Maquinaria pesada', 'Proyectos de infraestructura', 'Custodias especiales'],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-background-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">Lo que hacemos</span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950">Nuestras Soluciones</h2>
          <p className="text-foreground-600 text-sm mt-3 max-w-xl mx-auto">
            Expertos en transporte terrestre internacional con presencia en Ecuador, Colombia y Perú.
          </p>
          <div className="w-16 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="group rounded-xl overflow-hidden bg-background-100 border border-background-200 hover:border-accent-300 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent"></div>
                <h3 className="absolute bottom-4 left-5 right-5 font-heading font-700 text-lg text-background-50 leading-tight">{s.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-foreground-700 leading-relaxed mb-4">{s.description}</p>
                {s.extras.length > 0 && (
                  <div>
                    <p className="text-xs font-label font-700 text-foreground-950 uppercase tracking-wider mb-2">Incluye:</p>
                    <ul className="space-y-1">
                      {s.extras.map((e) => (
                        <li key={e} className="flex items-center gap-2 text-sm text-foreground-700">
                          <i className="ri-checkbox-circle-fill text-accent-500 text-base"></i>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}