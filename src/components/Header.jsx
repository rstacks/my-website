export function Header(props) {
  // Media query for header and text
  const mediaQuery = window.matchMedia("(max-width: 600px)");

  // Resizes header width at different screen sizes
  function changeWidth(e) {
    const pageHeaders = document.getElementsByClassName("page-header");
    const pageTitles = document.getElementsByClassName("page-title");
    
    if (e.matches && props.text.length > 5) {
      // Apply to all Header components
      for (let i = 0; i < pageHeaders.length; i++) {
        pageHeaders[i].style.width = String(props.text.length * 3.2 * 0.65) + "em";
        pageTitles[i].style.fontSize = "2.75em";
      }
    } else {
      for (let i = 0; i < pageHeaders.length; i++) {
        pageHeaders[i].style.width = String(props.text.length * 3.2) + "em";
        pageTitles[i].style.fontSize = "3.5em";
      }
    }
  }

  // Add listener for media query changes
  mediaQuery.addEventListener("change", changeWidth);

  // Adjusts width of header based on text length
  // Adjustments occur after resources load
  let loadOperationsDone = {bool: false};
  setInterval(() => {
    if (!(loadOperationsDone.bool) && document.readyState === "complete") {
      const pageHeaders = document.getElementsByClassName("page-header");
      for (let i = 0; i < pageHeaders.length; i++) {
        pageHeaders[i].style.width = String(props.text.length * 3.2) + "em";
      }
      changeWidth(mediaQuery);
      loadOperationsDone.bool = true;
    }
  }, 10);

  return (
    <header className="page-header">
      <h1 className="page-title">{props.text}</h1>
    </header>
  );
}
