import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
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
        <header className="portfolio-dropdown">
          <h1>+ Projects</h1>
        </header>
      </main>

      <Footer />
    </HelmetProvider>
  );
}
