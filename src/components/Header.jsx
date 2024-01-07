export function Header(props) {
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">{props.text}</h1>
      </header>
    </>
  );
}
