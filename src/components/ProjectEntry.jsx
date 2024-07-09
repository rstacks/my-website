export function ProjectEntry(props) {
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
      <section className="project-github">
        <a href={props.github} target="_blank">View on GitHub</a>
      </section>
    </article>
  );
}
