const procesos = [
  {
    id: 'recepcion',
    icon: 'ri-inbox-archive-line',
    title: 'Recepción de mercancía',
    image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&h=540&fit=crop&q=80',
    desc: 'Ingreso y verificación de productos recibidos, revisando cantidades, estado físico y documentación.',
    incluye: [
      'Descarga de productos',
      'Verificación de cantidades y referencias',
      'Inspección del estado de la mercancía',
      'Validación de documentos de ingreso',
      'Registro y actualización del inventario',
      'Etiquetado e identificación de productos',
    ],
  },
  {
    id: 'almacenamiento',
    icon: 'ri-stack-line',
    title: 'Almacenamiento seguro',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=540&fit=crop&q=80',
    desc: 'Ubicación organizada de los productos en áreas adecuadas para conservarlos protegidos y fáciles de localizar.',
    incluye: [
      'Clasificación y organización de mercancía',
      'Ubicación en racks, estanterías o áreas designadas',
      'Control y monitoreo de inventarios',
      'Aplicación de sistemas FIFO y FEFO',
      'Protección y conservación de los productos',
      'Gestión de espacios para optimizar la capacidad',
    ],
  },
  {
    id: 'pedidos',
    icon: 'ri-box-3-line',
    title: 'Preparación de pedidos',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=540&fit=crop&q=80',
    desc: 'Selección, revisión y empaque de los productos solicitados para garantizar entregas correctas.',
    incluye: [
      'Recepción y procesamiento de órdenes',
      'Picking (selección de productos)',
      'Verificación de cantidades y referencias',
      'Empaque y embalaje adecuado',
      'Etiquetado para despacho',
      'Control de calidad antes del envío',
    ],
  },
  {
    id: 'despacho',
    icon: 'ri-truck-line',
    title: 'Despacho al cliente',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=540&fit=crop&q=80',
    desc: 'Salida de los pedidos hacia clientes o puntos de distribución, asegurando rapidez y control en la entrega.',
    incluye: [
      'Consolidación de pedidos',
      'Carga de mercancía en vehículos',
      'Emisión de documentos de despacho',
      'Coordinación con transportistas',
      'Seguimiento de entregas',
      'Confirmación de recepción por parte del cliente',
    ],
  },
];

export default function WarehouseSection() {
  return (
    <section className="py-16 md:py-20 bg-background-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-accent-600 font-label text-xs font-700 tracking-widest uppercase mb-3">
            Almacenamiento
          </span>
          <h2 className="font-heading font-800 text-3xl md:text-4xl text-foreground-950 mb-4">
            Warehouse
          </h2>
          <div className="w-14 h-1 bg-accent-500 rounded-full mx-auto mb-5"></div>
          <p className="text-foreground-600 text-sm md:text-base max-w-2xl mx-auto font-body leading-relaxed">
            Gestionamos tu mercancía con orden, seguridad y eficiencia. Desde la recepción hasta el despacho final, optimizamos cada proceso para que tus productos lleguen a tiempo y en perfectas condiciones.
          </p>
          <p className="text-primary-600 text-xs font-label font-700 tracking-widest uppercase mt-6">
            Procesos principales
          </p>
        </div>

        {/* Process grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {procesos.map((p) => (
            <div
              key={p.id}
              className="bg-background-50 rounded-2xl overflow-hidden group border border-background-200 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-5 flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent-500 rounded-xl shrink-0">
                    <i className={`${p.icon} text-xl text-primary-950`}></i>
                  </div>
                  <h3 className="font-heading font-800 text-lg text-background-50 drop-shadow">{p.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <p className="text-foreground-600 text-sm leading-relaxed mb-5">{p.desc}</p>

                <p className="text-xs font-label font-700 text-primary-600 uppercase tracking-widest mb-3">
                  ¿Qué incluye?
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                  {p.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground-600">
                      <div className="w-5 h-5 flex items-center justify-center bg-accent-500 rounded-full shrink-0 mt-0.5">
                        <i className="ri-check-line text-xs text-primary-950"></i>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
