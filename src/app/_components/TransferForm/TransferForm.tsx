"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  AutocompleteField,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "../UI";
import { TransferKeys, transferSchema } from "./TransferForm.consts";

type TransferFormProps = {
  onClose: () => void;
};

export const TransferForm = ({ onClose }: TransferFormProps) => {
  const form = useForm({
    resolver: zodResolver(transferSchema),
  });

  const onSubmit = () => {
    // console.log(data);
  };

  return (
    <FormProvider {...form}>
      <DialogTitle>Transfer Form</DialogTitle>
      <DialogContent dividers>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Stack width={"100%"} minWidth={500} direction="row" spacing={2}>
            <AutocompleteField
              options={[]}
              name={TransferKeys.NEW_PRODUCT_TYPE}
              label="New Product Type"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
            <AutocompleteField
              options={[]}
              name={TransferKeys.PREV_PRODUCT_TYPE}
              label="Previous Product Type"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
          </Stack>
          <Stack width={"100%"} minWidth={500} direction="row" spacing={2}>
            <AutocompleteField
              options={[]}
              name={TransferKeys.NEW_COMPANY}
              label="New Company"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
            <AutocompleteField
              options={[]}
              name={TransferKeys.PREV_COMPANY}
              label="Previous Company"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
          </Stack>
          <Stack width={"100%"} minWidth={500} direction="row" spacing={2}>
            <AutocompleteField
              options={[]}
              name={TransferKeys.NEW_MAIN_COURSE}
              label="New Main Course"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
            <AutocompleteField
              options={[]}
              name={TransferKeys.PREV_MAIN_COURSE}
              label="Previous Main Course"
              fullWidth
              sx={{ flexGrow: 1 }}
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" color="primary">
          Submit
        </Button>
      </DialogActions>
    </FormProvider>
  );
};
