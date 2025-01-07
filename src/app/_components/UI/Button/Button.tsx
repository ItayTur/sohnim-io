import MuiButton, { type ButtonProps } from "@mui/material/Button";

export const Button = (props: ButtonProps) => {
  const { variant = "contained", ...rest } = props;
  return <MuiButton variant={variant} {...rest} />;
};
