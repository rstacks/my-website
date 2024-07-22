import { Header } from "./Header"
import { PortfolioItem } from "./PortfolioItem"

export function MoreComponent() {
  return (
    <>
      <Header text="MORE" header_id="more-header" h1_id="more-h1" />
      <article className="portfolio-section-header">
        <h2>Badges</h2>
        <p>
          These are badges that were awarded to me for participating in
          cybersecurity events, completing cybersecurity coursework,
          and earning certifications. Click <a href="https://api.badgr.io/public/collections/646aa633f7df4cf48457d3e4fa660704" target="_blank" className="paragraph-link">here</a> to
          see my full badge collection, or click on a tile below to
          learn more about a specific badge.
        </p>
        <div className="tile-list">
          <button id="badges-left-button" className="scroll-button">⬅</button>
          <ul id="badge-list-scroller">
            <li>
              <PortfolioItem imageSrc="/images/uscg-badge.png"
                imageAlt="USCG Beginner's Game Room 2024 Badge" />
            </li>
            <li>
              <PortfolioItem imageSrc="/images/gfact-badge.png"
                imageAlt="GFACT Badge" />
            </li>
            <li>
              <PortfolioItem imageSrc="/images/cyber-honors-badge.png"
                imageAlt="National Cyber Scholar with Honors Badge" />
            </li>
            <li>
              <PortfolioItem imageSrc="/images/sans-badge.svg"
                imageAlt="SANS Foundations Badge" />
            </li>
            <li>
              <PortfolioItem imageSrc="/images/cyber-semifinalist-badge.png"
                imageAlt="National Cyber Scholarship Semifinalist Badge" />
            </li>
          </ul>
          <button id="badges-right-button" className="scroll-button">➡</button>
        </div>
      </article>
    </>
  );
}
