import { PortfolioItem } from "./PortfolioItem"
/*import { ProjectEntry } from "./ProjectEntry"*/

export function ProjectsSection() {
  /*function showPopup(id) {
    const popup = document.getElementById(id);
    popup.style.display = "block";
  }
  */
  return (
    <>
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
      {/*
      <ProjectEntry id="maroon-engine-popup" title="Maroon Engine" imageSrc="/images/maroon-engine-example.gif"
          imageAlt="Maroon Engine Image" text="A 2D side-scrolling game engine developed
          as a results-focused project for the Aggie Coding Club. I joined a team of 13
          students, and we each contributed to this project in our free time over the course
          of three months. I assisted with the implementation of player collision
          and enemy tracking behavior." techs="C, C++, OpenGL"
          github="https://github.com/aggie-coding-club/maroon-engine" />
      */}
    </>
  );
}
