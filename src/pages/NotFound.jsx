import { Helmet, HelmetProvider } from "react-helmet-async"
import { Footer } from "../components/Footer"
import faviconUrl from "../favicons/not-found.ico"

export function NotFound() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 Not Found</title>
        <link rel="icon" href={faviconUrl} />
      </Helmet>
      <main id="not-found">
        <h1>404 Not Found</h1>
        <a href="/home">Click here to return home</a>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
