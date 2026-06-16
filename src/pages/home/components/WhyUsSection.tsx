const pillars = [
  {
    id: 'tecnologia',
    icon: 'ri-radar-line',
    title: 'Tecnología',
    desc: 'Integración de sistemas de rastreo satelital en tiempo real, optimización matemática de rutas y automatización de reportes operativos.',
  },
  {
    id: 'seguridad',
    icon: 'ri-shield-check-line',
    title: 'Seguridad',
    desc: 'Monitoreo ininterrumpido 24/7, control riguroso de cabinas y protocolos estrictos de mitigación de riesgos en tránsito.',
  },
  {
    id: 'sostenibilidad',
    icon: 'ri-leaf-line',
    title: 'Sostenibilidad',
    desc: 'Reducción proactiva de emisiones mediante algoritmos de consolidación de carga y mantenimiento de flotas verdes.',
  },
  {
    id: 'customizacion',
    icon: 'ri-settings-5-line',
    title: 'Customización',
    desc: 'Soluciones diseñadas a la medida de cada cliente, adaptando rutas, horarios y recursos según sus necesidades específicas.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Professional%20logistics%20operations%20center%20in%20Ecuador%20with%20workers%20monitoring%20screens%20and%20truck%20fleet%20in%20background%2C%20modern%20control%20room%2C%20warm%20corporate%20lighting%2C%20organized%20professional%20workspace%2C%20confident%20team%2C%20industrial%20scale%20operations&width=1600&height=700&seq=acti-pillars-bg&orientation=landscape"
          alt="Pilares de Servicio Actilogistics"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-950/88"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="font-heading font-800 text-2xl md:text-3xl text-accent-400 italic">Nuestros Pilares de Servicio</h2>
        </div>
        <div className="text-center mb-12">
          <p className="font-heading font-600 text-lg md:text-xl text-background-300">
            Las bases de nuestra <span className="text-background-50 font-800">excelencia operativa</span>
          </p>
          <div className="w-16 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.id}
              className="bg-primary-900/60 border border-primary-700/50 rounded-xl p-6 text-center hover:border-accent-500/50 hover:bg-primary-800/60 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-accent-500/20 rounded-full mx-auto mb-4 group-hover:bg-accent-500/30 transition-colors">
                <i className={`${p.icon} text-2xl text-accent-400`}></i>
              </div>
              <h3 className="font-heading font-700 text-base text-background-50 mb-3">{p.title}</h3>
              <p className="text-sm text-background-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}