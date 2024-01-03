export function Nav() {
  return (
    <>
      <nav id="main-nav">
        <button id="menu-button">
          <img src="images/hamburger.png" alt="Menu" id="burger" />
          MENU
        </button>
        <ul className="nav-list">
          <li className="main-nav-link">
            <a href="/home" className="main-nav-anchor">HOME</a>
          </li>
          <li className="main-nav-link">ABOUT</li>
          <li className="main-nav-link">PORTFOLIO</li>
          <li className="main-nav-link">MORE</li>
        </ul>
      </nav>
    </>
  );
}
