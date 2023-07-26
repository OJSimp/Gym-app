"use client";

import { useState, useEffect } from "react";

import DateInput from "../../(inputs)/DateInput";

const userBirthdayForm = () => {
  // User - Date Of Birth
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [userAge, setUserAge] = useState(0);

  useEffect(() => {
    console.log(dateOfBirth);
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();

    setUserAge(age);
  }, [dateOfBirth]);

  return (
    <div className="form__step form__user-birthday">
      <header className="form__header">
        <h5>When is your birthday?</h5>
        <p>Knowing your date of birth helps us set better goals for you.</p>
      </header>

      <DateInput
        id="date-of-birth"
        label="Date of birth"
        error=""
        name="dob"
        type="date"
        setDateValue={(value) => setDateOfBirth(value)}
      />

      <div className="form__feedback">
        <p>{userAge ? userAge : "0"}</p>
        <p className="">Years Old</p>
      </div>
    </div>
  );
};

export default userBirthdayForm;
