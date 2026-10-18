import { useId } from 'react';

const COLORS = ['var(--line-red)', 'var(--line-teal)', 'var(--line-amber)', 'var(--line-indigo)'];

function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export default function RouteArt({ seed }) {
  const gridId = useId();
  const rand = seeded(seed);
  const lines = Array.from({ length: 3 }, (_, n) => {
    const points = [];
    let y = 20 + Math.round(rand() * 6) * 15;
    for (let x = -10; x <= 330; x += 60 + Math.round(rand() * 2) * 20) {
      points.push([x, y]);
      const step = (Math.round(rand() * 2) - 1) * 30;
      const ny = Math.min(140, Math.max(20, y + step));
      if (ny !== y) points.push([x + Math.abs(ny - y), ny]);
      y = ny;
    }
    return { color: COLORS[(n + Math.floor(rand() * 4)) % 4], points };
  });
  const stations = lines.flatMap((l) => l.points.filter((_, i) => i % 2 === 1 && rand() > 0.35));

  return (
    <svg className="route-art" viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id={gridId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="var(--grid)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="320" height="160" fill={`url(#${gridId})`} />
      {lines.map((l, i) => (
        <polyline
          key={i}
          points={l.points.map((p) => p.join(',')).join(' ')}
          fill="none"
          stroke={l.color}
          strokeWidth="7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ))}
      {stations.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" />
      ))}
    </svg>
  );
}
