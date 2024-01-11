import { Helmet, HelmetProvider } from "react-helmet-async"
import { Footer } from "../components/Footer"

export function NotFound() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 Not Found</title>
        <link rel="icon" href="/images/not-found.ico" />
      </Helmet>
      <main id="not-found">
        <h1>404 Not Found</h1>
        <a href="/home">Click here to return home</a>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
