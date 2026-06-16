export default function BannerSection() {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Aerial%20panoramic%20view%20of%20Ecuador%20Andes%20mountains%20at%20sunset%20with%20trucks%20on%20highway%20below%2C%20dramatic%20orange%20golden%20sky%2C%20vast%20South%20American%20landscape%20expanding%20to%20the%20horizon%2C%20majestic%20scale%2C%20cinematic%20tones%2C%20wide%20angle%20photography&width=1600&height=500&seq=acti-banner-horizons&orientation=landscape"
        alt="Actilogistics - Más que Transporte, Logística sin Límites"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/75 via-primary-950/45 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
        <p className="font-heading font-400 text-xl md:text-2xl text-background-200 italic mb-1">Más que Transporte</p>
        <h2 className="font-heading font-900 text-4xl md:text-5xl text-background-50 leading-none">Logística sin Límites</h2>
        <div className="w-20 h-1 bg-accent-500 mt-4 rounded-full"></div>
        <a
          href="#contacto"
          className="mt-6 inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-primary-950 font-label font-700 px-6 py-2.5 rounded-full transition-colors text-sm w-fit whitespace-nowrap cursor-pointer"
        >
          Impulsa tu cadena de suministro
          <i className="ri-arrow-right-line"></i>
        </a>
      </div>
    </section>
  );
}