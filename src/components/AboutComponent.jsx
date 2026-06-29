import { Header } from "./Header"

export function AboutComponent() {
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
    <>
      <Header text="ABOUT" header_id="about-header" h1_id="about-h1" />
      <article className="article-body">
        <p>
          Hello! As I'm sure you've gathered, I'm Robert, a managed IT consultant
          at Plante Moran. If you're interested in learning more about me, have a
          look around! I bet you'll find something cool.
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
              I am half Thai.
            </p>
          </li>
          <li className="qa-item">
            <p className="question">What's your educational background?</p>
            <p>
              I graduated from Texas A&M University in May 2026 with Summa
              Cum Laude institutional honors. My degree was in Computer Science.
              I was also awarded with a Certificate in Cyber Operations.
            </p>
          </li>
          <li className="qa-item">
            <p className="question">Do you have any hobbies?</p>
            <p>
              I'm a trombone player! I started playing in the 5th grade and have
              participated in many marching and concert band programs since then,
              including the Texas A&M Symphonic Band. I'm also into cooking, video editing, finishing
              3D prints, and running D&D adventures with my friends — basically,
              I like making stuff.
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
            <p className="question">What's your preferred mode of transport?</p>
            <p>Electric unicycle.</p>
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
      </article>
    </>
  );
}
