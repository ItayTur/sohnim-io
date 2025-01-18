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

  return (
    <div>
      <Text>Inline</Text>
      <PdfThumbnail onClick={openDialog} />
      <Dialog maxWidth="xl" fullWidth open={isDialogOpen}>
        <DialogContent dividers>
          <EmbedPDF
            mode="inline"
            companyIdentifier={process.env.NEXT_PUBLIC_SIMPLE_PDF_COMPANY_ID}
            documentURL={
              "https://www.harel-group.co.il/long-term-savings/pension/join/doclib/%D7%98%D7%95%D7%A4%D7%A1%20%D7%91%D7%A7%D7%A9%D7%AA%20%D7%94%D7%A2%D7%91%D7%A8%D7%94%20%D7%9C%D7%A7%D7%95%D7%A4%D7%AA%20%D7%92%D7%9E%D7%9C%20%D7%9E%D7%A9%D7%9C%D7%9E%D7%AA%20%D7%9C%D7%A7%D7%A6%D7%91%D7%94%20-%20%D7%94%D7%A8%D7%90%D7%9C%20%D7%A4%D7%A0%D7%A1%D7%99%D7%94.pdf"
            }
            style={{ width: "100%", height: "900px" }}
            onEmbedEvent={(e) => {
              if (e.type === "SUBMISSION_SENT") {
                closeDialog();
                alert("Submission saved!");
              }
            }}
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
