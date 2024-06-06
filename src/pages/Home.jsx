import { Helmet, HelmetProvider } from "react-helmet-async"
import { Element } from "react-scroll"
import { Nav } from "../components/Nav"
import { Socials } from "../components/Socials"
import { Footer } from "../components/Footer"
import { AboutComponent } from "../components/AboutComponent"
import { PortfolioComponent } from "../components/PortfolioComponent"
import faviconUrl from "../favicons/favicon.ico"

export function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | Robert Stacks</title>
        <link rel="icon" href={faviconUrl} />
      </Helmet>
      <Nav />
      <main>
        <Element name="home-top">
          <img src="/images/circular_me.png" alt="Robert Stacks Photo" 
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
        <PortfolioComponent />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
