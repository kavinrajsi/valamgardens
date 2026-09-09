export default function Features({ items, light = false }) {
  return (
    <div className="row row--gy-lg">
      {items.map((item) => (
        <div className="col-12 col-md-4" key={item.title}>
          <div className={`feature${light ? " feature--light" : ""}`}>
            <h3 className="feature__title">{item.title}</h3>
            <p className="feature__text">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
