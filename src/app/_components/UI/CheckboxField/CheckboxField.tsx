"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Checkbox, type CheckboxProps } from "../Checkbox/Checkbox";
import { type FieldProps } from "../ui.types";

type CheckboxFieldProps = FieldProps<CheckboxProps>;

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Checkbox
          {...field}
          checked={field.value as boolean}
          onChange={(e) => field.onChange(e.target.checked)}
          label={label}
        />
      )}
    />
  );
};
