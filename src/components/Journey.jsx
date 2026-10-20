import { journey } from '../data/profile.js';
import Station from './Station.jsx';

export default function Journey() {
  return (
    <Station id="journey" number={4} name="Journey" color="var(--line-indigo)" className="station--wide">
      <ol className="journey">
        {journey.map((item) => (
          <li key={item.title} className="journey__item">
            <p className="journey__when">{item.when}</p>
            <div>
              <h3 className="journey__title">{item.title}</h3>
              <p className="journey__where">{item.where}</p>
              {item.note && <p className="journey__note">{item.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Station>
  );
}
