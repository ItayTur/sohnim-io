"use client";

import { Controller, useFormContext } from "react-hook-form";
import { type InputProps, Input } from "../Input/Input";

type InputFieldProps = InputProps & { name: string };

export const InputField: React.FC<InputFieldProps> = ({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input helperText={fieldState.error?.message} {...field} {...props} />
      )}
    />
  );
};
