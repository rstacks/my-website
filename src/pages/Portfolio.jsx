import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { PortfolioDropdown } from "../components/PortfolioDropdown"
import { ProjectEntry } from "../components/ProjectEntry"
import { Footer } from "../components/Footer"

export function Portfolio() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Portfolio | Robert Stacks</title>
        <link rel="icon" href="images/quals-icon.ico" />
      </Helmet>
      <Nav />
      <Header text="PORTFOLIO" />
      <main>
        <PortfolioDropdown text="Projects" items="project-entry" />
        <ProjectEntry title="Personal Website" imageSrc="images/new-site-image.jpg"
          imageAlt="Website Image" text="This very website was built by me from scratch!
          My experience in web development was essentially nonexistent when I began
          this project, and I'm happy with how things turned out. I recently redesigned 
          this website's appearance, which gave me some experience with React and
          responsive web design." techs="HTML, CSS, JavaScript, React"
          github="https://github.com/rstacks/my-website" />
          
        <ProjectEntry title="Maroon Engine" imageSrc="images/maroon-engine-example.gif"
          imageAlt="Maroon Engine Image" text="A 2D side-scrolling game engine developed
          as a results-focused project for the Aggie Coding Club. I joined a team of 13
          students, and we each contributed to this project in our free time over the course
          of three months. I assisted with the implementation of player collision
          and enemy tracking behavior." techs="C, C++, OpenGL"
          github="https://github.com/aggie-coding-club/maroon-engine" />

        <PortfolioDropdown text="Certifications" items="cert-entry" />
        <article className="cert-entry">
          <p>
            Be me shall purse my ought times. Joy years doors all would again rooms these. Solicitude announcing as to sufficient my. No my reached suppose proceed pressed perhaps he. Eagerness it delighted pronounce repulsive furniture no. Excuse few the remain highly feebly add people manner say. It high at my mind by roof. No wonder worthy in dinner.
          </p>
        </article>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
