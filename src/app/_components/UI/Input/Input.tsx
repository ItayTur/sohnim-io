import MuiInput, { type TextFieldProps } from "@mui/material/TextField";

export type InputProps = TextFieldProps;

export const Input = (props: InputProps) => {
  return <MuiInput {...props} />;
};
