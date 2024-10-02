import { useState } from "react";

/**
 * Returns an object containing the current step's index, the step itself, the
 * array of all steps, and functions to navigate between steps.
 *
 * @param steps - An array of React elements, each representing a step in the
 * multistep form.
 */
export function useMultistepForm(steps: React.ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  /**
   * Move to the next step in the form, unless we're already at the last step.
   */
  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  /**
   * Move to the previous step in the form, unless we're already at the first step.
   */
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
    back,
  };
}
