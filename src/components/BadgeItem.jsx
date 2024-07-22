export function BadgeItem(props) {
  return (
    <section className="badge-item" id={props.id}>
      <img src={props.imageSrc} alt={props.imageAlt} />
    </section>
  );
}
