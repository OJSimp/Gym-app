
import { useState, ReactElement } from "react";

export function useMultiStageForm(steps: ReactElement[]) {

 let [currentStepIndex, setCurrentStepIndex] = useState(0)

 const next = () => {
 setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
 }

 const previous = () => {
 setCurrentStepIndex(i => {
      if (i <= 0) return i
      return i - 1
    })
 }

 const goTo = (index: number) => {
 setCurrentStepIndex(index)
 }

 return {
 next,
 previous,
 goTo,
 currentStepIndex,
 isFirstStep: currentStepIndex == 0,
 isLastStep: currentStepIndex === steps.length - 1,
 steps,
 step: steps[currentStepIndex]
 }

};