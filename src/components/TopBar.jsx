import { useEffect, useState } from 'react';
import { profile } from '../data/profile.js';
import useTheme from '../hooks/useTheme.js';

function StationClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(id);
  }, []);
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  return (
    <time className="clock" dateTime={now.toISOString()} aria-label={`Local time ${hh}:${mm}`}>
      {hh}
      <span className="clock__colon">:</span>
      {mm}
    </time>
  );
}

export default function TopBar({ stops, active }) {
  const [theme, toggleTheme] = useTheme();
  const activeIndex = stops.findIndex((s) => s.id === active);

  return (
    <header className="topbar">
      <a href="#origin" className="roundel" aria-label={`${profile.name} — back to top`}>
        <span className="roundel__ring" aria-hidden="true" />
        <span className="roundel__bar">{profile.initials}</span>
      </a>

      <nav className="routemap" aria-label="Sections">
        <ol style={{ '--progress': activeIndex / (stops.length - 1) }}>
          {stops.map((stop, i) => (
            <li
              key={stop.id}
              className={`routemap__stop ${i <= activeIndex ? 'is-passed' : ''} ${
                stop.id === active ? 'is-active' : ''
              }`}
            >
              <a href={`#${stop.id}`} aria-current={stop.id === active ? 'location' : undefined}>
                <span className="routemap__dot" aria-hidden="true" />
                <span className="routemap__label">{stop.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="topbar__right">
        <StationClock />
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'day' : 'night'} service`}
          title={theme === 'dark' ? 'Day service' : 'Night service'}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
