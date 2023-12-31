import "./styles.css"
import { Nav } from "./Nav"
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
      </main>
    </>
  );
}

export default App
