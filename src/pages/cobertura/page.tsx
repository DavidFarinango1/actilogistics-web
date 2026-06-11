import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const provincias = [
  'Esmeraldas', 'Santo Domingo', 'Pichincha', 'Manabí', 'Cotopaxi',
  'Tungurahua', 'Los Ríos', 'Bolívar', 'Chimborazo', 'Guayas',
  'Santa Elena', 'Cañar', 'Azuay', 'El Oro', 'Loja',
];

const paises = [
  { name: 'Colombia', flag: '🇨🇴' },
  { name: 'Ecuador', flag: '🇪🇨' },
  { name: 'Perú', flag: '🇵🇪' },
];

export default function CoberturaPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20busy%20freight%20distribution%20hub%20in%20Ecuador%20with%20trucks%20and%20containers%20at%20loading%20docks%2C%20organized%20logistics%20center%2C%20birds%20eye%20view%2C%20warm%20afternoon%20light%2C%20photorealistic%20industrial%20scale%20operations&width=1600&height=500&seq=acti-stats-bg"
            alt="Cobertura nacional Activlogistics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/55 to-primary-950/20"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="inline-block bg-accent-500 text-primary-950 text-xs font-label font-700 tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Presencia nacional e internacional
          </div>
          <h1 className="font-heading font-900 text-5xl md:text-7xl text-background-50 leading-tight mb-4 uppercase tracking-wide">
            Cobertura
          </h1>
          <p className="text-background-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Somos especialistas en el transporte masivo en Ecuador con puntos de operación en las principales ciudades del país.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <a href="/" className="text-background-400 hover:text-accent-400 text-sm transition-colors">Inicio</a>
            <i className="ri-arrow-right-s-line text-background-500 text-sm"></i>
            <span className="text-accent-400 text-sm font-700">Cobertura</span>
          </div>
        </div>
      </section>

      {/* Cobertura nacional */}
      <section className="py-24 bg-background-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
                Cobertura nacional
              </span>
              <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-4">
                Presentes en todo <strong className="text-primary-500">el Ecuador</strong>
              </h2>
              <div className="w-14 h-1 bg-accent-500 rounded-full mb-6"></div>
              <p className="text-foreground-700 text-base leading-relaxed mb-6">
                Somos especialistas en el transporte masivo en Ecuador con puntos de operación en las principales ciudades del país, infraestructura encaminada al aseguramiento total de la calidad en nuestro servicio.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {provincias.map((p) => (
                  <span
                    key={p}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-label font-600 bg-background-100 border border-background-200 text-foreground-700"
                  >
                    <i className="ri-map-pin-fill text-accent-500 text-xs"></i>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: 'ri-map-2-line', value: '15+', label: 'Provincias con operación' },
                { icon: 'ri-building-2-line', value: '100%', label: 'Calidad asegurada' },
                { icon: 'ri-truck-line', value: 'Masivo', label: 'Transporte especializado' },
              ].map((m) => (
                <div key={m.label} className="bg-primary-50 border border-primary-200 rounded-xl p-5 text-center">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-primary-500 mb-3 mx-auto">
                    <i className={`${m.icon} text-lg text-background-50`}></i>
                  </div>
                  <p className="font-heading font-900 text-xl text-primary-600">{m.value}</p>
                  <p className="font-label font-700 text-xs text-foreground-950 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura internacional */}
      <section className="py-24 bg-background-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
              Transporte terrestre internacional
            </span>
            <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-4">
              Expertos en <strong className="text-primary-500">transporte terrestre internacional</strong>
            </h2>
            <div className="w-14 h-1 bg-accent-500 rounded-full mx-auto mb-4"></div>
            <p className="text-foreground-600 max-w-xl mx-auto text-sm leading-relaxed">
              Conectamos la región con operaciones de importación y exportación bajo el marco de los Incoterms 2020.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {paises.map((p) => (
              <div key={p.name} className="bg-background-50 border border-background-200 rounded-2xl p-8 text-center hover:border-primary-300 transition-all">
                <div className="text-5xl mb-4">{p.flag}</div>
                <h3 className="font-heading font-800 text-xl text-foreground-950">{p.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['Importación', 'Exportación', 'Incoterms 2020', 'Transporte terrestre'].map((tag) => (
              <span key={tag} className="flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 text-xs font-label font-700">
                <i className="ri-global-line"></i>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-950"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-900 text-3xl md:text-4xl text-background-50 leading-tight mb-4">
            Cobertura nacional e <span className="text-accent-400">internacional</span>
          </h2>
          <p className="text-background-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Llevamos tu carga a donde tu negocio lo necesite, con la seguridad y calidad que nos caracteriza.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-primary-950 font-label font-700 px-8 py-3.5 rounded-full transition-colors text-sm whitespace-nowrap cursor-pointer"
          >
            Solicitar cobertura
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
