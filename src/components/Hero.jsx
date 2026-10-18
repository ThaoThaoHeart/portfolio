import { profile } from '../data/profile.js';
import SplitFlap from './SplitFlap.jsx';
import Station from './Station.jsx';
import { ArrowIcon, GitHubIcon, LinkedInIcon } from './Icons.jsx';

export default function Hero() {
  return (
    <Station id="origin" number={0} name="Origin" color="var(--line-red)" className="hero">
      <div className="board">
        <div className="board__row board__row--head">
          <span>Now departing</span>
          <span className="board__platform">Plat. 1</span>
        </div>
        <SplitFlap words={profile.roles} />
        <div className="board__row board__row--foot">
          <span>
            <span className="pulse" aria-hidden="true" />
            {profile.availability}
          </span>
          <span>{profile.location}</span>
        </div>
      </div>

      <h1 className="hero__name">
        {profile.name.split(' ').map((part, i) => (
          <span key={i} className="hero__name-part">
            {part}
          </span>
        ))}
      </h1>
      <p className="hero__tagline">{profile.tagline}</p>

      <div className="hero__actions">
        <a href="#projects" className="btn btn--solid">
          See the projects <ArrowIcon />
        </a>
        {profile.links.github && (
          <a href={profile.links.github} className="btn" target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
        )}
        {profile.links.linkedin && (
          <a href={profile.links.linkedin} className="btn" target="_blank" rel="noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
        )}
      </div>
    </Station>
  );
}
