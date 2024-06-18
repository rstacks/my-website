import { Header } from "./Header"
import { WriteupsSection } from "./WriteupsSection"
import { PortfolioItem } from "./PortfolioItem"

export function PortfolioComponent() {
  return (
    <>
      <Header text="PORTFOLIO" />
      <article>
        <WriteupsSection />
      </article>
    </>
  );
}
