export function Socials() {
  // Shows and hides copy email confirmation tooltip
  function displayTooltip(tooltip, div) {
    // Set the fade in animation
    tooltip.style.display = "block";
    tooltip.style.animationName = "fade-in-tooltip";
    tooltip.style.animationDuration = "0.5s";
    tooltip.style.color = "#868686";
    div.style.paddingBottom = "0";
    
    // Set the fade out animation (after fade in)
    setTimeout(
      () => {
        tooltip.style.animationName = "fade-out-tooltip";
        tooltip.style.animationDuration = "0.5s";
        tooltip.style.color = "#292929";
      }, 2000
    );
    
    // Reset other styles
    setTimeout(
      () => {
        tooltip.style.display = "none";
        div.style.paddingBottom = "1.95em";
      }, 2500
    );
  }
  
  // Runs when user clicks copy email button
  function copyAddress() {
    // Address fragments
    const addr1 = "c3RhY2";
    const addr2 = "tzcm9iOT";
    const addr3 = "EwQGdtYWl";
    const addr4 = "sLmNvbQo=";

    // Grab HTML tags
    const confirmationTooltip = document.getElementById("mail-confirmation");
    const socialsDiv = document.getElementById("social-nav");

    // Copy address to clipboard
    navigator.clipboard.writeText(atob(addr1 + addr2 + addr3 + addr4).trim()).then(
      // Executes upon successful copy operation
      () => {
        confirmationTooltip.innerHTML = "Copied \"" + atob(addr1 + addr2 + addr3 + addr4);
        confirmationTooltip.innerHTML = confirmationTooltip.innerHTML.trim();
        confirmationTooltip.innerHTML += "\" to clipboard";
        displayTooltip(confirmationTooltip, socialsDiv);
      },

      // Executes if copy operation failed
      () => {
        confirmationTooltip.innerHTML = "Could not copy email. Try again.";
        displayTooltip(confirmationTooltip, socialsDiv);
      }
    );
  }
  
  return (
    <>
      <nav id="social-nav">
        <ul className="nav-list" id="social-nav-list">
          <li className="social-nav-link">
            <a href="https://www.linkedin.com/in/robert-stacks/" target="_blank">
              <img src="images/legal-in-logo.png" alt="LinkedIn Bug"
                id="linkedin-link" />
            </a>
          </li>
          <li className="social-nav-link">
            <a href="https://github.com/rstacks" target="_blank">
              <img src="images/legal-github-logo.png" alt="GitHub Logo"
                id="github-link" />
            </a>
          </li>
          <li className="social-nav-link">
              <img src="images/improved_mail_icon.png" alt="Mail Icon"
                id="contact-link" title="Copy my email" onClick={copyAddress} />
          </li>
        </ul>
        <p id="mail-confirmation">My favorite class is the spy</p>
      </nav>
    </>
  );
}
