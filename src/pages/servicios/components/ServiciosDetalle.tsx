const servicios = [
  {
    id: 'nacional',
    title: 'Transporte Nacional',
    image: 'https://readdy.ai/api/search-image?query=Heavy%20cargo%20trucks%20driving%20on%20a%20wide%20highway%20through%20green%20Ecuadorian%20highlands%2C%20convoy%20of%20white%20and%20orange%20semi-trucks%2C%20clear%20blue%20sky%2C%20professional%20logistics%20transport%20photography%2C%20warm%20golden%20tones%2C%20sharp%20detail%2C%20rugged%20mountain%20landscape%20in%20background&width=800&height=540&seq=activlog-servicio-nacional-2026&orientation=landscape',
    desc: 'Entregas a distintos canales de distribución con transporte primario y secundario. Abastecimiento desde puertos marítimos y aéreos con gestión, recepción y confirmación de la entrega en cada punto.',
    complementarios: [
      'Crossdocking',
      'Esquemas de Seguridad y Custodias',
      'Cargue y Descargue',
      'Monitoreo GPS en tiempo real',
    ],
  },
  {
    id: 'internacional',
    title: 'Transporte Internacional',
    image: 'https://readdy.ai/api/search-image?query=Cargo%20trucks%20crossing%20an%20international%20border%20between%20Ecuador%20Colombia%20and%20Peru%2C%20container%20freight%20on%20highway%20at%20sunset%2C%20professional%20logistics%20photography%2C%20warm%20amber%20and%20teal%20tones%2C%20dramatic%20wide-angle%20view%20with%20mountains%20in%20distance%2C%20high%20detail%20sharp%20focus&width=800&height=540&seq=activlog-servicio-internacional-2026&orientation=landscape',
    desc: 'Transporte de origen a destino entre Ecuador, Colombia y Perú. Asignación de unidades según el tipo de mercancía con trazabilidad del embarque 24 horas y gestión integral de la entrega.',
    complementarios: [
      'Agenciamiento de Aduanas',
      'Almacenamiento Temporal',
      'Esquemas de Seguridad y Custodias',
      'Cargue y Descargue',
    ],
  },
  {
    id: 'infraestructura',
    title: 'Transporte de Proyectos de Infraestructura',
    image: 'https://readdy.ai/api/search-image?query=Heavy%20duty%20flatbed%20trucks%20transporting%20large%20industrial%20pipes%20and%20machinery%20through%20a%20construction%20site%20in%20South%20America%2C%20dramatic%20industrial%20scene%20with%20cranes%20and%20infrastructure%2C%20professional%20freight%20logistics%20photography%2C%20warm%20golden%20light%2C%20deep%20shadows%2C%20high%20detail&width=800&height=540&seq=activlog-servicio-infra-2026&orientation=landscape',
    desc: 'Transportamos tubería, maquinaria y estructuras esenciales para la construcción de proyectos de gran escala. Garantizamos una llegada eficiente de los componentes al sitio, facilitando el manejo y montaje para asegurar el éxito del proyecto.',
    complementarios: [
      'Transporte de carga sobredimensionada',
      'Escolta y convoy especializado',
      'Planificación de rutas técnicas',
      'Coordinación de permisos especiales',
    ],
  },
];

export default function ServiciosDetalle() {
  return (
    <section className="py-16 md:py-20 bg-background-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-accent-600 font-label text-xs font-700 tracking-widest uppercase mb-3">
            Nuestras soluciones
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950">
            Transportamos soluciones más allá de las fronteras
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.id}
              className="bg-background-50 rounded-2xl overflow-hidden group border border-background-200"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-heading font-800 text-xl text-foreground-950 mb-3">{s.title}</h3>
                <p className="text-foreground-600 text-sm leading-relaxed mb-5">{s.desc}</p>

                <div>
                  <p className="text-xs font-label font-700 text-primary-600 uppercase tracking-widest mb-3">
                    Servicios complementarios:
                  </p>
                  <ul className="space-y-2">
                    {s.complementarios.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-foreground-600">
                        <div className="w-5 h-5 flex items-center justify-center bg-accent-500 rounded-full shrink-0">
                          <i className="ri-check-line text-xs text-primary-950"></i>
                        </div>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contacto-servicios"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-label font-700 text-primary-600 hover:text-accent-600 transition-colors cursor-pointer"
                >
                  Solicitar cotización
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}