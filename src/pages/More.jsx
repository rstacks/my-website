import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function More() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>More | Robert Stacks</title>
        <link rel="icon" href="images/more-page-icon.ico" />
      </Helmet>
      <Nav />

      <Footer />
    </HelmetProvider>
  );
}
