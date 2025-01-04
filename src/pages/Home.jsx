import { Helmet, HelmetProvider } from "react-helmet-async"
import { Link, Element } from "react-scroll"
import { Nav } from "../components/Nav"
import { Socials } from "../components/Socials"
import { Footer } from "../components/Footer"
import { AboutComponent } from "../components/AboutComponent"
import { PortfolioComponent } from "../components/PortfolioComponent"
import { MoreComponent } from "../components/MoreComponent"
import faviconUrl from "../favicons/favicon.ico"

export function Home() {
  // Distance from top of homepage where back to top button appears
  const distanceFromTop = 600;
  
  // Show or hide the back to top button based on page position
  function showTopButton() {
    const topButton = document.getElementById("home-top-button");
    if (window.scrollY > distanceFromTop && window.innerWidth > 1100) {
      topButton.style.display = "inline";
    } else {
      topButton.style.display = "none";
    }
  }

  // Hides the back to top button on small screens
  function visibilityHandler(e) {
    const topButton = document.getElementById("home-top-button");
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
        <title>Home | Robert Stacks</title>
        <link rel="icon" href={faviconUrl} />
      </Helmet>
      <Nav />
      <main>
        <Element name="home-top">
          <img src="/images/updated-circular-me.png" alt="Robert Stacks Photo" 
            id="my-photo" />
        </Element>
        <h1 id="name-tag">Robert Stacks</h1>
        <h2 id="tagline">Computer Science @ Texas A&M University</h2>
        <Socials />
        <div className="home-separator" />
        <Element name="about-section">
          <AboutComponent />
        </Element>
        <div className="home-separator" id="home-sep-space" />
        <Element name="portfolio-section">
          <PortfolioComponent />
        </Element>
        <div className="home-separator" id="home-sep-space2" />
        <Element name="more-section">
          <MoreComponent />
        </Element>
      </main>
      <Link to="home-top" smooth={true} duration={500}
        offset={-200} className="back-to-top-button" id="home-top-button">
        ^
      </Link>
      <Footer />
    </HelmetProvider>
  );
}
