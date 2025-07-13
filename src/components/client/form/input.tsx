import { Input } from '@/components/Input';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  name?: string;
  label?: string;
  description?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ name, label, description, ...props }: InputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name || ''}
      render={({ field }) => (
        <FormItem className="w-full flex flex-col">
          <FormLabel>{label}</FormLabel>
          <FormControl className={cn('px-1 border-2 w-full ', props.className)}>
            <Input {...field} {...props} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  );
};

export default FormInput;
