import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import faviconUrl from "../favicons/more-page-icon.ico"

export function More() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>More | Robert Stacks</title>
        <link rel="icon" href={faviconUrl} />
      </Helmet>
      <Nav />
      <Header text="MORE" />
      <main className="article-body" id="more-for-now">
        <p>
          This is where I'll post additional stuff about me that doesn't 
          fit elsewhere. I currently don't have much to show, but for now, 
          check out this 3D printed clone trooper helmet from Star Wars that
          I recently finished!
        </p>
        <img src="/images/jesse-helmet.JPG" alt="Clone Trooper Helmet" id="jesse-img" />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
