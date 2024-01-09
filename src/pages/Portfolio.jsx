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

      <Footer />
    </HelmetProvider>
  );
}
