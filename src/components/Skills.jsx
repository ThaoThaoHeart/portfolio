import { skillLines } from '../data/profile.js';
import Station from './Station.jsx';

export default function Skills() {
  return (
    <Station id="skills" number={3} name="Skills" color="var(--line-amber)">
      <p className="section-lede">
        Interchange map. Solid stops are skills I use; dashed stops are lines still under construction.
      </p>
      <div className="lines">
        {skillLines.map((line) => (
          <div key={line.name} className="line" style={{ '--line-color': line.color }}>
            <div className="line__badge">
              <span className="line__code" aria-hidden="true">
                {line.code}
              </span>
              <span className="line__name">{line.name}</span>
            </div>
            <ol className="line__stops">
              {line.stops.map((stop) => (
                <li key={stop.name} className={`line__stop ${stop.learning ? 'is-learning' : ''}`}>
                  <span className="line__dot" aria-hidden="true" />
                  <span className="line__label">
                    {stop.name}
                    {stop.learning && <span className="visually-hidden"> (currently learning)</span>}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Station>
  );
}
