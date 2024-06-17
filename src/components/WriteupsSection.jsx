import { PortfolioItem } from "./PortfolioItem"

export function WriteupsSection() {
  return (
    <section className="portfolio-section-header">
      <h2>Writeups</h2>
      <p>
        My writeups for cybersecurity competitions that I've participated in.
        Click on a tile below to see how I solved challenges in OSINT, reverse
        engineering, web exploitation, cryptography, digital forensics, and more!
      </p>
      <ul>
        <li>
          <PortfolioItem imageSrc="/images/uscg-2024-logo.png" imageAlt="USCG 2024 Logo"
            title="USCG Season IV: Beginner's Game Room" />
        </li>
        <li>
          <PortfolioItem imageSrc="/images/l3ak-ctf-logo.png" imageAlt="L3akCTF 2024 Logo"
            title="L3akCTF 2024" />
        </li>
      </ul>
    </section>
  );
}