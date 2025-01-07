"use client";

import { Controller, FormProvider, useForm } from "react-hook-form";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputField,
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
          <Controller
            name="amount"
            defaultValue=""
            render={({ field }) => (
              <InputField {...field} label="Amount" fullWidth margin="normal" />
            )}
          />
          <Controller
            name="recipient"
            defaultValue=""
            render={({ field }) => (
              <InputField
                {...field}
                label="Recipient"
                fullWidth
                margin="normal"
              />
            )}
          />
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
