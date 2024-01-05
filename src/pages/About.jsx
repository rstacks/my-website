import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Footer } from "../components/Footer"

export function About() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About | Robert Stacks</title>
        <link rel="icon" href="images/newest-resume-icon.ico" />
      </Helmet>
      <Nav />
      <main>
        <p>cicj</p>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
