import { profile } from '../data/profile.js';
import Station from './Station.jsx';
import Footer from './Footer.jsx';
import { DocIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx';

export default function Contact() {
  const { github, linkedin, email, resume } = profile.links;
  const handle = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

  return (
    <Station id="contact" number={5} name="Terminus" color="var(--line-red)" className="terminus">
      <p className="terminus__big">
        End of the line.
        <br />
        <span>Let's build the next one.</span>
      </p>
      <p className="section-lede">
        Whether it's a role, a collaboration, or a question about something here — my inbox is open.
      </p>
      <ul className="connections">
        {github && (
          <li>
            <a href={github} target="_blank" rel="noreferrer" className="connection">
              <GitHubIcon />
              <span className="connection__name">GitHub</span>
              <span className="connection__handle">{handle(github)}</span>
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin} target="_blank" rel="noreferrer" className="connection">
              <LinkedInIcon />
              <span className="connection__name">LinkedIn</span>
              <span className="connection__handle">{handle(linkedin)}</span>
            </a>
          </li>
        )}
        {email && (
          <li>
            <a href={`mailto:${email}`} className="connection">
              <MailIcon />
              <span className="connection__name">Email</span>
              <span className="connection__handle">{email}</span>
            </a>
          </li>
        )}
        {resume && (
          <li>
            <a href={resume} target="_blank" rel="noreferrer" className="connection">
              <DocIcon />
              <span className="connection__name">Résumé</span>
              <span className="connection__handle">PDF</span>
            </a>
          </li>
        )}
      </ul>
      <Footer />
    </Station>
  );
}
