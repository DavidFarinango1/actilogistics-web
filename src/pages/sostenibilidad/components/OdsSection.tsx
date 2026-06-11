import { useState } from 'react';

const odsItems = [
  {
    id: 'reforestacion',
    number: '01',
    icon: 'ri-plant-line',
    title: 'Reforestación',
    subtitle: 'ODS 15 — Vida de ecosistemas terrestres',
    desc: 'Sembramos árboles para restaurar la biodiversidad en las regiones donde operamos. Cada ruta completada contribuye a nuestro plan de reforestación activa en Ecuador, compensando las emisiones generadas durante el transporte.',
    impact: '+2,400 árboles sembrados',
    image: 'https://readdy.ai/api/search-image?query=Aerial%20view%20of%20reforestation%20project%20in%20Ecuador%20Andes%20mountains%20volunteers%20planting%20young%20trees%20in%20cleared%20land%20green%20native%20forest%20regeneration%20environmental%20sustainability%20program%20warm%20golden%20afternoon%20light%20lush%20tropical%20vegetation&width=700&height=480&seq=ods-reforest-acti&orientation=landscape',
    accentClass: 'bg-green-500',
    lightClass: 'bg-green-50 border-green-200',
    textClass: 'text-green-700',
    badgeClass: 'bg-green-100 text-green-800',
  },
  {
    id: 'social',
    number: '02',
    icon: 'ri-team-line',
    title: 'Sentido Social',
    subtitle: 'ODS 11 — Ciudades y comunidades sostenibles',
    desc: 'Proyectos que transforman nuestras comunidades y generan impacto positivo en el entorno. Apoyamos iniciativas locales en las ciudades donde operamos, creando oportunidades de empleo y fortaleciendo el tejido social.',
    impact: '+350 familias beneficiadas',
    image: 'https://readdy.ai/api/search-image?query=Community%20development%20project%20in%20Ecuador%20local%20neighborhood%20people%20working%20together%20building%20infrastructure%20smiling%20families%20diverse%20group%20of%20volunteers%20professional%20social%20responsibility%20program%20warm%20cheerful%20atmosphere%20natural%20sunlight&width=700&height=480&seq=ods-social-acti&orientation=landscape',
    accentClass: 'bg-accent-500',
    lightClass: 'bg-accent-50 border-accent-200',
    textClass: 'text-accent-700',
    badgeClass: 'bg-accent-100 text-accent-800',
  },
  {
    id: 'salud',
    number: '03',
    icon: 'ri-heart-pulse-line',
    title: 'Salud y Bienestar',
    subtitle: 'ODS 3 — Salud y bienestar para todos',
    desc: 'Programas de bienestar integral para todos los asociados y sus familias. Garantizamos entornos de trabajo seguros, cobertura médica preventiva y programas de salud mental que reconocen a nuestra gente como el activo más valioso.',
    impact: '100% colaboradores cubiertos',
    image: 'https://readdy.ai/api/search-image?query=Corporate%20health%20wellness%20program%20Ecuador%20logistics%20company%20employees%20doing%20physical%20activity%20group%20exercise%20professional%20environment%20bright%20modern%20office%20with%20natural%20light%20happy%20smiling%20workers%20health%20checkup%20event%20warm%20clean%20atmosphere&width=700&height=480&seq=ods-salud-acti&orientation=landscape',
    accentClass: 'bg-secondary-500',
    lightClass: 'bg-secondary-50 border-secondary-200',
    textClass: 'text-secondary-700',
    badgeClass: 'bg-secondary-100 text-secondary-800',
  },
  {
    id: 'educacion',
    number: '04',
    icon: 'ri-graduation-cap-line',
    title: 'Educación',
    subtitle: 'ODS 4 — Educación de calidad',
    desc: 'Impulsamos la calidad educativa para el desarrollo de las comunidades que servimos. Becamos jóvenes talentos, financiamos capacitaciones técnicas en logística y colaboramos con universidades ecuatorianas para construir el sector del futuro.',
    impact: '+80 becas otorgadas',
    image: 'https://readdy.ai/api/search-image?query=Education%20scholarship%20program%20Ecuador%20young%20students%20in%20modern%20classroom%20logistics%20training%20professional%20development%20university%20collaboration%20bright%20learning%20environment%20diverse%20group%20of%20young%20adults%20studying%20technology%20tablets%20notebooks%20natural%20light&width=700&height=480&seq=ods-educacion-acti&orientation=landscape',
    accentClass: 'bg-primary-500',
    lightClass: 'bg-primary-50 border-primary-200',
    textClass: 'text-primary-700',
    badgeClass: 'bg-primary-100 text-primary-800',
  },
];

export default function OdsSection() {
  const [active, setActive] = useState(0);
  const item = odsItems[active];

  return (
    <section id="ods" className="py-24 bg-background-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
            Impacto Social y Ambiental
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-3">
            Nos alineamos con los<br />
            <strong className="text-primary-500">Objetivos de Desarrollo Sostenible</strong>
          </h2>
          <div className="w-14 h-1 bg-accent-500 rounded-full mx-auto mb-4"></div>
          <p className="text-foreground-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Activlogistics integra los principios de la Agenda 2030 de la ONU en su modelo de negocio. Cada decisión operativa considera su impacto en las personas, las comunidades y el planeta.
          </p>
        </div>

        {/* Tabs selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {odsItems.map((ods, idx) => (
            <button
              key={ods.id}
              onClick={() => setActive(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-label font-700 transition-all cursor-pointer whitespace-nowrap border ${
                active === idx
                  ? `${ods.accentClass} text-background-50 border-transparent`
                  : 'bg-background-50 border-background-200 text-foreground-600 hover:border-background-300'
              }`}
            >
              <i className={`${ods.icon} text-sm`}></i>
              {ods.title}
            </button>
          ))}
        </div>

        {/* Active card - full panel */}
        <div className={`rounded-2xl border overflow-hidden ${item.lightClass}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto min-h-[300px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className={`text-5xl font-heading font-900 text-white/30`}>{item.number}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className={`inline-flex items-center gap-2 text-xs font-label font-700 uppercase tracking-wider px-3 py-1.5 rounded-full w-fit mb-4 ${item.badgeClass}`}>
                <i className={`${item.icon} text-sm`}></i>
                {item.subtitle}
              </span>
              <h3 className="font-heading font-900 text-2xl md:text-3xl text-foreground-950 mb-4">
                {item.title}
              </h3>
              <p className="text-foreground-700 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl border ${item.lightClass} w-fit`}>
                <i className={`ri-bar-chart-grouped-line text-xl ${item.textClass}`}></i>
                <div>
                  <p className={`font-heading font-800 text-base ${item.textClass}`}>{item.impact}</p>
                  <p className="text-xs text-foreground-600">Impacto acumulado 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {odsItems.map((ods, idx) => (
            <button
              key={ods.id}
              onClick={() => setActive(idx)}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                active === idx
                  ? ods.lightClass
                  : 'bg-background-100 border-background-200 hover:border-background-300'
              }`}
            >
              <div className={`w-9 h-9 flex items-center justify-center rounded-full mb-2 ${
                active === idx ? ods.badgeClass : 'bg-background-200'
              }`}>
                <i className={`${ods.icon} text-sm ${active === idx ? ods.textClass : 'text-foreground-500'}`}></i>
              </div>
              <p className="font-label font-700 text-xs text-foreground-950">{ods.title}</p>
              <p className="text-xs text-foreground-500 mt-0.5">{ods.impact}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}