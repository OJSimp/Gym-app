"use client";

export default function UnitsForm() {
  return (
    <div className="form__step form__user-units">
      <header className="form__header">
        <h5>Your units of measure</h5>
        <p>It is important for us to know how you measure weight.</p>
      </header>

      <div className="form__body">
        <button className="btn-outline--large">Imperial (lb)</button>
        <button className="btn-outline--large">Metric (kg)</button>
      </div>
    </div>
  );
}
