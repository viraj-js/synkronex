import React from 'react';
import z from 'zod';
import { cn } from '@/lib/utils';
import FormInput from '@/components/client/form/input';

export const FormProfessionalInfoSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
  yearsOfExperience: z.number().min(0, 'Years of experience must be a positive number').optional(),
});

const FormProfessionalInfo = () => {
  return (
    <div>
      <div className={cn('mt-4')}>
        <FormInput name="companyName" label="Company Name" type="text" placeholder="Enter your company name" className="rounded-md p-2 border-white border-2" />
      </div>
      <div className={cn('mt-4')}>
        <FormInput name="jobTitle" label="Job Title" type="text" placeholder="Enter your job title" className="rounded-md p-2 border-white border-2" />
      </div>
    </div>
  );
};

export default FormProfessionalInfo;
