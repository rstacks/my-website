export function Header(props) {
  // Adjusts width of header based on text length
  // Adjustments occur after resources load
  window.addEventListener("load", (event) => {
    const pageHeader = document.getElementById("page-header");
    pageHeader.style.width = String(props.text.length * 3.2) + "em";
  });

  return (
    <header id="page-header">
      <h1 id="page-title">{props.text}</h1>
    </header>
  );
}
