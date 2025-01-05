import MuiCardContent, {
  type CardContentProps,
} from "@mui/material/CardContent";

export const CardContent = ({ children, ...props }: CardContentProps) => {
  return <MuiCardContent {...props}>{children}</MuiCardContent>;
};
