'use client';

import { Button } from '@/components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';
import FormBasicInfo, { basicInfoSchema } from '../FormBasicInfo';

const loginFormSchema = z.object({
  ...basicInfoSchema.shape,
});
type FormTypes = z.infer<typeof loginFormSchema>;

const Page = () => {
  const rfhMethods = useForm<FormTypes>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { handleSubmit } = rfhMethods;
  const onLoginFormSubmit = (data: FormTypes) => {
    console.log('Form submitted:', data);
  };
  return (
    <div className="login-form-container w-full min-h-screen flex items-center justify-center flex-col bg-gradient-to-br from-gray-900 via-blue-950 to-black">
      <div className="text-white mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-center tracking-tight">Welcome Back</h1>
        <p className="text-center mt-3 text-gray-300 text-sm md:text-base">Enter your credentials to access your account.</p>
      </div>

      <FormProvider {...rfhMethods}>
        <form onSubmit={handleSubmit(onLoginFormSubmit)} className="max-w-md w-full p-8 bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 transition-all duration-300 hover:shadow-2xl">
          <FormBasicInfo className="space-y-6" />
          <Button
            type="submit"
            className="mt-6 w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-md shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Sign In
          </Button>
          <p className="mt-5 text-gray-300 text-center text-sm">
            Don't have an account?{' '}
            <a href="/sign-up" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium">
              Create Account
            </a>
          </p>
        </form>
      </FormProvider>
    </div>
  );
};

export default Page;
