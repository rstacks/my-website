export function ProjectEntryNoGitHub(props) {
  return (
    <article className="project-entry" id={props.id}>
      <h2>{props.title}</h2>
      <section className="project-desc">
        <img src={props.imageSrc} alt={props.imageAlt} />
        <p className="project-paragraph">
          {props.text}
        </p>
      </section>
      <p><span className="tech-list">Technologies used</span>: {props.techs}</p>
    </article>
  );
}
