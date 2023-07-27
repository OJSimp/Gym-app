import "./formProgress.scss";

const ProgressIndicator = (props) => {
  const number = props.steps;
  const currentStep = props.currentStepIndex;
  const formStepsArray = Array.from({ length: number }, (_, index) => index);

  console.log("CreatedArray:", currentStep);

  return (
    <div className="progress-indicator">
      {formStepsArray.map((item, index) => {
        return (
          <div
            className={
              currentStep >= index
                ? "progress-indicator__step--active"
                : "progress-indicator__step"
            }
            key={item}
          ></div>
        );
      })}
    </div>
  );
};

export default ProgressIndicator;
