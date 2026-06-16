import { useState } from 'react';

const cards = [
  {
    id: 'mision',
    label: 'Nuestra Misión',
    icon: 'ri-focus-3-line',
    accent: 'primary',
    title: 'Valor que conecta negocios',
    text: 'Diseñar y ejecutar soluciones integrales de transporte y logística que generen valor para nuestros clientes, conectando sus negocios con oportunidades de crecimiento a través de un servicio cercano, eficiente y confiable.',
    keywords: ['Eficiencia', 'Confianza', 'Valor'],
  },
  {
    id: 'vision',
    label: 'Nuestra Visión',
    icon: 'ri-eye-line',
    accent: 'accent',
    title: 'Top 50 Ecuador al 2031',
    text: 'Para el año 2031, formar parte de las 50 primeras empresas del sector transporte y logística del Ecuador, reconocida por su excelencia en el servicio, innovación tecnológica, cobertura regional y capacidad de convertirse en un aliado estratégico para el desarrollo de nuestros clientes.',
    keywords: ['Innovación', 'Excelencia', 'Aliado'],
  },
  {
    id: 'filosofia',
    label: 'Filosofía Corporativa',
    icon: 'ri-heart-3-line',
    accent: 'secondary',
    title: 'Transporte moderno con propósito',
    text: 'Establecemos las bases del transporte moderno a través de un compromiso absoluto con la excelencia logística y la innovación operativa, basados en la integridad, eficiencia, compromiso, equidad y trabajo en equipo.',
    keywords: ['Integridad', 'Equipo', 'Compromiso'],
  },
];

type CardId = 'mision' | 'vision' | 'filosofia';

export default function AboutSection() {
  const [active, setActive] = useState<CardId>('mision');
  const activeCard = cards.find((c) => c.id === active)!;

  return (
    <section id="about" className="py-24 bg-background-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
            Filosofía Corporativa
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-3">
            Las bases de nuestro<br />
            <strong className="text-primary-500">compromiso con Ecuador</strong>
          </h2>
          <div className="w-14 h-1 bg-accent-500 rounded-full mx-auto mb-4"></div>
          <p className="text-foreground-600 max-w-xl mx-auto text-sm leading-relaxed">
            Más que transporte — construimos relaciones de largo plazo sustentadas en valores sólidos, innovación y logística sin límites.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: Selector tabs vertical */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => setActive(card.id as CardId)}
                className={`group w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  active === card.id
                    ? card.accent === 'primary'
                      ? 'bg-primary-500 border-primary-500 text-background-50'
                      : card.accent === 'accent'
                      ? 'bg-accent-500 border-accent-500 text-primary-950'
                      : 'bg-secondary-500 border-secondary-500 text-background-50'
                    : 'bg-background-50 border-background-200 hover:border-background-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 flex items-center justify-center rounded-full ${
                    active === card.id
                      ? 'bg-white/20'
                      : card.accent === 'primary'
                      ? 'bg-primary-100'
                      : card.accent === 'accent'
                      ? 'bg-accent-100'
                      : 'bg-secondary-100'
                  }`}>
                    <i className={`${card.icon} text-base ${
                      active === card.id
                        ? 'text-white'
                        : card.accent === 'primary'
                        ? 'text-primary-500'
                        : card.accent === 'accent'
                        ? 'text-accent-600'
                        : 'text-secondary-500'
                    }`}></i>
                  </div>
                  <span className={`font-label font-700 text-sm ${
                    active === card.id ? 'text-inherit' : 'text-foreground-950'
                  }`}>
                    {card.label}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed line-clamp-2 ${
                  active === card.id ? 'text-white/80' : 'text-foreground-600'
                }`}>
                  {card.title}
                </p>
              </button>
            ))}

            {/* Coverage pills */}
            <div id="cobertura" className="mt-2 bg-background-100 rounded-2xl p-5 border border-background-200">
              <p className="text-xs font-label font-700 text-foreground-950 uppercase tracking-wider mb-3">
                Cobertura regional
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { country: 'Ecuador', primary: true },
                  { country: 'Colombia', primary: false },
                  { country: 'Perú', primary: false },
                ].map((c) => (
                  <div
                    key={c.country}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-label font-600 ${
                      c.primary
                        ? 'bg-accent-500 text-primary-950'
                        : 'bg-background-200 text-foreground-700'
                    }`}
                  >
                    <i className="ri-map-pin-fill text-xs"></i>
                    {c.country}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Detail card */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Big detail card */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20logistics%20company%20office%20interior%20in%20Ecuador%20modern%20clean%20workspace%20with%20dark%20navy%20walls%20large%20windows%20overlooking%20city%20panoramic%20view%20cargo%20trucks%20visible%20in%20background%20warm%20lighting%20corporate%20atmosphere%20elegant%20minimalist%20design&width=900&height=500&seq=acti-about-mission&orientation=landscape"
                alt="Actilogistics - Misión y Visión corporativa"
                className="w-full h-52 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/30 to-transparent"></div>
              <div className="absolute bottom-4 left-5">
                <span className="text-accent-400 font-label text-xs font-700 uppercase tracking-widest">
                  Actilogistics · Quito, Ecuador
                </span>
              </div>
            </div>

            {/* Active content */}
            <div className={`rounded-2xl p-7 border transition-all duration-500 ${
              activeCard.accent === 'primary'
                ? 'bg-primary-50 border-primary-200'
                : activeCard.accent === 'accent'
                ? 'bg-accent-50 border-accent-200'
                : 'bg-secondary-50 border-secondary-200'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 flex items-center justify-center rounded-full ${
                  activeCard.accent === 'primary'
                    ? 'bg-primary-500'
                    : activeCard.accent === 'accent'
                    ? 'bg-accent-500'
                    : 'bg-secondary-500'
                }`}>
                  <i className={`${activeCard.icon} text-lg text-white`}></i>
                </div>
                <div>
                  <p className="font-heading font-800 text-foreground-950 text-lg">{activeCard.label}</p>
                  <p className={`text-xs font-label font-600 ${
                    activeCard.accent === 'primary' ? 'text-primary-600'
                    : activeCard.accent === 'accent' ? 'text-accent-700'
                    : 'text-secondary-600'
                  }`}>{activeCard.title}</p>
                </div>
              </div>

              <p className="text-foreground-700 leading-relaxed text-sm mb-5">
                {activeCard.text}
              </p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2">
                {activeCard.keywords.map((kw) => (
                  <span
                    key={kw}
                    className={`text-xs font-label font-700 px-3 py-1 rounded-full ${
                      activeCard.accent === 'primary'
                        ? 'bg-primary-100 text-primary-700'
                        : activeCard.accent === 'accent'
                        ? 'bg-accent-100 text-accent-700'
                        : 'bg-secondary-100 text-secondary-700'
                    }`}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 font-label font-700 px-7 py-3 rounded-full transition-colors text-sm w-fit whitespace-nowrap cursor-pointer"
            >
              Solicitar información
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}