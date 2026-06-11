import { useState, useEffect } from 'react';

const slides = [
  {
    id: 'hero-slide-1',
    image: 'https://readdy.ai/api/search-image?query=Modern%20heavy%20cargo%20trucks%20fleet%20on%20Ecuador%20highway%20through%20Andean%20mountains%2C%20dramatic%20wide%20angle%2C%20golden%20morning%20light%2C%20professional%20freight%20logistics%20photography%2C%20deep%20blue%20sky%2C%20green%20mountains%2C%20highly%20detailed%20road%20and%20lush%20vegetation%2C%20cinematic%20quality&width=1600&height=700&seq=acti-hero-1&orientation=landscape',
    title: 'Más que Transporte',
    subtitle: 'Logística sin Límites',
    cta: 'Conoce nuestros servicios',
    ctaHref: '#servicios',
  },
  {
    id: 'hero-slide-2',
    image: 'https://readdy.ai/api/search-image?query=International%20cargo%20trucks%20crossing%20border%20between%20Ecuador%20Colombia%20Peru%2C%20South%20American%20transport%20route%2C%20Andean%20mountain%20pass%2C%20professional%20convoy%2C%20dramatic%20sunset%20orange%20sky%2C%20modern%20logistics%20operations%2C%20epic%20landscape%20vista%2C%20cinematic%20wide%20shot&width=1600&height=700&seq=acti-hero-2&orientation=landscape',
    title: 'Expertos en Transporte',
    subtitle: 'Ecuador · Colombia · Perú',
    cta: 'Cotizar ahora',
    ctaHref: '#contacto',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative w-full h-[580px] md:h-[700px] overflow-hidden" aria-label="Hero Activlogistics">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl w-full">
          <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/40 rounded-full px-4 py-1.5 mb-6">
            <i className="ri-global-line text-accent-400 text-sm"></i>
            <span className="text-accent-300 text-xs font-label tracking-widest uppercase">Transporte &amp; Logística Internacional</span>
          </div>
          <h1 className="font-heading font-800 text-3xl md:text-5xl lg:text-6xl text-background-50 leading-tight mb-3">
            {slides[current].title}
          </h1>
          <p className="font-heading font-600 text-xl md:text-2xl text-accent-400 mb-8">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={slides[current].ctaHref}
              className="bg-accent-500 hover:bg-accent-600 text-primary-950 font-label font-700 px-8 py-3.5 rounded-full transition-colors text-sm tracking-wider whitespace-nowrap cursor-pointer"
            >
              {slides[current].cta}
            </a>
            <a
              href="#contacto"
              className="border-2 border-background-200 text-background-50 hover:bg-background-50/10 font-label font-600 px-8 py-3.5 rounded-full transition-colors text-sm tracking-wider whitespace-nowrap cursor-pointer"
            >
              ¿Podemos ayudarte?
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-accent-500 border border-white/20 rounded-full text-white transition-colors cursor-pointer"
        aria-label="Anterior"
      >
        <i className="ri-arrow-left-s-line text-xl"></i>
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-accent-500 border border-white/20 rounded-full text-white transition-colors cursor-pointer"
        aria-label="Siguiente"
      >
        <i className="ri-arrow-right-s-line text-xl"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors cursor-pointer ${idx === current ? 'bg-accent-500' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full z-20 h-16 bg-gradient-to-t from-background-50 to-transparent"></div>
    </section>
  );
}