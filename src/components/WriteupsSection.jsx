import { PortfolioItem } from "./PortfolioItem"

export function WriteupsSection() {
  // Amounts to scroll by when a button is pressed; choice depends on screen size
  const bigScrollDist = 300;
  const smallScrollDist = 200;

  // Screen size cutoff for reduced scrolling speed
  const reducedScrollWidth = 600;

  function scrollLeft() {
    const unorderedList = document.getElementById("writeups-list-scroller");
    if (window.innerWidth < reducedScrollWidth) {
      unorderedList.scrollBy({
        left: -smallScrollDist,
        behavior: "smooth"
      });
    } else {
      unorderedList.scrollBy({
        left: -bigScrollDist,
        behavior: "smooth"
      });
    }
  }

  function scrollRight() {
    const unorderedList = document.getElementById("writeups-list-scroller");
    if (window.innerWidth < reducedScrollWidth) {
      unorderedList.scrollBy({
        left: smallScrollDist,
        behavior: "smooth"
      });
    } else {
      unorderedList.scrollBy({
        left: bigScrollDist,
        behavior: "smooth"
      });
    }
  }

  return (
    <section className="portfolio-section-header">
      <h2>Writeups</h2>
      <p>
        My writeups for cybersecurity competitions that I've participated in.
        Click on a tile below to see how I solved challenges in OSINT, reverse
        engineering, web exploitation, cryptography, digital forensics, and more! You can also
        view all of my writeups on GitHub by clicking <a href="https://github.com/rstacks/ctf-writeups" target="_blank" className="paragraph-link">here</a>.
      </p>
      <div className="tile-list">
        <img src="/images/left-scroll-arrow.png" alt="Left Scroll Arrow"
          id="writeups-left-button" className="scroll-button" onClick={scrollLeft}/>
        <ul id="writeups-list-scroller">
          <li>
            <a href="https://github.com/rstacks/n00bzCTF2024-writeup"
              target="_blank">
              <PortfolioItem imageSrc="/images/n00bz-logo.png" imageAlt="n00bzCTF 2024 Logo"
                title="n00bzCTF 2024" />
            </a>
          </li>
          <li>
            <a href="https://github.com/rstacks/corCTF2024-writeup"
              target="_blank">
              <PortfolioItem imageSrc="/images/corCTF-logo.png" imageAlt="corCTF 2024 Logo"
                title="corCTF 2024" />
            </a>
          </li>
          <li>
            <a href="https://github.com/rstacks/DownUnderCTF2024-writeup"
              target="_blank">
              <PortfolioItem imageSrc="/images/ductf-logo.png" imageAlt="DUCTF 2024 Logo"
                title="DownUnderCTF 2024" />
            </a>
          </li>
          <li>
            <a href="https://github.com/rstacks/WaniCTF2024-writeup"
              target="_blank">
              <PortfolioItem imageSrc="/images/waniCTF-logo-resized.png" imageAlt="WaniCTF 2024 Logo"
                title="WaniCTF 2024" />
            </a>
          </li>
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
        <img src="/images/right-scroll-arrow.png" alt="Right Scroll Arrow"
          id="writeups-right-button" className="scroll-button" onClick={scrollRight}/>
      </div>
    </section>
  );
}