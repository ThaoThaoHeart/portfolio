export default function Station({ id, number, name, color, children, className = '' }) {
  return (
    <section id={id} className={`station ${className}`} style={{ '--station-color': color }}>
      <header className="station__head">
        <span className="station__marker" aria-hidden="true" />
        <p className="station__code">STATION {String(number).padStart(2, '0')}</p>
        <h2 className="station__name">{name}</h2>
      </header>
      <div className="station__body">{children}</div>
    </section>
  );
}
