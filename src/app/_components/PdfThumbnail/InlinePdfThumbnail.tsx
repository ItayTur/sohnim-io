"use client";

import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import { TransferKeys } from "../TransferForm/TransferForm.consts";
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

/**
 * InlinePdfThumbnail component allows displaying any PDF that is hosted on a server.
 * It uses a thumbnail to represent the PDF and opens a dialog with an embedded PDF viewer when clicked.
 */
export const InlinePdfThumbnail = () => {
  const { isDialogOpen, openDialog, closeDialog } = useDialog();
  console.log({ isDialogOpen });
  return (
    <div>
      <Text>Inline</Text>
      <PdfThumbnail onClick={openDialog} />
      <Dialog maxWidth="xl" fullWidth open={isDialogOpen}>
        <DialogContent>
          <EmbedPDF
            mode="inline"
            companyIdentifier={process.env.NEXT_PUBLIC_SIMPLE_PDF_COMPANY_ID}
            documentURL="https://pdfobject.com/pdf/sample.pdf"
            style={{ width: "100%", height: "900px" }}
            onEmbedEvent={(e) => {
              if (e.type === "SUBMISSION_SENT") {
                closeDialog();
                alert("Submission saved!");
              }
            }}
          />
          <div>hello</div>
        </DialogContent>
        <DialogActions>
          <CheckboxField name={TransferKeys.IS_DEFAULT} label="Default" />
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
