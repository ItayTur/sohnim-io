"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  AutocompleteField,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "../UI";

type TransferDialogProps = {
  onClose: () => void;
};

export const TransferDialog = ({ onClose }: TransferDialogProps) => {
  const form = useForm();

  const onSubmit = () => {
    // console.log(data);
  };

  return (
    <FormProvider {...form}>
      <DialogTitle>Transfer Form</DialogTitle>
      <DialogContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Stack width={"100%"} minWidth={500} direction="row" spacing={2}>
            <AutocompleteField
              options={[]}
              name="row1_col1"
              label="Row 1, Col 1"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
            <AutocompleteField
              options={[]}
              name="row1_col2"
              label="Row 1, Col 2"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
          </Stack>
          <Stack width={"100%"} minWidth={500} direction="row" spacing={2}>
            <AutocompleteField
              options={[]}
              name="row2_col1"
              label="Row 2, Col 1"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
            <AutocompleteField
              options={[]}
              name="row2_col2"
              label="Row 2, Col 2"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
          </Stack>
          <Stack width={"100%"} minWidth={500} direction="row" spacing={2}>
            <AutocompleteField
              options={[]}
              name="row3_col1"
              label="Row 3, Col 1"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
            <AutocompleteField
              options={[]}
              name="row3_col2"
              label="Row 3, Col 2"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
          </Stack>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </FormProvider>
  );
};
