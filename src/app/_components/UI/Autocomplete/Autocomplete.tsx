import MuiAutocomplete, {
  type AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material/Autocomplete";
import { Input } from "../Input/Input";

export type AutocompleteProps<T> = Omit<
  MuiAutocompleteProps<
    T,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  >,
  "renderInput"
> & {
  label: string;
};

export const Autocomplete = <T,>({ label, ...props }: AutocompleteProps<T>) => {
  return (
    <MuiAutocomplete
      {...props}
      renderInput={(params) => <Input {...params} label={label} />}
    />
  );
};
