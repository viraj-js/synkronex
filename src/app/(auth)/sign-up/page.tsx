'use client';

import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/Button';
import { basicInfoSchema } from '../FormBasicInfo';
import { FormProfessionalInfoSchema } from '../FormProfessionalInfo';
import useMultiStepForm, { FormStep } from '@/hooks/form/use-multi-step-form';
import FormErrorBoundary from '@/components/client/form/form-error-boundary';

const FormProfessionalInfo = React.lazy(() => import('../FormProfessionalInfo'));
const FormBasicInfo = React.lazy(() => import('../FormBasicInfo'));

const signUpFormSchema = z.object({
  ...basicInfoSchema.shape,
  ...FormProfessionalInfoSchema.shape,
});

type SignUpFormData = z.infer<typeof signUpFormSchema>;

const formConfig: FormStep[] = [
  {
    label: 'Basic Information',
    component: <FormBasicInfo className="space-y-6" />,
    schema: basicInfoSchema,
  },
  {
    label: 'Professional Information',
    component: <FormProfessionalInfo />,
    schema: FormProfessionalInfoSchema,
  },
];

const SignUpForm: React.FC = () => {
  const { currentStepIndex, currentStep, goToNextStep, goToPreviousStep, isFirstStep, isLastStep, totalSteps, ProgressIndicator } = useMultiStepForm(formConfig);

  const formMethods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      companyName: '',
      jobTitle: '',
      yearsOfExperience: 0,
    },
  });

  const {
    trigger,
    formState: { isSubmitting },
  } = formMethods;

  const validateCurrentStep = useCallback(async () => {
    const currentStepFields = Object.keys(currentStep.schema.shape);
    return await trigger(currentStepFields as (keyof SignUpFormData)[]);
  }, [currentStep.schema, trigger]);

  const handleFormAction = async (e: React.FormEvent) => {
    e.preventDefault();

    const isCurrentStepValid = await validateCurrentStep();

    if (!isCurrentStepValid) {
      return;
    }

    if (isLastStep) {
      const allData = formMethods.getValues();
      await onSubmit(allData);
    } else {
      goToNextStep();
    }
  };

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden py-8" role="main" aria-labelledby="signup-title">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content Container */}
      <div className="w-full max-w-lg mx-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6 animate-fade-in">
          <div className="mb-3">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-3 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
          <h1 id="signup-title" className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Create Your Account
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">Complete the steps below to join our community and get started.</p>
        </div>

        <div className="mb-6">
          <ProgressIndicator currentStep={currentStepIndex + 1} totalSteps={totalSteps} />
        </div>

        <FormProvider {...formMethods}>
          <form
            onSubmit={handleFormAction}
            className="w-full p-6 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-500/30"
            noValidate
          >
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl"></div>

            <div className="relative">
              <FormErrorBoundary>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">{currentStep.label}</h2>
                  <div className="space-y-4">{currentStep.component}</div>
                </div>
              </FormErrorBoundary>

              {/* Button Section */}
              <div className="flex gap-4 mt-6">
                {!isFirstStep && (
                  <Button
                    type="button"
                    onClick={goToPreviousStep}
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-4 bg-slate-700/80 backdrop-blur-sm text-white font-semibold rounded-xl shadow-lg hover:bg-slate-600/80 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-transparent border border-slate-600/50 hover:border-slate-500/50"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                      </svg>
                      Previous
                    </span>
                  </Button>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent border border-blue-500/50 hover:border-blue-400/50 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        {isLastStep ? 'Complete Registration' : 'Continue'}
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </div>

              {/* Sign in link */}
              <div className="mt-6 text-center">
                <p className="text-slate-300 text-sm">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium underline decoration-blue-400/30 hover:decoration-blue-300/50 underline-offset-2">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignUpForm;
