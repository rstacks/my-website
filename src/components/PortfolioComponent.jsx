import { Header } from "./Header"
import { PortfolioItem } from "./PortfolioItem"

export function PortfolioComponent() {

  return (
    <>
      <Header text="PORTFOLIO" />
      <article>
        <ul>
          <li>
            <PortfolioItem imageSrc="/images/logosecurityplus.png" imageAlt="temp" />
          </li>
        </ul>
      </article>
    </>
  );
}
