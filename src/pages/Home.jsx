import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Socials } from "../components/Socials"
import { Footer } from "../components/Footer"
import { AboutComponent } from "../components/AboutComponent"
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
        <img src="/images/circular_me.png" alt="Robert Stacks Photo" 
          id="my-photo" />
        <h1 id="name-tag">Robert Stacks</h1>
        <h2 id="tagline">Computer Science @ Texas A&M University</h2>
        <Socials />
        <hr id="home-separator" />
        <AboutComponent />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
