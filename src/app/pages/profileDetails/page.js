"use client";

import UserDetails from "../../components/(forms)/ProfileForms/userDetailsForm.js";
import BirthdayForm from "../../components/(forms)/ProfileForms/userBirthdayForm.js";
import UnitsForm from "../../components/(forms)/ProfileForms/userUnitsForm.js";
import CompositionForm from "../../components/(forms)/ProfileForms/userCompositionForm.js";
import GoalsForm from "../../components/(forms)/ProfileForms/userGoalsForm.js";

// import userDetails from "../../components/(forms)/ProfileForms/userDetailsForm";

// Hooks
import { useMultiStageForm } from "../../hooks/useMultiSepForm.ts";

export default function profileDetailsPage() {
  return (
    <section className="form-container">
      <form action="" className="form__user-information">
        <div className="form__progress"></div>
        <UserDetails />
        <BirthdayForm />
        <UnitsForm />
        <CompositionForm />
        <GoalsForm />
      </form>
    </section>
  );
}
