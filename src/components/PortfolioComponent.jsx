import { Header } from "./Header"
import { PortfolioSection } from "./PortfolioSection"
import { PortfolioItem } from "./PortfolioItem"

export function PortfolioComponent() {
  return (
    <>
      <Header text="PORTFOLIO" />
      <article>
        <section>
          <PortfolioSection title="Writeups" text="My writeups for cybersecurity
            competitions that I've participated in. Click on a tile below to see how I solved
            challenges in OSINT, reverse engineering, web exploitation, cryptography, digital
            forensics, and more!" />
          <ul>
            <li>
              <PortfolioItem imageSrc="/images/logosecurityplus.png" imageAlt="temp" />
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
