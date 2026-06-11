const odsNumbers = [
  { num: '03', label: 'Salud' },
  { num: '04', label: 'Educación' },
  { num: '08', label: 'Trabajo' },
  { num: '11', label: 'Ciudades' },
  { num: '13', label: 'Clima' },
  { num: '15', label: 'Ecosistemas' },
  { num: '16', label: 'Paz' },
  { num: '17', label: 'Alianzas' },
  { num: '09', label: 'Industria' },
  { num: '12', label: 'Consumo' },
];

export default function SostenibilidadBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20sustainability%20concept%20aerial%20view%20of%20green%20forest%20canopy%20Ecuador%20Amazon%20jungle%20from%20above%20lush%20dense%20green%20trees%20canopy%20texture%20top%20view%20natural%20pattern%20organic%20shapes%20environment%20conservation%20deep%20rich%20green%20tones%20minimal%20clean%20background&width=1800&height=500&seq=sosteni-banner-ods-acti&orientation=landscape"
          alt="Activlogistics compromiso ODS"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-950/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-4">
          Agenda 2030 · ONU
        </span>
        <h2 className="font-heading font-900 text-3xl md:text-5xl text-background-50 leading-tight mb-4">
          Alineados con <span className="text-accent-400">10 Objetivos</span><br />
          de Desarrollo Sostenible
        </h2>
        <p className="text-background-300 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
          Integramos los ODS de la ONU en nuestra estrategia operativa y de negocio, demostrando que el transporte puede ser motor de desarrollo sostenible.
        </p>

        {/* ODS chips */}
        <div className="flex flex-wrap justify-center gap-3">
          {odsNumbers.map((ods) => (
            <div
              key={ods.num}
              className="flex items-center gap-2 bg-background-50/10 backdrop-blur-sm border border-background-50/20 text-background-50 rounded-full px-4 py-2 text-sm font-label font-600"
            >
              <span className="font-heading font-900 text-accent-400">{ods.num}</span>
              <span>{ods.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}