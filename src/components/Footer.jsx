import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="footer__tape" aria-hidden="true">
        Mind the gap
      </span>
      <a href="#origin">← Back to origin</a>
    </footer>
  );
}
