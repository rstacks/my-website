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