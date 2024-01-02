export function Socials() {
  // Shows and hides copy email confirmation tooltip
  function displayTooltip(tooltip) {
    // Set the fade in animation
    tooltip.style.animationName = "fade-in-tooltip";
    tooltip.style.animationDuration = "0.5s";
    tooltip.style.color = "#FFFFF0";
    // Set the fade out animation (after fade in)
    setTimeout(
      () => {
        tooltip.style.animationName = "fade-out-tooltip";
        tooltip.style.animationDuration = "0.5s";
        tooltip.style.color = "#292929";
      }, 2000
    );
  }
  
  // Runs when user clicks copy email button
  function copyAddress() {
    // Address fragments
    const addr1 = "c3RhY2";
    const addr2 = "tzcm9iOT";
    const addr3 = "EwQGdtYWl";
    const addr4 = "sLmNvbQo=";

    // Grab tooltip HTML tag
    const confirmationTooltip = document.getElementById("mail-confirmation");

    // Copy address to clipboard
    navigator.clipboard.writeText(atob(addr1 + addr2 + addr3 + addr4)).then(
      // Executes upon successful copy operation
      () => {
        confirmationTooltip.innerHTML = "Copied \"" + atob(addr1 + addr2 + addr3 + addr4);
        confirmationTooltip.innerHTML = confirmationTooltip.innerHTML.trim();
        confirmationTooltip.innerHTML += "\" to clipboard";
        displayTooltip(confirmationTooltip);
      },

      // Executes if copy operation failed
      () => {
        confirmationTooltip.innerHTML = "Could not copy email. Try again.";
        displayTooltip(confirmationTooltip);
      }
    );
  }
  
  return (
    <>
      <nav>
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
      </nav>
      <p id="mail-confirmation">-</p>
    </>
  );
}
