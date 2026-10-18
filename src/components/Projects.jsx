import { projects, reservedPlatforms } from '../data/profile.js';
import Station from './Station.jsx';
import RouteArt from './RouteArt.jsx';
import { ArrowIcon, GitHubIcon } from './Icons.jsx';

const STATUS = {
  shipped: { label: 'Arrived', className: 'status--shipped' },
  building: { label: 'Boarding', className: 'status--building' },
  planned: { label: 'Scheduled', className: 'status--planned' },
};

const platform = (n) => String(n).padStart(2, '0');

function Ticket({ project, number }) {
  const status = STATUS[project.status] ?? STATUS.planned;
  return (
    <article className="ticket">
      <div className="ticket__stub">
        <span className="ticket__plat-label">Platform</span>
        <span className="ticket__plat">{platform(number)}</span>
        <span className={`status ${status.className}`}>{status.label}</span>
      </div>
      <div className="ticket__main">
        <div className="ticket__media">
          {project.image ? (
            <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
          ) : (
            <RouteArt seed={project.title} />
          )}
        </div>
        <h3 className="ticket__title">{project.title}</h3>
        <p className="ticket__summary">{project.summary}</p>
        <ul className="ticket__tech" aria-label="Built with">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {(project.liveUrl || project.repoUrl) && (
          <div className="ticket__links">
            {project.liveUrl && (
              <a href={project.liveUrl} className="btn btn--solid btn--small" target="_blank" rel="noreferrer">
                Visit <ArrowIcon />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} className="btn btn--small" target="_blank" rel="noreferrer">
                <GitHubIcon /> Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function ReservedTicket({ number }) {
  return (
    <article className="ticket ticket--reserved" aria-label={`Platform ${platform(number)}, reserved`}>
      <div className="ticket__stub">
        <span className="ticket__plat-label">Platform</span>
        <span className="ticket__plat">{platform(number)}</span>
        <span className="status status--planned">Reserved</span>
      </div>
      <div className="ticket__main ticket__main--reserved">
        <p className="reserved__title">Next service under construction</p>
        <p className="reserved__note">Something new is being built for this platform. Check back soon.</p>
      </div>
    </article>
  );
}

export default function Projects() {
  const reserved = Array.from({ length: reservedPlatforms }, (_, i) => projects.length + i + 1);

  return (
    <Station id="projects" number={2} name="Projects" color="var(--line-teal)" className="station--wide">
      <p className="section-lede">
        Departures board — things I've shipped, things that are boarding, and what's next on the schedule.
      </p>
      <div className="tickets">
        {projects.map((p, i) => (
          <Ticket key={p.title} project={p} number={i + 1} />
        ))}
        {reserved.map((n) => (
          <ReservedTicket key={n} number={n} />
        ))}
      </div>
    </Station>
  );
}
