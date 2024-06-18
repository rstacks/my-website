import { Header } from "./Header"
import { WriteupsSection } from "./WriteupsSection"

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
