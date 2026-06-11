const pilares = [
  {
    icon: 'ri-user-star-line',
    title: 'SERVICIO PERSONALIZADO',
    desc: 'Diseñamos soluciones a la medida de cada cliente, adaptando rutas, vehículos y procesos para satisfacer sus necesidades específicas.',
  },
  {
    icon: 'ri-expand-left-right-line',
    title: 'FLEXIBILIDAD',
    desc: 'Tenemos la capacidad de adaptarnos ágilmente a los requerimientos operativos y logísticos de cada operación.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'SEGURIDAD',
    desc: 'Te asesoramos y acompañamos constantemente durante toda la cadena de procesos con monitoreo 24/7 en tiempo real.',
  },
  {
    icon: 'ri-lightbulb-flash-line',
    title: 'CREATIVIDAD',
    desc: 'Buscamos ser los mejores, encontrando soluciones innovadoras que brinden el mayor valor posible a nuestros clientes.',
  },
];

export default function ValoresPilares() {
  return (
    <section className="py-16 md:py-20 bg-background-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-accent-600 font-label text-xs font-700 tracking-widest uppercase mb-3">
            Por qué elegirnos
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 mb-4">
            Experiencia y profesionalidad
            <br />
            <span className="text-primary-600">para tu Servicio de Transporte y Logística</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pilares.map((p) => (
            <div
              key={p.title}
              className="bg-primary-950 rounded-xl p-7 flex flex-col items-center text-center group hover:bg-primary-900 transition-colors"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-accent-500/20 rounded-full mb-5 group-hover:bg-accent-500/30 transition-colors">
                <i className={`${p.icon} text-2xl text-accent-400`}></i>
              </div>
              <h3 className="font-heading font-700 text-sm text-background-50 tracking-wide mb-3">
                {p.title}
              </h3>
              <p className="text-background-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}