import { PortfolioItem } from "./PortfolioItem"

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
        <img src="/images/left-scroll-arrow.png" alt="Left Scroll Arrow"
          id="projects-left-button" className="scroll-button" onClick={scrollLeft}/>
        <ul id="projects-list-scroller">
          <li>
            <a href="/projects#wordy">
              <PortfolioItem imageSrc="/images/wordy-tile2.png" imageAlt="Wordy Image"
                title="Wordy (Wordle Clone)" />
            </a>
          </li>
          <li>
            <a href="/projects#y86-processor">
              <PortfolioItem imageSrc="/images/processor-tile.png" imageAlt="Processor Image"
                title="Y86 Processor Design" />
            </a>
          </li>
          <li>
            <a href="/projects#website">
              <PortfolioItem imageSrc="/images/website-tile3.png" imageAlt="Website Image"
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
        <img src="/images/right-scroll-arrow.png" alt="Right Scroll Arrow"
          id="projects-right-button" className="scroll-button" onClick={scrollRight}/>
      </div>
    </section>
  );
}
