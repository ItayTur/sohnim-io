import { Stack as MUIStack, type StackProps } from "@mui/material";

export const Stack = ({ useFlexGap = true, ...props }: StackProps) => {
  return <MUIStack useFlexGap={useFlexGap} {...props} />;
};
