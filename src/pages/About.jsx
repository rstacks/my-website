import { Helmet, HelmetProvider } from "react-helmet-async"
import { Nav } from "../components/Nav"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import faviconUrl from "../favicons/newest-resume-icon.ico"

export function About() {
  // Shows or hides additional content on this page
  function readMoreButton() {
    // Get HTML tags to display or hide
    const separator = document.getElementById("about-separator");
    const header = document.getElementById("qa-header");
    const olist = document.getElementById("qa-list");
    const button = document.getElementById("read-more-button");

    if (button.innerHTML != "Read less") {
      button.innerHTML = "Read less";
      separator.style.display = "block";
      header.style.display = "block";
      olist.style.display = "block";
    } else {
      button.innerHTML = "Read more";
      separator.style.display = "none";
      header.style.display = "none";
      olist.style.display = "none";
    }
  }
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>About | Robert Stacks</title>
        <link rel="icon" href={faviconUrl} />
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
        <button id="read-more-button" onClick={readMoreButton}>
          Read more
        </button>
        <hr id="about-separator" />
        <h2 id="qa-header">Q&A With Robert</h2>
        <ol id="qa-list">
          <li className="qa-item">
            <p className="question">Where are you from?</p>
            <p>
              I was born and raised in The Woodlands, Texas.
              My mom is Thai.
            </p>
          </li>
          <li className="qa-item">
            <p className="question">Why are you studying computer science?</p>
            <p>
              It's fun, I'm pretty good at it, and I'm interested in a
              career in cybersecurity.
            </p>
          </li>
          <li className="qa-item">
            <p className="question">Do you have any hobbies?</p>
            <p>
              I'm a trombone player! I currently play for the Texas A&M
              Symphonic Band. I'm also into cooking, video editing, and
              finishing 3D prints — basically, I like making stuff.
            </p>
          </li>
          <li className="qa-item">
            <p className="question">What's your favorite color?</p>
            <p>Blue.</p>
          </li>
          <li className="qa-item">
            <p className="question">What's your favorite animal?</p>
            <p>Dogs are pretty cool.</p>
          </li>
          <li className="qa-item">
            <p className="question">What's your favorite type of bean?</p>
            <p>Probably the kidney.</p>
          </li>
          <li className="qa-item">
            <p className="question">What's your favorite human organ?</p>
            <p>Probably the kidney.</p>
          </li>
        </ol>
      </main>
      <Footer />
    </HelmetProvider>
  );
}
