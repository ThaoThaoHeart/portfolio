import { profile } from '../data/profile.js';
import Station from './Station.jsx';

export default function About() {
  return (
    <Station id="about" number={1} name="About" color="var(--line-indigo)">
      <div className="about">
        <div className="about__text">
          {profile.about.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <dl className="facts">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Station>
  );
}
