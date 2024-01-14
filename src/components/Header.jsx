export function Header(props) {
  // Media query for header and text
  const mediaQuery = window.matchMedia("(max-width: 600px)");

  // Resizes header width at different screen sizes
  function changeWidth(e) {
    const pageHeader = document.getElementById("page-header");
    const pageTitle = document.getElementById("page-title");
    if (e.matches && props.text.length > 5) {
      pageHeader.style.width = String(props.text.length * 3.2 * 0.65) + "em";
      pageTitle.style.fontSize = "2.75em";
    } else {
      pageHeader.style.width = String(props.text.length * 3.2) + "em";
      pageTitle.style.fontSize = "3.5em";
    }
  }

  // Add listener for media query changes
  mediaQuery.addEventListener("change", changeWidth);

  // Adjusts width of header based on text length
  // Adjustments occur after resources load
  /*
  window.addEventListener("load", (event) => {
    const pageHeader = document.getElementById("page-header");
    pageHeader.style.width = String(props.text.length * 3.2) + "em";
    changeWidth(mediaQuery);
  });
  */

  /*
  setTimeout(() => {
    let resourcesLoading = true;
    while (resourcesLoading) {
      if (document.readyState === "complete") {
        const pageHeader = document.getElementById("page-header");
        pageHeader.style.width = String(props.text.length * 3.2) + "em";
        changeWidth(mediaQuery);
        // Break loop
        resourcesLoading = false;
      }
    }
  }, 500);
  */

  let loadOperationsDone = {bool: false};

  setInterval(() => {
    if (!(loadOperationsDone.bool) && document.readyState === "complete") {
      const pageHeader = document.getElementById("page-header");
      pageHeader.style.width = String(props.text.length * 3.2) + "em";
      changeWidth(mediaQuery);
      loadOperationsDone.bool = true;
    }
  }, 10);

  return (
    <header id="page-header">
      <h1 id="page-title">{props.text}</h1>
    </header>
  );
}
