const metrics = [
  { icon: 'ri-leaf-line', value: '35%', label: 'Reducción de emisiones', sub: 'vs. 2021', color: 'text-green-600', bg: 'bg-green-100' },
  { icon: 'ri-route-line', value: '+50', label: 'Rutas optimizadas', sub: 'con IA logística', color: 'text-primary-600', bg: 'bg-primary-100' },
  { icon: 'ri-truck-line', value: '100%', label: 'Flota en mantenimiento', sub: 'preventivo activo', color: 'text-accent-700', bg: 'bg-accent-100' },
  { icon: 'ri-recycle-line', value: '80%', label: 'Residuos reciclados', sub: 'en operaciones', color: 'text-secondary-600', bg: 'bg-secondary-100' },
];

const pilares = [
  {
    icon: 'ri-cpu-line',
    title: 'Tecnología Verde',
    desc: 'Sistemas de rastreo satelital y optimización matemática de rutas que minimizan el consumo de combustible y reducen la huella de carbono en cada viaje.',
    items: ['Rastreo GPS en tiempo real', 'Optimización de rutas con IA', 'Reportes automáticos de emisiones'],
  },
  {
    icon: 'ri-car-line',
    title: 'Flota Responsable',
    desc: 'Mantenimiento preventivo riguroso de toda la flota para garantizar eficiencia energética máxima. Incorporamos gradualmente vehículos con menores emisiones contaminantes.',
    items: ['Mantenimiento preventivo 100%', 'Monitoreo de eficiencia por vehículo', 'Plan de renovación ecológica'],
  },
  {
    icon: 'ri-cloud-line',
    title: 'Consolidación de Carga',
    desc: 'Algoritmos avanzados de consolidación que maximizan la ocupación de cada viaje, reduciendo el número de trayectos innecesarios y optimizando el impacto ambiental por tonelada transportada.',
    items: ['Algoritmos de carga óptima', 'Reducción de viajes en vacío', 'Planificación multi-cliente'],
  },
];

export default function PilaresVerdes() {
  return (
    <section className="py-24 bg-background-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
              Operaciones Responsables
            </span>
            <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-4">
              Logística eficiente,<br />
              <strong className="text-primary-500">planeta más sano</strong>
            </h2>
            <div className="w-14 h-1 bg-accent-500 rounded-full mb-5"></div>
            <p className="text-foreground-700 text-sm leading-relaxed">
              Reducimos proactivamente las emisiones de carbono mediante algoritmos de consolidación de carga y el mantenimiento continuo de flotas verdes. Nuestra sostenibilidad no es un complemento — es parte del núcleo de nuestras operaciones.
            </p>
          </div>
          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-background-50 border border-background-200 rounded-xl p-5">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-3 ${m.bg}`}>
                  <i className={`${m.icon} text-lg ${m.color}`}></i>
                </div>
                <p className={`font-heading font-900 text-2xl ${m.color}`}>{m.value}</p>
                <p className="font-label font-700 text-xs text-foreground-950 mt-0.5">{m.label}</p>
                <p className="text-xs text-foreground-500">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map((p, idx) => (
            <div
              key={idx}
              className="bg-background-50 border border-background-200 rounded-2xl p-7 hover:border-primary-300 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-100 group-hover:bg-primary-500 rounded-xl mb-5 transition-colors">
                <i className={`${p.icon} text-xl text-primary-600 group-hover:text-background-50 transition-colors`}></i>
              </div>
              <h3 className="font-heading font-800 text-lg text-foreground-950 mb-3">{p.title}</h3>
              <p className="text-foreground-600 text-sm leading-relaxed mb-4">{p.desc}</p>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-foreground-700">
                    <i className="ri-checkbox-circle-fill text-accent-500 text-sm shrink-0"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big image strip */}
        <div className="mt-14 rounded-2xl overflow-hidden relative h-56 md:h-72">
          <img
            src="https://readdy.ai/api/search-image?query=Modern%20green%20logistics%20truck%20fleet%20driving%20on%20scenic%20mountain%20highway%20in%20Ecuador%20surrounded%20by%20lush%20Andean%20forest%20clean%20energy%20transport%20sustainable%20logistics%20operation%20aerial%20panoramic%20view%20golden%20hour%20warm%20lighting%20professional%20photography%20wide%20panorama&width=1600&height=400&seq=sosteni-fleet-acti&orientation=landscape"
            alt="Flota ecológica Actilogistics en Ecuador"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 via-primary-950/30 to-transparent flex items-center">
            <div className="px-10">
              <p className="font-heading font-900 text-2xl md:text-3xl text-background-50 leading-tight">
                Cada kilómetro recorrido,<br />
                <span className="text-accent-400">un compromiso con el futuro.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}