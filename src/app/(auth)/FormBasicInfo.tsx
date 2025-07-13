import FormInput from '@/components/client/form/input'
import { cn } from '@/lib/utils';
import React from 'react'
import z from 'zod';

export const basicInfoSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});


type FormBasicInfoProps = {
    className?: string;
}
const FormBasicInfo = ({ className }: FormBasicInfoProps) => {



    return (
        <>
            <div className={cn('mt-4', className)}>
                <FormInput name='email' label='Email' type='email' placeholder='Enter your email' className='rounded-md p-2 border-white border-2' />
            </div>
            <div className={cn('mt-4', className)}>
                <FormInput name='password' label='Password' type='password' placeholder='Enter your password' className='rounded-md p-2 border-white border-2' />
            </div>
        </>
    )
}

export default FormBasicInfo
