/**
 * The following applies styles to the QUALIFICATIONS button on the
 * main nav bar depending on whether the text is overflowing
 */

// Grab "QUALIFICATIONS" button
const qualButton = document.getElementById("qual-button");

// Check for text overflow by comparing viewable width to scroll width
// These values should be equal if there is no overflow
function qualOverflowDetector() {
  if (qualButton.clientWidth < qualButton.scrollWidth) {
    return true;
  }
  return false;
}

// Apply styles in the event of overflow
function qualOverflowStyles() {
  // Ensures this function will only do anything if styles aren't
  // already set
  if (qualButton.style.paddingTop != "0.9em") {
    qualButton.style.paddingTop = "0.9em";
    qualButton.style.overflow = "visible";
    qualButton.style.hyphens = "manual";
  }
}

// Undo style changes if there is no longer overflow
function qualNormalStyles() {
  if (qualButton.style.paddingTop == "0.9em") {
    qualButton.style.paddingTop = "1.4em";
    qualButton.style.overflow = "auto";
    qualButton.style.hyphens = "none";
  }
}

// Apply styling to button depending on overflow status; takes
// number param representing the viewport width when overflow occurs;
// returns true if overflow styles were applied and false otherwise
function applyQualButtonStyles(overflowViewportWidth) {
  // If overflow, apply styles and exit
  if (qualOverflowDetector()) {
    qualOverflowStyles();
    return true;
  }
  
  // Revert style changes once viewport widens back up
  if (document.defaultView.innerWidth > overflowViewportWidth.width) {
    qualNormalStyles();
  }

  return false;
}

// Runner for qual-button overflow actions
function qualRunner(overflowViewportWidth) {
  if (applyQualButtonStyles(overflowViewportWidth)) {
    overflowViewportWidth.width = document.defaultView.innerWidth;
  }
}

// Set top padding for qual-button if it is not in overflow; media
// queries in CSS no longer work once JS has applied styles to button
function setQualPadding() {
  // Do not change padding if overflow styles are currently active
  if (qualButton.style.paddingTop == "0.9em") {
    return;
  }

  if (document.defaultView.innerWidth <= 870) {
    qualButton.style.paddingTop = "1.4em";
  } else {
    qualButton.style.paddingTop = "1.1em";
  }
}

// Check for overflow constantly and apply styles as needed
// Using object to represent viewport width at overflow so that the
// value is preserved between function calls
let overflowViewportWidthObj = {width: -1};
setInterval(function() {qualRunner(overflowViewportWidthObj)}, 10);

// Make sure qual-button padding is correct at all times
setInterval(setQualPadding, 10);

/****************************************************************/

/**
 * The following makes the "Read more" button on the home page work
 */

// Grab the "Read more" button and content to toggle display on
const readMoreButton = document.getElementById("read-more-button");
const moreAboutMe = document.getElementById("more-about-me");

// Change button text between "more" and "less" depending on previous
// state and display contents accordingly
function readMore() {
  if (readMoreButton.innerHTML != "Read less") {
    readMoreButton.innerHTML = "Read less";
    moreAboutMe.style.display = "inherit";
  } else {
    readMoreButton.innerHTML = "Read more";
    moreAboutMe.style.display = "none";
  }
}

/****************************************************************/

/**
 * This reveals email on contact page after a button is pressed
 */

// Grab the reveal email button and all elements whose styles will
// be changed
const revealEmailButton = document.getElementById("reveal-email-button");
const emailParagraph = document.getElementById("contact-paragraph1");
const linkedinParagraph = document.getElementById("contact-paragraph2");
const emailSection = document.getElementById("email");
const addrElement = document.getElementById("no-peeking");

const addr1 = "c3RhY2";
const addr2 = "tzcm9iOT";
const addr3 = "EwQGdtYWl";
const addr4 = "sLmNvbQo=";

// Hide reveal email button, reveal email element, and insert
// address from here
function revealEmail() {
  // Hide reveal button
  revealEmailButton.style.display = "none";
  // Show email
  emailSection.style.display = "flex";
  // Change spacing between email and paragraphs around it
  emailParagraph.style.marginBottom = "0px";
  linkedinParagraph.style.marginTop = "0px";

  // Insert address into HTML
  addrElement.innerHTML = atob(addr1 + addr2 + addr3 + addr4);
}

/****************************************************************/

/**
 * Copies email address to user's clipboard
 */

// Grab the copy confirmation tooltip element
const confirmationTooltip = document.getElementById("copy-confirmation");

// Displays and hides tooltip that appears when user clicks copy
// email button
function displayTooltip() {
  // Adjust margin for paragraph below tooltip
  linkedinParagraph.style.marginTop = "1.2em";
  // Show the confirmation tooltip
  confirmationTooltip.style.display = "flex";
  // Set animation styles so tooltip will fade away
  confirmationTooltip.style.animationName = "fade-confirmation";
  confirmationTooltip.style.animationDuration = "1s";
  confirmationTooltip.style.animationDelay = "1s";
  // Hide tooltip and reset styles after animation finishes
  setTimeout(
    () => {
      confirmationTooltip.style.display = "none";
      linkedinParagraph.style.marginTop = "0px";
    }, 2000
  );
}

// Runs when user clicks copy email button
function copyAddress() {
  // Copy address to clipboard
  navigator.clipboard.writeText(atob(addr1 + addr2 + addr3 + addr4)).then(
    // Executes upon successful copy operation
    () => {
      confirmationTooltip.innerHTML = "Copied email!";
      confirmationTooltip.style.width = "8em";
      displayTooltip();
    },

    // Executes if copy operation failed
    () => {
      confirmationTooltip.innerHTML = "Could not copy email. Try again.";
      confirmationTooltip.style.width = "17em";
      displayTooltip();
    }
  );
}