"use client";

import { useState } from "react";

import TextInput from "../../(inputs)/TextInput";
import SelectInput from "../../(inputs)/SelectInput.js";

const UserDetails = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");

  const genderArray = ["Male", "Female", "Other"];
  return (
    firstName,
    lastName,
    gender,
    (
      <div className="form__step form__user-details">
        <header className="form__header">
          <h5>More about you</h5>
          <p>
            Let us know a little more about you so we can personalise your
            experience.
          </p>
        </header>
        <TextInput
          id="first-name"
          type="text"
          label="First name"
          error=""
          name="first-name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextInput
          id="last-name"
          type="text"
          label="Last name"
          error=""
          name="last-name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <SelectInput
          id="gender"
          type="text"
          label="Gender"
          options={genderArray}
          error=""
          name="gender"
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
    )
  );
};

export default UserDetails;
