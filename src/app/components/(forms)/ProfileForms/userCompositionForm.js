"use client";

import TextInput from "../../(inputs)/TextInput";

import { useState } from "react";

export default function CompositionForm() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <div className="form__step form__user-composition">
      <header className="form__header">
        <h5>About your body</h5>
        <p>
          Knowing more about your body composition helps us set better goals for
          you
        </p>
      </header>
      <div className="form__body">
        <TextInput
          required
          id="user-height"
          type="number"
          label="Your height (ft)"
          error=""
          name="user-height"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
        <TextInput
          id="user-height"
          type="number"
          label="Your weight (kg)"
          error=""
          name="user-height"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
      </div>
    </div>
  );
}
