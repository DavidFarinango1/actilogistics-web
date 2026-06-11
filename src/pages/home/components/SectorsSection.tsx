const sectors = [
  {
    id: 'automotor',
    icon: 'ri-car-line',
    title: 'Automotor',
    desc: 'Servicios de transporte y logística para optimizar las cadenas de suministro de vehículos e implementos.',
  },
  {
    id: 'tecnologia',
    icon: 'ri-cpu-line',
    title: 'Tecnología',
    desc: 'Soluciones de cadena de suministro confiables para transportar materiales y artefactos electrónicos, TIC.',
  },
  {
    id: 'salud',
    icon: 'ri-heart-pulse-line',
    title: 'Salud',
    desc: 'Transporte de implementos especiales, farmacéuticos y del sector salud. Con altos estándares de calidad.',
  },
  {
    id: 'mineria',
    icon: 'ri-landscape-line',
    title: 'Minería',
    desc: 'Soluciones especializadas para el transporte seguro y eficiente de materiales pesados, equipos de minería y suministros esenciales.',
  },
  {
    id: 'industrial',
    icon: 'ri-settings-3-line',
    title: 'Industrial',
    desc: 'Soluciones a medida para gestionar demandas complejas y hacer que las cadenas de suministro sean más eficientes y ágiles.',
  },
  {
    id: 'consumidor',
    icon: 'ri-shopping-bag-line',
    title: 'Consumidor',
    desc: 'Transporte al almacén, centro de distribución para que los productos puedan llegar directamente a los minoristas o tiendas finales.',
  },
];

export default function SectorsSection() {
  return (
    <section className="py-20 bg-background-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">Sectores</span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight">
            Cualquiera que sea su industria<br />
            somos su <strong>aliado logístico estratégico</strong>
          </h2>
          <p className="text-foreground-600 text-sm mt-3 max-w-lg mx-auto">
            Soluciones de transporte adaptadas a las necesidades específicas de cada sector productivo.
          </p>
          <div className="w-16 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s, idx) => (
            <div
              key={s.id}
              className="group bg-background-50 border border-background-200 rounded-xl p-6 hover:border-primary-300 hover:bg-background-50 transition-all duration-300"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary-100 rounded-xl mb-4 group-hover:bg-primary-500 transition-colors duration-300">
                <i className={`${s.icon} text-2xl text-primary-500 group-hover:text-background-50 transition-colors duration-300`}></i>
              </div>
              <h3 className="font-heading font-700 text-base text-foreground-950 mb-2">{s.title}</h3>
              <p className="text-sm text-foreground-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}