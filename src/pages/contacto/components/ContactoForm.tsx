import { useState, FormEvent } from 'react';

const FORM_URL = 'https://readdy.ai/api/form/d8ld1o5k31rj0i4c6pt0';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactoForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new URLSearchParams();
    const fields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input[name], select[name], textarea[name]');
    fields.forEach((field) => {
      data.append(field.name, field.value);
    });
    setStatus('sending');
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
    <section className="py-16 bg-background-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-label font-700 tracking-widest uppercase text-primary-700 bg-primary-100 px-4 py-1.5 rounded-full mb-4">
            Formulario de Contacto
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 mb-3">
            Introduce tus datos
          </h2>
          <p className="text-foreground-600 text-sm max-w-lg mx-auto font-body">
            Nos pondremos en contacto contigo lo más pronto posible. ¡Gracias por tu paciencia!
          </p>
        </div>

        <div className="bg-background-50 rounded-2xl p-8 md:p-10 border border-background-200">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-14 gap-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent-100">
                <i className="ri-checkbox-circle-line text-4xl text-accent-600"></i>
              </div>
              <h3 className="font-heading font-700 text-xl text-foreground-950">¡Mensaje enviado!</h3>
              <p className="text-foreground-600 text-sm text-center max-w-sm">
                Hemos recibido tu mensaje. Un miembro de nuestro equipo se pondrá en contacto contigo a la brevedad.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 px-6 py-2.5 bg-primary-950 text-background-50 rounded-lg text-sm font-label font-600 hover:bg-primary-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              data-readdy-form
              id="contacto-activlogistics"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* País */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pais" className="text-xs font-label font-700 uppercase tracking-wider text-foreground-700">
                    País <span className="text-accent-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="pais"
                      name="pais"
                      required
                      className="w-full appearance-none border border-background-300 rounded-lg px-4 py-3 text-sm font-body text-foreground-900 bg-background-50 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 cursor-pointer"
                    >
                      <option value="Ecuador">Ecuador</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Perú">Perú</option>
                      <option value="Otro">Otro</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-foreground-500 pointer-events-none"></i>
                  </div>
                </div>

                {/* Cómo podemos ayudarte */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="motivo" className="text-xs font-label font-700 uppercase tracking-wider text-foreground-700">
                    ¿Cómo podemos ayudarte? <span className="text-accent-600">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="motivo"
                      name="motivo"
                      required
                      className="w-full appearance-none border border-background-300 rounded-lg px-4 py-3 text-sm font-body text-foreground-900 bg-background-50 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 cursor-pointer"
                    >
                      <option value="SOLICITAR SERVICIO">SOLICITAR SERVICIO</option>
                      <option value="QUIERO SER PROVEEDOR">QUIERO SER PROVEEDOR</option>
                      <option value="TRABAJA CON NOSOTROS">TRABAJA CON NOSOTROS</option>
                      <option value="OTRA CONSULTA">OTRA CONSULTA</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-foreground-500 pointer-events-none"></i>
                  </div>
                </div>
              </div>

              {/* Nombre completo */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="text-xs font-label font-700 uppercase tracking-wider text-foreground-700">
                  Nombre completo <span className="text-accent-600">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Ej. Juan Carlos Rodríguez"
                  className="border border-background-300 rounded-lg px-4 py-3 text-sm font-body text-foreground-900 bg-background-50 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 placeholder-foreground-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Empresa */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="empresa" className="text-xs font-label font-700 uppercase tracking-wider text-foreground-700">
                    Empresa <span className="text-accent-600">*</span>
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    placeholder="Nombre de tu empresa"
                    className="border border-background-300 rounded-lg px-4 py-3 text-sm font-body text-foreground-900 bg-background-50 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 placeholder-foreground-400"
                  />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefono" className="text-xs font-label font-700 uppercase tracking-wider text-foreground-700">
                    Teléfono <span className="text-accent-600">*</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    placeholder="+593 98 765 4321"
                    className="border border-background-300 rounded-lg px-4 py-3 text-sm font-body text-foreground-900 bg-background-50 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 placeholder-foreground-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-label font-700 uppercase tracking-wider text-foreground-700">
                  Correo electrónico <span className="text-accent-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tucorreo@empresa.com"
                  className="border border-background-300 rounded-lg px-4 py-3 text-sm font-body text-foreground-900 bg-background-50 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 placeholder-foreground-400"
                />
              </div>

              {/* Comentarios */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="comentarios" className="text-xs font-label font-700 uppercase tracking-wider text-foreground-700">
                  Comentarios
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={5}
                  maxLength={500}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="border border-background-300 rounded-lg px-4 py-3 text-sm font-body text-foreground-900 bg-background-50 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-200 placeholder-foreground-400 resize-none"
                />
                <p className="text-xs text-foreground-500 text-right font-body">{charCount} / 500 caracteres</p>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                  <i className="ri-error-warning-line text-base"></i>
                  Hubo un error al enviar. Por favor intenta nuevamente.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 bg-primary-950 text-background-50 rounded-lg font-label font-700 text-sm tracking-widest uppercase hover:bg-primary-800 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <i className="ri-loader-4-line animate-spin"></i> Enviando...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-2-line"></i> Enviar
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}