import "./styles.css"
import { Nav } from "./Nav"
import { Socials } from "./Socials"
//import { useState } from 'react'

function App() {
  return (
    <>
      <Nav />
      <main>
        <img src="images/circular_me.png" alt="Robert Stacks Photo" 
          id="my-photo" />
        <h1 id="name-tag">Robert Stacks</h1>
        <h2 id="tagline">Computer Science @ Texas A&M University</h2>
        <Socials />
      </main>

      <footer id="openmoji-attribution">
        <p>
          Favicon designed by <a href="https://openmoji.org/" target="_blank"
              className="openmoji-link">
               OpenMoji 
            </a> — the open-source emoji and icon project. License: <a
              href="https://creativecommons.org/licenses/by-sa/4.0/#"
              target="_blank" className="openmoji-link">
               CC BY-SA 4.0
            </a>
        </p>
      </footer>
    </>
  );
}

export default App
