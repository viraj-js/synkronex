import { cn } from '@/lib/utils';
import React, { useCallback } from 'react';
import z from 'zod';

export interface FormStep {
  label: string;
  component: React.ReactNode;
  schema: z.ZodObject<Record<string, z.ZodTypeAny>>;
}

const useMultiStepForm = (steps: FormStep[]) => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  const goToNextStep = useCallback(() => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  }, [steps.length]);

  const goToPreviousStep = useCallback(() => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  const ProgressIndicator: React.FC<{ currentStep: number; totalSteps: number }> = ({ currentStep, totalSteps }) => (
    <div className="flex justify-center gap-2 mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className={cn('w-3 h-3 rounded-full transition-all duration-300', index + 1 <= currentStep ? 'bg-blue-500' : 'bg-gray-600')} />
      ))}
    </div>
  );

  return {
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    goToNextStep,
    goToPreviousStep,
    isFirstStep,
    isLastStep,
    totalSteps: steps.length,
    ProgressIndicator,
  };
};

export default useMultiStepForm;
