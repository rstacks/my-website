import { PortfolioItem } from "./PortfolioItem"

export function PortfolioSection(props) {
  return (
    <section className="portfolio-section-header">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <ul>
        <li>
          <PortfolioItem imageSrc="/images/l3ak-ctf-logo.png" />
        </li>
      </ul>
    </section>
  );
}