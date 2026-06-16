import { useEffect, useRef, useState } from 'react';

const stats = [
  { id: 'puntualidad', value: 98, prefix: '', suffix: '%', label: 'Puntualidad operativa', icon: 'ri-time-line' },
  { id: 'paises', value: 3, prefix: '', suffix: '', label: 'Países de cobertura', icon: 'ri-map-2-line' },
  { id: 'monitoreo', value: 24, prefix: '', suffix: '/7', label: 'Monitoreo continuo', icon: 'ri-eye-line' },
  { id: 'rutas', value: 50, prefix: '+', suffix: '', label: 'Rutas optimizadas', icon: 'ri-route-line' },
];

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(stat.value, 1800, visible);

  return (
    <div ref={ref} className="text-center px-6 py-8">
      <div className="w-16 h-16 flex items-center justify-center bg-accent-500/20 rounded-full mx-auto mb-4">
        <i className={`${stat.icon} text-3xl text-accent-400`}></i>
      </div>
      <div className="font-heading font-900 text-5xl md:text-6xl text-background-50 mb-1">
        {stat.prefix}{count.toLocaleString('es')}{stat.suffix}
      </div>
      <p className="text-background-300 text-sm font-label tracking-wider">{stat.label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Aerial%20view%20of%20busy%20freight%20distribution%20hub%20in%20Ecuador%20with%20trucks%20and%20containers%20at%20loading%20docks%2C%20organized%20logistics%20center%2C%20birds%20eye%20view%2C%20warm%20afternoon%20light%2C%20photorealistic%20industrial%20scale%20operations&width=1600&height=500&seq=acti-stats-bg&orientation=landscape"
          alt="Impacto operativo Actilogistics"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-primary-950/90"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-accent-400 font-label text-sm font-700 tracking-widest uppercase block mb-2">Eficiencia probada y medible</span>
          <h2 className="font-heading font-800 text-2xl md:text-3xl text-background-50">
            Nuestro <span className="text-accent-400">impacto operativo</span>
          </h2>
          <p className="text-background-400 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            En el sector logístico, la precisión no es opcional. Monitoreamos proactivamente cada variable meteorológica y de tráfico terrestre para anticiparnos a posibles retrasos.
          </p>
          <div className="w-16 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-primary-700">
          {stats.map((s) => <StatCard key={s.id} stat={s} />)}
        </div>
      </div>
    </section>
  );
}