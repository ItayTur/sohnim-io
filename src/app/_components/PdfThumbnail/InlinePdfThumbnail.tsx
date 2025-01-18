"use client";

import { type EmbedEvent, EmbedPDF } from "@simplepdf/react-embed-pdf";
import { useFormContext } from "react-hook-form";
import {
  type TransferFormValues,
  TransferKeys,
} from "../TransferForm/TransferForm.consts";
import {
  Button,
  CheckboxField,
  Dialog,
  DialogActions,
  DialogContent,
  Text,
  useDialog,
} from "../UI";
import { PdfThumbnail } from "./PdfThumbnail";

type InlinePdfThumbnailProps = {
  title: string;
  url: string;
};
/**
 * InlinePdfThumbnail component allows displaying any PDF that is hosted on a server.
 * It uses a thumbnail to represent the PDF and opens a dialog with an embedded PDF viewer when clicked.
 *
 * @param {string} title - The title of the PDF.
 * @param {string} url - The URL of the PDF to display.
 */
export const InlinePdfThumbnail = ({ title, url }: InlinePdfThumbnailProps) => {
  const { isDialogOpen, openDialog, closeDialog } = useDialog();
  const { setValue } = useFormContext<TransferFormValues>();

  const onSubmit = (e: EmbedEvent) => {
    if (e.type === "SUBMISSION_SENT") {
      setValue(TransferKeys.SUBMISSION_ID, e.data.submission_id);
      alert("Submission saved!");
      closeDialog();
    }
  };

  return (
    <div>
      <Text>{title}</Text>
      <PdfThumbnail onClick={openDialog} />
      <Dialog maxWidth="xl" fullWidth open={isDialogOpen}>
        <DialogContent dividers>
          <EmbedPDF
            mode="inline"
            companyIdentifier={process.env.NEXT_PUBLIC_SIMPLE_PDF_COMPANY_ID}
            documentURL={url}
            style={{ width: "100%", height: "900px" }}
            onEmbedEvent={onSubmit}
          />
        </DialogContent>
        <DialogActions>
          <CheckboxField name={TransferKeys.IS_DEFAULT} label="Default" />
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
