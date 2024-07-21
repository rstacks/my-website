import { PortfolioItem } from "./PortfolioItem"
/*import { ProjectEntry } from "./ProjectEntry"*/

export function ProjectsSection() {
  // Amount to scroll by when a button is pressed
  const scrollDist = 200;

  function scrollLeft() {
    const unorderedList = document.getElementById("projects-list-scroller");
    unorderedList.scrollBy({
      left: -scrollDist,
      behavior: "smooth"
    });
  }

  function scrollRight() {
    const unorderedList = document.getElementById("projects-list-scroller");
    unorderedList.scrollBy({
      left: scrollDist,
      behavior: "smooth"
    });
  }

  return (
    <section className="portfolio-section-header">
      <h2>Projects</h2>
      <p>
        My computer science projects, including personal projects I worked on in
        my spare time and school projects. Click on a tile below to learn more about
        a specific project! You can also click <a href="/projects" className="paragraph-link">here</a> to
        see all of my projects on one page.
      </p>
      <div className="tile-list">
        <button id="projects-left-button" className="scroll-button" onClick={scrollLeft}>⬅</button>
        <ul id="projects-list-scroller">
          <li>
            <a href="/projects#website">
              <PortfolioItem imageSrc="/images/new-site-image.jpg" imageAlt="Website Image"
                title="Personal Website" />
            </a>
          </li>
          <li>
            <a href="/projects#maroon-engine">
              <PortfolioItem imageSrc="/images/maroon-engine-example-cropped.gif" imageAlt="Maroon Engine Image"
                title="Maroon Engine" />            
            </a>
          </li>
        </ul>
        <button id="projects-right-button" className="scroll-button" onClick={scrollRight}>➡</button>
      </div>
    </section>
  );
}
