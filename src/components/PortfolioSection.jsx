import { PortfolioItem } from "./PortfolioItem"

export function PortfolioSection(props) {
  return (
    <section className="portfolio-section-header">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <ul>
        <li>
          <PortfolioItem imageSrc="/images/uscg-2024-logo.png" imageAlt="USCG 2024 Logo"
            title="Season IV, US Cyber Open: Beginner's Game Room" />
        </li>
        <li>
          <PortfolioItem imageSrc="/images/l3ak-ctf-logo.png" imageAlt="L3akCTF 2024 Logo"
            title="L3akCTF 2024" />
        </li>
      </ul>
    </section>
  );
}