import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { PortfolioDropdown } from "../components/PortfolioDropdown"
import { Footer } from "../components/Footer"

export function Portfolio() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Portfolio | Robert Stacks</title>
        <link rel="icon" href="images/quals-icon.ico" />
      </Helmet>
      <Nav />
      <Header text="PORTFOLIO" />
      <main>
        <PortfolioDropdown text="Projects" items="project-entry" />
        <article className="project-entry">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames ac. Sodales neque sodales ut etiam sit amet nisl purus in. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Sem viverra aliquet eget sit. Viverra tellus in hac habitasse platea dictumst vestibulum. Augue interdum velit euismod in pellentesque.
          </p>
        </article>
        <article className="project-entry">
          <p>
            Lobortis scelerisque fermentum dui faucibus in ornare. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Ut consequat semper viverra nam libero justo laoreet. Tempus quam pellentesque nec nam aliquam sem et tortor. Pulvinar mattis nunc sed blandit libero volutpat. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Tincidunt ornare massa eget egestas. Id leo in vitae turpis massa. Tristique et egestas quis ipsum suspendisse ultrices. Vel quam elementum pulvinar etiam. Leo a diam sollicitudin tempor id eu. Dui ut ornare lectus sit amet.
          </p>
        </article>
      </main>

      <Footer />
    </HelmetProvider>
  );
}
