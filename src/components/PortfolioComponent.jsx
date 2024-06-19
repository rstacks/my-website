import { Header } from "./Header"
import { WriteupsSection } from "./WriteupsSection"
import { ProjectsSection } from "./ProjectsSection"

export function PortfolioComponent() {
  return (
    <>
      <Header text="PORTFOLIO" />
      <article>
        <WriteupsSection />
        <ProjectsSection />
      </article>
    </>
  );
}
