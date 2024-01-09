import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function Portfolio() {
  // Shows or hides content when a dropdown button is used
  function dropdownButton(buttonName) {
    // Get HTML tags to show or hide
    const project1 = document.getElementById("project1");
    const project2 = document.getElementById("project2");

    if (buttonName === "projects") {
      const button = document.getElementById("projects-button");
      if (button.innerHTML != "<h1>- Projects</h1>") {
        button.innerHTML = "<h1>- Projects</h1>";
        project1.style.display = "block";
        project2.style.display = "block";
      } else {
        button.innerHTML = "<h1>+ Projects</h1>";
        project1.style.display = "none";
        project2.style.display = "none";
      }
    }
  }
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>Portfolio | Robert Stacks</title>
        <link rel="icon" href="images/quals-icon.ico" />
      </Helmet>
      <Nav />
      <Header text="PORTFOLIO" />
      <main>
        <header className="portfolio-dropdown">
          <button id="projects-button" onClick={() => {
            dropdownButton("projects");
          }}>
            <h1>+ Projects</h1>
          </button>
        </header>
        <article className="article-body" id="project1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames ac. Sodales neque sodales ut etiam sit amet nisl purus in. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Sem viverra aliquet eget sit. Viverra tellus in hac habitasse platea dictumst vestibulum. Augue interdum velit euismod in pellentesque.
          </p>
        </article>
        <article className="article-body" id="project2">
          <p>
            Lobortis scelerisque fermentum dui faucibus in ornare. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Ut consequat semper viverra nam libero justo laoreet. Tempus quam pellentesque nec nam aliquam sem et tortor. Pulvinar mattis nunc sed blandit libero volutpat. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Tincidunt ornare massa eget egestas. Id leo in vitae turpis massa. Tristique et egestas quis ipsum suspendisse ultrices. Vel quam elementum pulvinar etiam. Leo a diam sollicitudin tempor id eu. Dui ut ornare lectus sit amet.
          </p>
        </article>
      </main>

      <Footer />
    </HelmetProvider>
  );
}
