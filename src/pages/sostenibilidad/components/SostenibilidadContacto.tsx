import { useState, FormEvent } from 'react';

export default function SostenibilidadContacto() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, value.toString()));

    setStatus('sending');
    try {
      const res = await fetch('https://readdy.ai/api/form/d8lcstbakrl89656ll70', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto-sos" className="py-24 bg-background-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left info */}
          <div>
            <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">
              ¿Trabajemos juntos?
            </span>
            <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 leading-tight mb-4">
              Únete a nuestro<br />
              <strong className="text-primary-500">compromiso sostenible</strong>
            </h2>
            <div className="w-14 h-1 bg-accent-500 rounded-full mb-6"></div>
            <p className="text-foreground-700 text-sm leading-relaxed mb-8">
              Si tu empresa comparte nuestra visión de logística responsable o quieres conocer cómo podemos reducir juntos la huella ambiental de tu cadena de suministro, contáctanos.
            </p>

            <div className="space-y-4">
              {[
                { icon: 'ri-mail-line', label: 'Correo electrónico', value: 'gerencia@actilogistics.com' },
                { icon: 'ri-map-pin-line', label: 'Sede principal', value: 'Quito, Ecuador' },
                { icon: 'ri-earth-line', label: 'Cobertura', value: 'Ecuador · Colombia · Perú' },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 bg-background-100 border border-background-200 rounded-xl">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-full shrink-0">
                    <i className={`${c.icon} text-primary-600`}></i>
                  </div>
                  <div>
                    <p className="text-xs text-foreground-500 font-label font-600">{c.label}</p>
                    <p className="text-sm font-label font-700 text-foreground-950">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Green badge */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full shrink-0">
                <i className="ri-leaf-line text-green-600 text-lg"></i>
              </div>
              <div>
                <p className="font-heading font-700 text-sm text-green-800">Empresa comprometida con los ODS</p>
                <p className="text-xs text-green-700">Activlogistics · Agenda 2030</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background-100 border border-background-200 rounded-2xl p-8">
            <h3 className="font-heading font-800 text-xl text-foreground-950 mb-6">
              Contáctanos sobre sostenibilidad
            </h3>

            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className="ri-checkbox-circle-line text-3xl text-green-600"></i>
                </div>
                <p className="font-heading font-700 text-lg text-foreground-950 mb-2">¡Mensaje enviado!</p>
                <p className="text-sm text-foreground-600">Nos pondremos en contacto contigo muy pronto.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2.5 bg-primary-500 text-background-50 rounded-full text-sm font-label font-700 hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label font-700 text-foreground-700 mb-1.5">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-2.5 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 focus:outline-none focus:border-primary-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-label font-700 text-foreground-700 mb-1.5">Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-2.5 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 focus:outline-none focus:border-primary-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-label font-700 text-foreground-700 mb-1.5">Correo electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@empresa.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 focus:outline-none focus:border-primary-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label font-700 text-foreground-700 mb-1.5">Tema de interés</label>
                  <select
                    name="tema"
                    className="w-full px-4 py-2.5 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 focus:outline-none focus:border-primary-400 cursor-pointer"
                  >
                    <option value="">Selecciona un tema</option>
                    <option>Reforestación y medio ambiente</option>
                    <option>Responsabilidad social</option>
                    <option>Salud y bienestar laboral</option>
                    <option>Programas de educación</option>
                    <option>Alianzas sostenibles</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-label font-700 text-foreground-700 mb-1.5">
                    Mensaje
                    <span className="text-foreground-400 font-400 ml-1">({charCount}/500)</span>
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    maxLength={500}
                    placeholder="Cuéntanos sobre tu interés en sostenibilidad..."
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="w-full px-4 py-2.5 rounded-lg border border-background-300 bg-background-50 text-sm text-foreground-950 focus:outline-none focus:border-primary-400 resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    Error al enviar. Por favor intenta de nuevo.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-background-50 font-label font-700 rounded-xl transition-colors text-sm disabled:opacity-60 cursor-pointer whitespace-nowrap"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}