export function CertEntry(props) {
  // Displays additional text if cert is still in progress
  let inProgress = "";
  if (props.inProgress === "true") {
    inProgress = "IN PROGRESS: ";
  }
  
  return (
    <article className="cert-entry">
      <h2><span>{inProgress}</span>{props.title}</h2>
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
