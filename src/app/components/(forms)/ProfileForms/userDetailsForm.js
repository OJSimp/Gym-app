"use client";

import TextInput from "../../(inputs)/TextInput";
import SelectInput from "../../(inputs)/SelectInput.js";

const UserDetails = () => {
  const genderArray = ["Male", "Female", "Other"];
  return (
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
      />
      <TextInput
        id="last-name"
        type="text"
        label="Last name"
        error=""
        name="last-name"
      />
      <SelectInput
        id="gender"
        type="text"
        label="Gender"
        options={genderArray}
        error=""
        name="gender"
      />
      <div className="form__btns">
        <button className="btn-primary">Next</button>
      </div>
    </div>
  );
};

export default UserDetails;
