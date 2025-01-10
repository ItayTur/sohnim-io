"use client";

import { TransferForm } from "../TransferForm/TransferForm";
import { Button, Dialog, useDialog } from "../UI";

export const TransferButton = () => {
  const { openDialog, isDialogOpen, closeDialog } = useDialog();

  const onTransfer = () => {
    openDialog();
  };

  return (
    <>
      <Button onClick={onTransfer}>Transfer</Button>
      <Dialog fullWidth maxWidth="md" open={isDialogOpen} onClose={closeDialog}>
        <TransferForm onClose={closeDialog} />
      </Dialog>
    </>
  );
};
