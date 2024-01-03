export function Nav() {
  // Displays dropdown menu
  function showMenu() {
    // Grab HTML tags
    const separator = document.getElementById("menu-separator");
    const menuList = document.getElementById("main-nav-list");

    // Show or hide them
    if (separator.style.display != "block") {
      separator.style.display = "block";
      menuList.style.display = "block";
      menuList.style.animationName = "display-nav";
      menuList.style.animationDuration = "0.5s";
    } else {
      menuList.style.animationName = "hide-nav";
      menuList.style.animationDuration = "0.5";
      setTimeout(
        () => {
          separator.style.display = "none";
          menuList.style.display = "none";
        }, 500
      );
    }
  }
  
  return (
    <>
      <nav id="main-nav">
        <button id="menu-button" onClick={showMenu}>
          <img src="images/hamburger.png" alt="Menu" id="burger" />
          MENU
        </button>
        <div id="menu-separator"></div>
        <ul className="nav-list" id="main-nav-list">
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
