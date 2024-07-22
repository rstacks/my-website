import { Header } from "./Header"

export function MoreComponent() {
  return (
    <>
      <Header text="MORE" header_id="more-header" h1_id="more-h1" />
      <article className="portfolio-section-header">
        <h2>Badges</h2>
        <p>
          These are badges that were awarded to me for participating in
          cybersecurity events, completing cybersecurity coursework,
          and earning certifications. Click <a href="https://api.badgr.io/public/collections/646aa633f7df4cf48457d3e4fa660704" target="_blank" className="paragraph-link">here</a> to
          see my full badge collection, or click on a tile below to
          learn more about a specific badge.
        </p>
      </article>
    </>
  );
}
