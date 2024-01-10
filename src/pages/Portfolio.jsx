import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { PortfolioDropdown } from "../components/PortfolioDropdown"
import { ProjectEntry } from "../components/ProjectEntry"
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
        <ProjectEntry title="Personal Website" imageSrc="images/new-site-image.jpg"
          imageAlt="Website Image" text="This very website was built by me from scratch!
          My experience in web development was essentially nonexistent when I began
          this project, and I'm happy with how things turned out. I recently redesigned 
          this website's appearance, which gave me some experience with React and
          responsive web design." techs="HTML, CSS, JavaScript, React"
          github="https://github.com/rstacks/my-website" />

        

        <article className="project-entry">
          <h2>Maroon Engine</h2>
          <img src="images/maroon-engine-example.gif" alt="Maroon Engine Image" />
          <p>
            Lobortis scelerisque fermentum dui faucibus in ornare. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Ut consequat semper viverra nam libero justo laoreet. Tempus quam pellentesque nec nam aliquam sem et tortor. Pulvinar mattis nunc sed blandit libero volutpat. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Tincidunt ornare massa eget egestas. Id leo in vitae turpis massa. Tristique et egestas quis ipsum suspendisse ultrices. Vel quam elementum pulvinar etiam. Leo a diam sollicitudin tempor id eu. Dui ut ornare lectus sit amet.
          </p>
          <a href="https://github.com/aggie-coding-club/maroon-engine" target="_blank">View on GitHub</a>
        </article>
        <PortfolioDropdown text="Certifications" items="cert-entry" />
        <article className="cert-entry">
          <p>
            Be me shall purse my ought times. Joy years doors all would again rooms these. Solicitude announcing as to sufficient my. No my reached suppose proceed pressed perhaps he. Eagerness it delighted pronounce repulsive furniture no. Excuse few the remain highly feebly add people manner say. It high at my mind by roof. No wonder worthy in dinner.
          </p>
        </article>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
