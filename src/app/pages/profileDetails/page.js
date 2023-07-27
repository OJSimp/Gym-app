"use client";

import UserDetails from "../../components/(forms)/ProfileForms/userDetailsForm.js";
import BirthdayForm from "../../components/(forms)/ProfileForms/userBirthdayForm.js";
import UnitsForm from "../../components/(forms)/ProfileForms/userUnitsForm.js";
import CompositionForm from "../../components/(forms)/ProfileForms/userCompositionForm.js";
import GoalsForm from "../../components/(forms)/ProfileForms/userGoalsForm.js";

import ProgressIndicator from "../../components/navigation/formProgress.js";

// Hooks
import { useMultiStageForm } from "../../hooks/useMultiSepForm.ts";

export default function profileDetailsPage() {
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    previous,
    next,
  } = useMultiStageForm([
    <UserDetails />,
    <BirthdayForm />,
    <UnitsForm />,
    <CompositionForm />,
    <GoalsForm />,
  ]);

  return (
    <section className="form-container">
      <form action="" className="form__user-information">
        <ProgressIndicator
          steps={steps.length}
          currentStepIndex={currentStepIndex}
        />
        {step}
        <div className="form__btns--space-between">
          {!isFirstStep && (
            <button
              className="btn btn-outline"
              type="button"
              onClick={previous}
            >
              Back
            </button>
          )}
          {!isLastStep ? (
            <button className="btn btn-primary" type="button" onClick={next}>
              Next
            </button>
          ) : (
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
