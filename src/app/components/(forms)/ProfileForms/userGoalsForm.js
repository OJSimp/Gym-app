"use client";

export default function GoalsForm() {
  return (
    <div className="form__step form__user-goals">
      <header className="form__header">
        <h5>What are your fitness goals?</h5>
        <p>Helping you achieve your goals is important to us.</p>
      </header>

      <div className="form__body">
        <button className="btn-outline--large">Weight Loss</button>
        <button className="btn-outline--large">Build Muscle</button>
        <button className="btn-outline--large">Get Healthy</button>
      </div>
    </div>
  );
}
