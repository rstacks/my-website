export function CertEntry(props) {
  return (
    <article className="cert-entry">
      <h2>{props.title}</h2>
      <section className="project-desc">
        <img src={props.imageSrc} alt={props.imageAlt} />
        <p className="project-paragraph">
          {props.text}
        </p>
      </section>
      <section className="project-github">
        <a href={props.link} target="_blank">Read more at {props.issuingOrg}</a>
      </section>
    </article>
  );
}
