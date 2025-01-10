"use client";

import { type SxProps } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { Controller, useFormContext } from "react-hook-form";
import {
  Autocomplete,
  type AutocompleteProps,
} from "../Autocomplete/Autocomplete";
import { type FieldProps } from "../ui.types";

type AutocompleteFieldProps<T> = FieldProps<AutocompleteProps<T>> & {
  autocompleteSx?: SxProps;
};

export const AutocompleteField = <T,>({
  name,
  sx,
  autocompleteSx,
  ...props
}: AutocompleteFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <FormControl sx={sx} error={Boolean(fieldState.error)}>
            <Autocomplete sx={autocompleteSx} {...field} {...props} />
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};
