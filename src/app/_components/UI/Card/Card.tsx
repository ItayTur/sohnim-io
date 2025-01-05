import MuiCard, { type CardProps as MuiCardProps } from "@mui/material/Card";

type CardProps = MuiCardProps;

export const Card = (props: CardProps) => {
  return <MuiCard {...props} />;
};
