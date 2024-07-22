import { Header } from "./Header"
import { BadgeItem } from "./BadgeItem"

export function MoreComponent() {
  // Amount to scroll by when a button is pressed
  const scrollDist = 300;

  function scrollLeft() {
    const unorderedList = document.getElementById("badge-list-scroller");
    unorderedList.scrollBy({
      left: -scrollDist,
      behavior: "smooth"
    });
  }

  function scrollRight() {
    const unorderedList = document.getElementById("badge-list-scroller");
    unorderedList.scrollBy({
      left: scrollDist,
      behavior: "smooth"
    });
  }

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
        <div className="tile-list">
          <button id="badges-left-button" className="scroll-button" onClick={scrollLeft}>⬅</button>
          <ul id="badge-list-scroller">
            <li>
              <a href="https://api.badgr.io/public/assertions/wpQQcsY2SsGOFopkAGbV8Q"
                target="_blank">
                <BadgeItem imageSrc="/images/uscg-badge.png"
                  imageAlt="USCG Beginner's Game Room 2024 Badge" />
              </a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/943a6f7d-97c6-4f5d-8531-22f6880382cd/public_url"
                target="_blank">
                <BadgeItem imageSrc="/images/gfact-badge.png"
                  imageAlt="GFACT Badge" />
              </a>
            </li>
            <li>
              <a href="https://api.badgr.io/public/assertions/w23l6LqzQhySRRV3U6h7LQ"
                target="_blank">
                <BadgeItem imageSrc="/images/cyber-honors-badge.png"
                  imageAlt="National Cyber Scholar with Honors Badge" />
              </a>
            </li>
            <li>
              <a href="https://api.badgr.io/public/assertions/7Xd_9G-_RI-EsDQ_MaMQnA"
                target="_blank">
                <BadgeItem imageSrc="/images/sans-badge.svg"
                  imageAlt="SANS Foundations Badge" />
              </a>
            </li>
            <li>
              <a href="https://api.badgr.io/public/assertions/XV_YF-WrQH-Nu_3NWs8zMQ"
                target="_blank">
                <BadgeItem imageSrc="/images/cyber-semifinalist-badge.png"
                  imageAlt="National Cyber Scholarship Semifinalist Badge" />
              </a>
            </li>
            <li>
              <a href="https://api.badgr.io/public/assertions/XPUE7DJhRUiYce-wBdDyaw"
                target="_blank">
                <BadgeItem imageSrc="/images/cyber-scholar-badge.png"
                  imageAlt="National Cyber Scholar Badge" />
              </a>
            </li>
          </ul>
          <button id="badges-right-button" className="scroll-button" onClick={scrollRight}>➡</button>
        </div>
      </article>
    </>
  );
}
