import { useState, FormEvent } from 'react';

const FORM_URL = 'https://formsubmit.co/ajax/gerencia@actilogistics.com';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactFormSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new URLSearchParams();
    const fd = new FormData(form);
    fd.forEach((val, key) => {
      if (typeof val === 'string') data.append(key, val);
    });
    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setCharCount(0);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20logistics%20office%20interior%20with%20large%20windows%20overlooking%20a%20truck%20depot%2C%20professional%20workspace%2C%20warm%20ambient%20lighting%2C%20neutral%20corporate%20tones%2C%20clean%20minimalist%20design&width=1600&height=700&seq=tsp-contact-bg&orientation=landscape"
          alt="Contacto TSP"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-950/92"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-accent-500 font-label text-sm font-700 tracking-widest uppercase mb-3">¿Listo para comenzar?</span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-background-50">Impulsemos tu cadena de suministro</h2>
          <p className="text-background-300 mt-3 text-sm">Escríbenos hoy a <a href="mailto:gerencia@actilogistics.com" className="text-accent-400 hover:underline" rel="nofollow">gerencia@actilogistics.com</a> o completa el formulario.</p>
          <div className="w-16 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {status === 'success' ? (
          <div className="bg-accent-500/20 border border-accent-400 rounded-2xl p-10 text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-accent-500/30 rounded-full mx-auto mb-4">
              <i className="ri-check-line text-3xl text-accent-400"></i>
            </div>
            <h3 className="font-heading font-700 text-xl text-background-50 mb-2">¡Mensaje enviado!</h3>
            <p className="text-background-300 text-sm">Nos pondremos en contacto contigo a la brevedad posible.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 border border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-primary-950 px-6 py-2 rounded-full text-sm font-label font-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form
            data-readdy-form
            id="tsp-contact-form"
            onSubmit={handleSubmit}
            className="bg-primary-900/60 border border-primary-700/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* País */}
              <div>
                <label htmlFor="pais" className="block text-xs font-label font-700 text-background-300 uppercase tracking-wider mb-1.5">
                  País <span className="text-accent-400">*</span>
                </label>
                <select
                  id="pais"
                  name="pais"
                  required
                  className="w-full bg-primary-800 border border-primary-600 text-background-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500 transition-colors cursor-pointer"
                >
                  <option value="Colombia">Colombia</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Perú">Perú</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Chile">Chile</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Paraguay">Paraguay</option>
                </select>
              </div>

              {/* Cómo ayudar */}
              <div>
                <label htmlFor="servicio" className="block text-xs font-label font-700 text-background-300 uppercase tracking-wider mb-1.5">
                  ¿Cómo podemos ayudarte? <span className="text-accent-400">*</span>
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  className="w-full bg-primary-800 border border-primary-600 text-background-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500 transition-colors cursor-pointer"
                >
                  <option value="SOLICITAR COTIZACIÓN">SOLICITAR COTIZACIÓN</option>
                  <option value="INFORMACIÓN DE SERVICIOS">INFORMACIÓN DE SERVICIOS</option>
                  <option value="TRABAJA CON NOSOTROS">TRABAJA CON NOSOTROS</option>
                  <option value="QUIERO SER PROVEEDOR">QUIERO SER PROVEEDOR</option>
                </select>
              </div>

              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-xs font-label font-700 text-background-300 uppercase tracking-wider mb-1.5">
                  Nombre completo <span className="text-accent-400">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  className="w-full bg-primary-800 border border-primary-600 text-background-100 placeholder-primary-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500 transition-colors"
                />
              </div>

              {/* Empresa */}
              <div>
                <label htmlFor="empresa" className="block text-xs font-label font-700 text-background-300 uppercase tracking-wider mb-1.5">
                  Empresa <span className="text-accent-400">*</span>
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  required
                  placeholder="Nombre de tu empresa"
                  className="w-full bg-primary-800 border border-primary-600 text-background-100 placeholder-primary-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-label font-700 text-background-300 uppercase tracking-wider mb-1.5">
                  Correo electrónico <span className="text-accent-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="correo@empresa.com"
                  className="w-full bg-primary-800 border border-primary-600 text-background-100 placeholder-primary-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500 transition-colors"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-xs font-label font-700 text-background-300 uppercase tracking-wider mb-1.5">
                  Teléfono <span className="text-accent-400">*</span>
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  placeholder="+57 300 000 0000"
                  className="w-full bg-primary-800 border border-primary-600 text-background-100 placeholder-primary-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500 transition-colors"
                />
              </div>
            </div>

            {/* Comentarios */}
            <div>
              <label htmlFor="comentarios" className="block text-xs font-label font-700 text-background-300 uppercase tracking-wider mb-1.5">
                Comentarios
              </label>
              <textarea
                id="comentarios"
                name="comentarios"
                rows={4}
                maxLength={500}
                placeholder="Cuéntanos sobre tu necesidad de transporte..."
                className="w-full bg-primary-800 border border-primary-600 text-background-100 placeholder-primary-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent-500 transition-colors resize-none"
                onChange={(e) => setCharCount(e.target.value.length)}
              />
              <div className="text-xs text-primary-400 text-right mt-1">{charCount} / 500 caracteres</div>
            </div>

            {status === 'error' && (
              <div className="bg-red-900/40 border border-red-600/50 rounded-lg px-4 py-3 text-sm text-red-300">
                Ocurrió un error al enviar el formulario. Por favor intenta nuevamente.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-60 text-primary-950 font-label font-700 py-3.5 rounded-full transition-colors text-sm tracking-wider whitespace-nowrap cursor-pointer"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}