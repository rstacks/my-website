import React, { useEffect } from "react"
import { Link, Element, scroller } from "react-scroll"
import { useLocation } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { PortfolioDropdown } from "../components/PortfolioDropdown"
import { ProjectEntry } from "../components/ProjectEntry"
import { ProjectEntryNoGitHub } from "../components/ProjectEntryNoGitHub"
import { CertEntry } from "../components/CertEntry"
import { Footer } from "../components/Footer"
import faviconUrl from "../favicons/quals-icon.ico"

export function Projects() {
  /**
   * Handles scrolling based on URL
   */
  const pageURL = useLocation();

  // Runs on page load and whenever URL changes
  useEffect(() => {
    // Get scroll location (includes #)
    const scrollLocation = pageURL.hash;

    // Only scroll if a location was specified
    if (scrollLocation.length > 0) {
      scroller.scrollTo(scrollLocation.substring(1), {
        duration: 500,
        offset: -80,
        smooth: true
      });
    }
  }, [pageURL]);

  /**
   * Handles back to top button
   */
  // Distance from top of homepage where back to top button appears
  const distanceFromTop = 300;
  
  // Show or hide the back to top button based on page position
  function showTopButton() {
    const topButton = document.getElementById("projects-top-button");
    if (window.scrollY > distanceFromTop && window.innerWidth > 1100) {
      topButton.style.display = "inline";
    } else {
      topButton.style.display = "none";
    }
  }

  // Hides the back to top button on small screens
  function visibilityHandler(e) {
    const topButton = document.getElementById("projects-top-button");
    if (e.matches || window.scrollY <= distanceFromTop) {
      topButton.style.display = "none";
    } else {
      topButton.style.display = "inline";
    }
  }

  // Media query for hiding back to top button on small screens
  const mediaQuery = window.matchMedia("(max-width: 1100px)");

  // Event listeners for back to top button visibility
  mediaQuery.addEventListener("change", visibilityHandler);
  addEventListener("scroll", (e) => {showTopButton()})

  return (
    <HelmetProvider>
      <Helmet>
        <title>Projects | Robert Stacks</title>
        <link rel="icon" href={faviconUrl} />
      </Helmet>
      <nav id="back-home-nav">
        <ul className="nav-list" id="back-home-nav-list">
          <li className="main-nav-link">
            <a href="/home" className="main-nav-anchor" id="back-home-anchor">&lt;&lt; BACK TO HOME</a>
          </li>
        </ul>
      </nav>
      <div className="spacer" />
      <Element name="projects-top">
        <Header text="PROJECTS" />
      </Element>
      <main>
        {/*<PortfolioDropdown text="Projects" items="project-entry" />*/}
        <Element name="wordy">
          <ProjectEntry title="Wordy (Wordle Clone)" imageSrc="/images/wordy-cropped-2.png"
            imageAlt="Wordy Image" text="My final project for CSCE 314 at Texas A&M University.
            This is a recreation of the online game Wordle using JavaFX. All of Wordle's features
            are present in this project, including a post-game statistics screen. I also implemented
            a load & save feature that enables players to resume an unfinished game at any time."
            techs="Java, JavaFX, Scene Builder" github="https://github.com/rstacks/wordy" />
        </Element>

        <Element name="y86-processor">
          <ProjectEntryNoGitHub id="processor-entry" title="Y86 Multi-Cycle Processor Design"
            imageSrc="/images/processor-cropped2.png" imageAlt="Processor Project Image"
            text="My final project for CSCE 312 at Texas A&M University. My partner and I used Logisim,
            a digital logic design tool, to create a processor that can execute Y86 assembly, including
            push, pop, jump, and move instructions. Our design follows the sequence of fetch, decode,
            execute, memory, write back, and PC update as it reads Y86 programs." techs="Y86 (x86-like ISA), Logisim" />
        </Element>

        <Element name="website">
          <ProjectEntry title="Personal Website" imageSrc="/images/site-image-summer24-square.png"
            imageAlt="Website Image" text="This very website was built by me from scratch!
            My experience in web development was essentially nonexistent when I began
            this project, and I'm happy with how things turned out. I have redesigned 
            this website several times, which has given me plenty of experience with React and
            responsive web design." techs="HTML, CSS, JavaScript, React"
            github="https://github.com/rstacks/my-website" />
        </Element>

        <Element name="maroon-engine">
          <ProjectEntry title="Maroon Engine" imageSrc="/images/maroon-engine-example.gif"
            imageAlt="Maroon Engine Image" text="A 2D side-scrolling game engine developed
            as a results-focused project for the Aggie Coding Club. I joined a team of 13
            students, and we each contributed to this project in our free time over the course
            of three months. I assisted with the implementation of player collision
            and enemy tracking behavior." techs="C, C++, OpenGL"
            github="https://github.com/aggie-coding-club/maroon-engine" />
        </Element>

        {/*
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
        */}
      </main>
      <Link to="projects-top" smooth={true} duration={500}
        offset={-200} className="back-to-top-button" id="projects-top-button">
        ^
      </Link>
      <Footer />
    </HelmetProvider>
  );
}
