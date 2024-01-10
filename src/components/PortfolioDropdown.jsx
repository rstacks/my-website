export function PortfolioDropdown(props) {
  // Shows or hides content when a dropdown button is used
  function dropdownButton(buttonName, itemClassName) {
    // Get HTML tags to show or hide
    const displayItems = document.getElementsByClassName(itemClassName);
    const button = document.getElementById(buttonName);

    if (button.innerHTML != "<h1>- " + buttonName + "</h1>") {
      button.innerHTML = "<h1>- " + buttonName + "</h1>";
      for (let i = 0; i < displayItems.length; i++) {
        displayItems[i].style.display = "block";
      }
    } else {
      button.innerHTML = "<h1>+ " + buttonName + "</h1>";
      for (let i = 0; i < displayItems.length; i++) {
        displayItems[i].style.display = "none";
      }
    }
  }
  
  return (
    <header className="portfolio-dropdown">
      <button id={props.text} onClick={() => {
          dropdownButton(props.text, props.items);
        }}>
        <h1>+ {props.text}</h1>
      </button>
    </header>
  );
}
