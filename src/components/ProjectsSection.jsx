import { PortfolioItem } from "./PortfolioItem"

export function ProjectsSection() {
  // Handler for when user hovers over website tile
  function websiteTileHover() {
    const websiteTile = document.getElementById("website-tile");
    const originalHTML = websiteTile.innerHTML;
    websiteTile.addEventListener("mouseenter", () => {
      websiteTile.innerHTML = '<p class="tile-text">I built this website from scratch! Click to learn more.</p><p class="tile-text"><span class="tech-list">Technologies used</span>: HTML, CSS, JavaScript, React</p>';
    });
    websiteTile.addEventListener("mouseleave", () => {
      websiteTile.innerHTML = originalHTML;
    });
  }

  if (document.readyState === "loading" || document.readyState === "interactive") {
    document.addEventListener("DOMContentLoaded", websiteTileHover);
  } else {
    websiteTileHover();
  }
  
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
              title="Personal Website" id="website-tile" />
          </li>
          <li>
            <PortfolioItem imageSrc="/images/maroon-engine-example.gif" imageAlt="Maroon Engine Image"
              title="Maroon Engine" />
          </li>
        </ul>
      </div>
    </section>
  );
}
