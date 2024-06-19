export function PortfolioItem(props) {
  return (
    <section className="portfolio-item" id={props.id}>
      <img src={props.imageSrc} alt={props.imageAlt} />
      <h3>{props.title}</h3>
    </section>
  );
}
