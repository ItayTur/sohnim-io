"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Divider } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { IframePdfThumbnail } from "../PdfThumbnail/IframePdfThumbnail";

import { EmbedPdfThumbnail } from "../PdfThumbnail/EmbedPdfThumbnail";
import {
  AutocompleteField,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "../UI";
import {
  type TransferFormValues,
  TransferKeys,
  transferSchema,
} from "./TransferForm.consts";
import { getDefaultTransfer } from "./TransferForm.utils";

type TransferFormProps = {
  onClose: () => void;
};

export const TransferForm = ({ onClose }: TransferFormProps) => {
  const form = useForm<TransferFormValues>({
    resolver: zodResolver(transferSchema),
    defaultValues: getDefaultTransfer(),
  });

  const onSubmit = async (values: TransferFormValues) => {
    console.log(values);
  };

  const isAllFieldsSelected = true;
  const files = isAllFieldsSelected ? (
    <Stack direction="row" spacing={2}>
      <EmbedPdfThumbnail />
      <IframePdfThumbnail />
    </Stack>
  ) : null;

  return (
    <FormProvider {...form}>
      <DialogTitle>Transfer Form</DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        dividers
      >
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
        <Divider />
        {files}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="primary" onClick={form.handleSubmit(onSubmit)}>
          Transfer
        </Button>
      </DialogActions>
    </FormProvider>
  );
};
