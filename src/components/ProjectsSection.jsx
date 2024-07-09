import { PortfolioItem } from "./PortfolioItem"
/*import { ProjectEntry } from "./ProjectEntry"*/

export function ProjectsSection() {
  return (
    <section className="portfolio-section-header">
      <h2>Projects</h2>
      <p>
        My computer science projects, including personal projects I worked on in
        my spare time and school projects. Click on a tile below to learn more about
        a specific project!
      </p>
      <div className="tile-list">
        <ul>
          <li>
            <PortfolioItem imageSrc="/images/new-site-image.jpg" imageAlt="Website Image"
              title="Personal Website" />
          </li>
          <li>
            <PortfolioItem imageSrc="/images/maroon-engine-example-cropped.gif" imageAlt="Maroon Engine Image"
              title="Maroon Engine" />
          </li>
        </ul>
      </div>
    </section>
  );
}