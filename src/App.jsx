// Should include import for stylesheet
import "./styles.css"
//import { useState } from 'react'

function App() {
  return (
    <>
      {/* Nav bar */}
      <nav id="main-nav">
        <ul id="main-nav-list">
          <li className="main-nav-link">HOME</li>
          <li className="main-nav-link">ABOUT</li>
          <li className="main-nav-link">PORTFOLIO</li>
          <li className="main-nav-link">MORE</li>
        </ul>
      </nav>
    </>
  );
}

export default App
