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
      <Header text="ABOUT" />
      <main className="article-body">
        <p>
          Howdy! As I'm sure you've gathered, I'm Robert, a sophomore computer science
          major at Texas A&M University. Here are some quick facts about me:
        </p>
        <ul>
          <li>I'm a computer science teaching assistant and peer teacher</li>
          <li>I like coding</li>
          <li>I like hacking (ethically)</li>
        </ul>
        <p>
          If you're interested in learning more, have a look around! I bet
          you'll find something cool.
        </p>
        <button id="read-more-button">
          Read More
        </button>
        <hr />
        <h2>Q&A With Robert</h2>
        <h3>dogs or cat?</h3>
        <p>both, if possible</p>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
