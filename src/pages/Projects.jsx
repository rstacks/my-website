import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { PortfolioDropdown } from "../components/PortfolioDropdown"
import { ProjectEntry } from "../components/ProjectEntry"
import { CertEntry } from "../components/CertEntry"
import { Footer } from "../components/Footer"
import faviconUrl from "../favicons/quals-icon.ico"

export function Projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Projects | Robert Stacks</title>
        <link rel="icon" href={faviconUrl} />
      </Helmet>
      <nav id="back-home-nav">
        <ul className="nav-list" id="back-home-nav-list">
          <li className="main-nav-link">
            <a href="https://www.youtube.com" className="main-nav-anchor" id="back-home-anchor">&lt;&lt; Back to Home</a>
          </li>
        </ul>
      </nav>
      <Header text="PROJECTS" />
      <main>
        <PortfolioDropdown text="Projects" items="project-entry" />
        <ProjectEntry title="Personal Website" imageSrc="/images/new-site-image.jpg"
          imageAlt="Website Image" text="This very website was built by me from scratch!
          My experience in web development was essentially nonexistent when I began
          this project, and I'm happy with how things turned out. I recently redesigned 
          this website's appearance, which gave me some experience with React and
          responsive web design." techs="HTML, CSS, JavaScript, React"
          github="https://github.com/rstacks/my-website" />

        <ProjectEntry title="Maroon Engine" imageSrc="/images/maroon-engine-example.gif"
          imageAlt="Maroon Engine Image" text="A 2D side-scrolling game engine developed
          as a results-focused project for the Aggie Coding Club. I joined a team of 13
          students, and we each contributed to this project in our free time over the course
          of three months. I assisted with the implementation of player collision
          and enemy tracking behavior." techs="C, C++, OpenGL"
          github="https://github.com/aggie-coding-club/maroon-engine" />

        <PortfolioDropdown text="Certifications" items="cert-entry" />
        <CertEntry title="GIAC Foundational Cybersecurity Technologies (GFACT)"
          imageSrc="/images/GFACT.png" imageAlt="GFACT Image"
          text="The GIAC Foundational Cybersecurity Technologies (GFACT)
          certification validates a practitioner's knowledge of essential
          foundational cybersecurity concepts. GFACT-certified professionals
          are familiar with practical skills in computers, technology,
          and security fundamentals that are needed to kickstart a career
          in cybersecurity."
          link="https://www.giac.org/certifications/foundational-cybersecurity-technologies-gfact/" 
          issuingOrg="GIAC" />

        <CertEntry title="CompTIA Security+" 
          imageSrc="/images/logosecurityplus-adjusted.png"
          imageAlt="Security Plus Image" text="CompTIA Security+ is a global
          certification that validates the baseline skills necessary to
          perform core security functions and pursue an IT security career."
          link="https://www.comptia.org/certifications/security"
          issuingOrg="CompTIA" inProgress="true" />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
