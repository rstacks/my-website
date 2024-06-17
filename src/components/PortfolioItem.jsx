export function PortfolioItem(props) {
  return (
    <section className="portfolio-item">
      <img src={props.imageSrc} alt={props.imageAlt} />
      <h3>{props.title}</h3>
    </section>
  );
}
