"use client";

import { TransferKeys } from "../TransferForm/TransferForm.consts";
import {
  Button,
  CheckboxField,
  Dialog,
  DialogActions,
  Text,
  useDialog,
} from "../UI";
import { PdfThumbnail } from "./PdfThumbnail";

/**
 * IframePdfThumbnail component.
 *
 * This component renders a PDF thumbnail that, when clicked, opens a dialog containing an iframe.
 * The iframe is used to integrate with SimplePDF, displaying a PDF form from SimplePDF.
 *
 * @returns {JSX.Element} The rendered IframePdfThumbnail component.
 */
export const IframePdfThumbnail = () => {
  const { isDialogOpen, openDialog, closeDialog } = useDialog();

  return (
    <div>
      <Text>Iframe</Text>
      <PdfThumbnail onClick={openDialog} />
      <Dialog maxWidth="xl" fullWidth open={isDialogOpen}>
        <iframe
          src={`https://${process.env.NEXT_PUBLIC_SIMPLE_PDF_COMPANY_ID}.simplepdf.com/form/adadced2-781c-4f68-aadd-13b3d173d633`}
          width="100%"
          height="900px"
        />
        <DialogActions>
          <CheckboxField name={TransferKeys.IS_DEFAULT} label="Default" />
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
