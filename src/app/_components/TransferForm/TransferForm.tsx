"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Divider } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import { InlinePdfThumbnail } from "../PdfThumbnail/InlinePdfThumbnail";
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
      <InlinePdfThumbnail
        title="New"
        url="https://xfuv7323.simplepdf.com/form/adadced2-781c-4f68-aadd-13b3d173d633"
      />
      <InlinePdfThumbnail
        title="Template"
        url="https://www.harel-group.co.il/long-term-savings/pension/join/doclib/%D7%98%D7%95%D7%A4%D7%A1%20%D7%91%D7%A7%D7%A9%D7%AA%20%D7%94%D7%A2%D7%91%D7%A8%D7%94%20%D7%9C%D7%A7%D7%95%D7%A4%D7%AA%20%D7%92%D7%9E%D7%9C%20%D7%9E%D7%A9%D7%9C%D7%9E%D7%AA%20%D7%9C%D7%A7%D7%A6%D7%91%D7%94%20-%20%D7%94%D7%A8%D7%90%D7%9C%20%D7%A4%D7%A0%D7%A1%D7%99%D7%94.pdf"
      />
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
