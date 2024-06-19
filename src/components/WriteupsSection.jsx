import { PortfolioItem } from "./PortfolioItem"

export function WriteupsSection() {
  // Amount to scroll by when a button is pressed
  const scrollDist = 150;

  function scrollLeft() {
    const unorderedList = document.getElementById("writeups-list-scroller");
    unorderedList.scrollBy({
      left: -scrollDist,
      behavior: "smooth"
    });
  }

  function scrollRight() {
    const unorderedList = document.getElementById("writeups-list-scroller");
    unorderedList.scrollBy({
      left: scrollDist,
      behavior: "smooth"
    });
  }

  return (
    <section className="portfolio-section-header">
      <h2>Writeups</h2>
      <p>
        My writeups for cybersecurity competitions that I've participated in.
        Click on a tile below to see how I solved challenges in OSINT, reverse
        engineering, web exploitation, cryptography, digital forensics, and more!
      </p>
      <div className="tile-list">
        <button id="writeups-left-button" onClick={scrollLeft}>⬅</button>
        <ul id="writeups-list-scroller">
          <li>
            <a href="https://github.com/rstacks/USCyberOpenSeasonIV-BeginnersGameRoom-writeup"
              target="_blank">
              <PortfolioItem imageSrc="/images/uscg-2024-logo.png" imageAlt="USCG 2024 Logo"
                title="USCG Season IV: Beginner's Game Room" />
            </a>
          </li>
          <li>
            <a href="https://github.com/rstacks/L3akCTF2024-writeup" target="_blank">
              <PortfolioItem imageSrc="/images/l3ak-ctf-logo.png" imageAlt="L3akCTF 2024 Logo"
                title="L3akCTF 2024" />
            </a>
          </li>
        </ul>
        <button id="writeups-right-button" onClick={scrollRight}>➡</button>
      </div>
    </section>
  );
}