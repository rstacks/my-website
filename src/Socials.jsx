export function Socials() {
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
            <a href="https://youtube.com">
              <img src="images/improved_mail_icon.png" alt="Mail Icon"
                id="contact-link" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
