import type { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";
import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

export type CheckboxProps = MuiCheckboxProps & {
  label: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />
  );
};
