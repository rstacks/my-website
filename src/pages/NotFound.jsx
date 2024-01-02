import { Helmet, HelmetProvider } from "react-helmet-async"

export function NotFound() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 Not Found</title>
        <link rel="icon" href="images/not-found.ico" />
      </Helmet>
      <h1>404 Not Found</h1>
    </HelmetProvider>
  );
}
