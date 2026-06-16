const odsItems = [
  {
    id: 'reforestacion',
    icon: 'ri-plant-line',
    title: 'Reforestación',
    desc: 'Siembra de árboles para restaurar la biodiversidad en las regiones donde operamos.',
    color: 'bg-green-100 text-green-700',
  },
  {
    id: 'social',
    icon: 'ri-team-line',
    title: 'Sentido Social',
    desc: 'Proyectos que transforman nuestras comunidades y generan impacto positivo en el entorno.',
    color: 'bg-accent-100 text-accent-700',
  },
  {
    id: 'salud',
    icon: 'ri-heart-pulse-line',
    title: 'Salud y Bienestar',
    desc: 'Programas de bienestar integral para todos los asociados y sus familias.',
    color: 'bg-secondary-100 text-secondary-700',
  },
  {
    id: 'educacion',
    icon: 'ri-graduation-cap-line',
    title: 'Educación',
    desc: 'Impulsamos la calidad educativa para el desarrollo de las comunidades que servimos.',
    color: 'bg-primary-100 text-primary-700',
  },
];

export default function CertificationsSection() {
  return (
    <section id="sostenibilidad" className="py-16 bg-background-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">Compromiso global</span>
            <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-4">
              Nos alineamos con los<br />
              <strong className="text-primary-500">Objetivos de Desarrollo</strong><br />
              Sostenible
            </h2>
            <div className="w-14 h-1 bg-accent-500 rounded-full mb-6"></div>
            <p className="text-foreground-700 text-sm leading-relaxed mb-8">
              En Actilogistics creemos que el crecimiento empresarial y la responsabilidad con el planeta no son opuestos. Reducimos emisiones mediante algoritmos de consolidación de carga y mantenemos flotas verdes comprometidas con el medio ambiente.
            </p>
            <div className="flex items-center gap-4 bg-background-100 border border-background-200 rounded-xl p-4">
              <div className="w-12 h-12 flex items-center justify-center bg-accent-100 rounded-full shrink-0">
                <i className="ri-earth-line text-2xl text-accent-600"></i>
              </div>
              <div>
                <p className="font-heading font-700 text-sm text-foreground-950">Alineados con 10 ODS de la ONU</p>
                <p className="text-xs text-foreground-600">Comprometidos con el desarrollo sostenible global</p>
              </div>
            </div>
          </div>

          {/* ODS Cards */}
          <div className="grid grid-cols-2 gap-4">
            {odsItems.map((item) => (
              <div
                key={item.id}
                className="bg-background-100 border border-background-200 rounded-xl p-5 hover:border-primary-300 transition-all duration-300"
              >
                <div className={`w-11 h-11 flex items-center justify-center rounded-full mb-3 ${item.color}`}>
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <h3 className="font-heading font-700 text-sm text-foreground-950 mb-1">{item.title}</h3>
                <p className="text-xs text-foreground-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}