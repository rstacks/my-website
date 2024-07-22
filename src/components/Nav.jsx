import { Link } from "react-scroll"

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

  // Hides dropdown menu after one of its buttons is pressed
  function hideMenu() {
    // Check if the dropdown menu is invisible (so no need to hide it)
    if (window.innerWidth > 730) {
      return;
    }
    
    // Grab HTML tags
    const separator = document.getElementById("menu-separator");
    const menuList = document.getElementById("main-nav-list");

    // Hide dropdown menu
    menuList.style.animationName = "hide-nav";
    menuList.style.animationDuration = "0.5";
    setTimeout(
      () => {
        separator.style.display = "none";
        menuList.style.display = "none";
      }, 500
    );
  }

  // Runs media query for menuList and separator
  const mediaQuery = window.matchMedia("(max-width: 730px)");

  // Handler for how nav bar display styles change depending on screen size 
  function navDisplayHandler(e) {
    // Grab HTML tags
    const separator = document.getElementById("menu-separator");
    const menuList = document.getElementById("main-nav-list");
    
    if (e.matches) {
      menuList.style.display = "none";
    } else {
      menuList.style.display = "block";
      separator.style.display = "none";
    }
  }

  // Add listener for changes in state of media query
  mediaQuery.addEventListener("change", navDisplayHandler);

  // Hide dropdown menu on page load
  let loadOperationsDone = {bool: false};
  setInterval(() => {
    if (!(loadOperationsDone.bool) && document.readyState === "complete") {
      const menuList = document.getElementById("main-nav-list");
      // Only hide dropdown on small screens
      if (mediaQuery.matches) {
        menuList.style.display = "none";
      }
      loadOperationsDone.bool = true;
    }
  }, 10);

  return (
    <nav id="main-nav">
      <button id="menu-button" onClick={showMenu}>
        <img src="/images/hamburger.png" alt="Menu" id="burger" />
        MENU
      </button>
      <div id="menu-separator"></div>
      <ul className="nav-list" id="main-nav-list">
        <li className="main-nav-link">
          <Link to="about-section" smooth={true} duration={500}
            offset={-80} className="main-nav-anchor" onClick={hideMenu}>
            ABOUT
          </Link>
        </li>
        <li className="main-nav-link">
          <Link to="portfolio-section" smooth={true} duration={500}
            offset={-80} className="main-nav-anchor" onClick={hideMenu}>
            PORTFOLIO
          </Link>
        </li>
        <li className="main-nav-link">
          <Link to="more-section" smooth={true} duration={500}
          offset={-80} className="main-nav-anchor" onClick={hideMenu}>
            MORE
          </Link>
        </li>
      </ul>
    </nav>
  );
}
