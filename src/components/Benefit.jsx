function Benefit({ title, description }) {
  return (
    <div className="benefit-item card fade-in">
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-description">{description}</p>
    </div>
  );
}

export default Benefit;
