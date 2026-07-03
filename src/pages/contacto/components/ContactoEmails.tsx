interface CountryContact {
  country: string;
  flag: string;
  email: string;
  phone: string;
  addresses: { city: string; detail: string }[];
  icon: string;
}

const contacts: CountryContact[] = [
  {
    country: 'Ecuador',
    flag: '🇪🇨',
    email: 'gerencia@actilogistics.com',
    phone: '0985094403',
    addresses: [
      { city: 'Quito', detail: 'Av. Galo Plaza Lasso 69 y Avellaneda, conjunto de bodegas Parkenor' },
      { city: 'Tulcán', detail: 'Av. Argentina y Calderón 7049' },
    ],
    icon: 'ri-map-pin-2-line',
  },
  {
    country: 'Colombia',
    flag: '🇨🇴',
    email: 'colombia@actilogistics.com',
    phone: '+57 310 987 6543',
    addresses: [{ city: 'Bogotá', detail: 'Cra. 7 #71-21, Bogotá, Colombia' }],
    icon: 'ri-map-pin-2-line',
  },
  {
    country: 'Perú',
    flag: '🇵🇪',
    email: 'peru@actilogistics.com',
    phone: '+51 987 654 321',
    addresses: [{ city: 'Lima', detail: 'Av. Javier Prado Este 4600, Lima, Perú' }],
    icon: 'ri-map-pin-2-line',
  },
];

export default function ContactoEmails() {
  return (
    <section className="py-16 bg-background-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-label font-700 tracking-widest uppercase text-accent-600 bg-accent-100 px-4 py-1.5 rounded-full mb-4">
            Nuestras Oficinas
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 mb-3">
            Líneas de Atención por País
          </h2>
          <p className="text-foreground-600 text-sm max-w-lg mx-auto font-body leading-relaxed">
            Contamos con presencia en tres países. Escríbenos al correo de tu región y te responderemos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c, idx) => (
            <div
              key={c.country}
              className={`relative rounded-xl p-7 flex flex-col gap-4 border transition-all hover:-translate-y-1 duration-200 ${
                idx === 0
                  ? 'bg-primary-950 border-primary-800 text-background-50'
                  : 'bg-background-50 border-background-200 text-foreground-900'
              }`}
            >
              {idx === 0 && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-label font-700 uppercase tracking-widest bg-accent-500 text-primary-950 px-3 py-1 rounded-full">
                    Sede Principal
                  </span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{c.flag}</span>
                <h3 className={`font-heading font-800 text-xl ${idx === 0 ? 'text-accent-400' : 'text-foreground-950'}`}>
                  {c.country}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${c.email}`}
                  className={`flex items-center gap-2 text-sm font-body transition-colors ${
                    idx === 0 ? 'text-background-200 hover:text-accent-400' : 'text-foreground-700 hover:text-accent-600'
                  }`}
                  rel="nofollow"
                >
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 ${idx === 0 ? 'bg-accent-500/20' : 'bg-accent-100'}`}>
                    <i className={`ri-mail-line text-xs ${idx === 0 ? 'text-accent-400' : 'text-accent-600'}`}></i>
                  </div>
                  <span className="font-600 underline underline-offset-2">{c.email}</span>
                </a>

                <a
                  href={`tel:${c.phone.replace(/\s/g, '')}`}
                  className={`flex items-center gap-2 text-sm font-body transition-colors ${
                    idx === 0 ? 'text-background-200 hover:text-accent-400' : 'text-foreground-700 hover:text-accent-600'
                  }`}
                  rel="nofollow"
                >
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 ${idx === 0 ? 'bg-accent-500/20' : 'bg-accent-100'}`}>
                    <i className={`ri-phone-line text-xs ${idx === 0 ? 'text-accent-400' : 'text-accent-600'}`}></i>
                  </div>
                  {c.phone}
                </a>

                {c.addresses.map((addr) => (
                  <div
                    key={addr.city}
                    className={`flex items-start gap-2 text-sm font-body ${idx === 0 ? 'text-background-300' : 'text-foreground-600'}`}
                  >
                    <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5 ${idx === 0 ? 'bg-accent-500/20' : 'bg-accent-100'}`}>
                      <i className={`ri-map-pin-line text-xs ${idx === 0 ? 'text-accent-400' : 'text-accent-600'}`}></i>
                    </div>
                    <span className="leading-snug">
                      <span className={`font-700 ${idx === 0 ? 'text-accent-400' : 'text-foreground-800'}`}>{addr.city}: </span>
                      {addr.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}