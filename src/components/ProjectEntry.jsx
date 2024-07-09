export function ProjectEntry(props) {
  /**
   * None of this is done
   * Goal was to implement clicking outside of the project entry leading to it closing
   * But we don't want to be listening for outside clicks while the popup is invisible,
   *  because that just made it never show up
   *  
  
  
  const hideThroughClick = (e) => {
    const projectEntry = document.getElementById(props.id);
    if (!(projectEntry.contains(e.target))) {
      projectEntry.style.display = "none";
    }
  };
  
  function hideEntry() {
    const projectEntry = document.getElementById(props.id);
    projectEntry.style.display = "none";
  }
  
  function clickOutsideHandler() {
    const projectEntry = document.getElementById(props.id);
    if (projectEntry.style.display === "block") {
      projectEntry.addEventListener("click", hideThroughClick);
    }
  }

  if (document.readyState === "loading" || document.readyState === "interactive") {
    document.addEventListener("DOMContentLoaded", )
  } else {

  }
  */
  return (
    <article className="project-entry" id={props.id}>
      <button className="project-entry-button">×</button>
      <h2>{props.title}</h2>
      <section className="project-desc">
        <img src={props.imageSrc} alt={props.imageAlt} />
        <p className="project-paragraph">
          {props.text}
        </p>
      </section>
      <p><span className="tech-list">Technologies used</span>: {props.techs}</p>
      <section className="project-github">
        <a href={props.github} target="_blank">View on GitHub</a>
      </section>
    </article>
  );
}
