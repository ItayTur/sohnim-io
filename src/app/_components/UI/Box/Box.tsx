import MUIBox, { type BoxProps as MUIBoxProps } from "@mui/material/Box";

export const Box = (props: MUIBoxProps) => {
  return <MUIBox {...props}>{props.children}</MUIBox>;
};
