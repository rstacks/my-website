export function ProjectEntry(props) {
  /**
   * Props list:
   * title = Personal Website
   * imageSrc = "images/new-site-image.jpg"
   * imageAlt = Website Image
   * text =           This very website was built by me from scratch! My experience 
          in web development was essentially nonexistent when I began this project,
          and I'm happy with how things turned out. I recently redesigned 
          this website's appearance, which gave me some experience with React and
          responsive web design.
   * techs = HTML, CSS, JavaScript, React
   * github = https://github.com/rstacks/my-website
   */
  
  return (
    <article className="project-entry">
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
