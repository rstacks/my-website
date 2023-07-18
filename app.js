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
  // Ensures this function will only do anything if styles aren't
  // already set
  if (qualButton.style.paddingTop == "0.9em") {
    qualButton.style.paddingTop = "1.4em";
    qualButton.style.overflow = "scroll";
    qualButton.style.hyphens = "none";
  }
}

// Apply styling to button depending on overflow status; takes
// number param representing the viewport width when overflow occurs;
// returns true if overflow styles were applied and false otherwise
function applyQualButtonStyles(overflowViewportWidth) {
  // If overflow, apply styles and exit
  if (qualOverflowDetector()) {
    console.log("overflowing");
    qualOverflowStyles();
    return true;
  }
  
  // Revert style changes once viewport widens back up
  if (document.defaultView.innerWidth > overflowViewportWidth.width) {
    console.log("back to normal");
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

// Check for overflow constantly and apply styles as needed
// Using object to represent viewport width at overflow so that the
// value is preserved between function calls
let overflowViewportWidthObj = {width: -1};
setInterval(function() {qualRunner(overflowViewportWidthObj)}, 10);