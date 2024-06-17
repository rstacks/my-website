import { Header } from "./Header"
import { WriteupsSection } from "./WriteupsSection"
import { PortfolioItem } from "./PortfolioItem"

export function PortfolioComponent() {
  return (
    <>
      <Header text="PORTFOLIO" />
      <article>
        <section>
          <WriteupsSection />
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
