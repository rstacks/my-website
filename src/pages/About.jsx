import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function About() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About | Robert Stacks</title>
        <link rel="icon" href="images/newest-resume-icon.ico" />
      </Helmet>
      <Nav />
      <main>
        {/**
         * <h1 className="page-title">ABOUT</h1>
         */}
        <Header text="ABOUT" />
        <p id="about-text">
          Howdy! As I'm sure you've gathered, I'm Robert, a sophomore computer science
          major at Texas A&M University. Here are some quick facts about me:
          <ul>
            <li>I'm a computer science teaching assistant and peer teacher</li>
            <li>I like coding</li>
            <li>I like hacking (ethically)</li>
          </ul>
          - 
          - 
          - 

          

          If you're interested in learning more, have a look around!

          link
          Here's some more quick facts:

        </p>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
