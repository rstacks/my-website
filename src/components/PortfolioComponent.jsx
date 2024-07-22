import { Header } from "./Header"
import { WriteupsSection } from "./WriteupsSection"
import { ProjectsSection } from "./ProjectsSection"

export function PortfolioComponent() {
  return (
    <>
      <Header text="PORTFOLIO" header_id="portfolio-header" h1_id="portfolio-h1" />
      <article>
        <WriteupsSection />
        <ProjectsSection />
      </article>
    </>
  );
}
