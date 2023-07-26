// import userBirthdayForm from "../../components/(forms)/ProfileForms/userBirthdayForm";
// import userUnitsForm from "../../components/(forms)/ProfileForms/userUnitsForm";
// import userCompositionForm from "../../components/(forms)/ProfileForms/userCompositionForm";
// import userGoalsForm from "../../components/(forms)/ProfileForms/userGoalsForm";

// import userDetails from "../../components/(forms)/ProfileForms/userDetailsForm";

import TextInput from "../../components/(inputs)/TextInput.js";
import SelectInput from "../../components/(inputs)/SelectInput.js";

export default function profileDetailsPage() {
  // Form navigation

  const genderArray = ["male", "female", "other"];
  return (
    <section className="form-container">
      {/* <userDetails /> */}
      <form action="" className="form__user-information">
        <div className="form__user-details">
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
            options={["Male", "Female", "Other"]}
            error=""
            name="gender"
          />
          <button className="btn-primary">Next</button>
        </div>
      </form>
    </section>
  );
}
