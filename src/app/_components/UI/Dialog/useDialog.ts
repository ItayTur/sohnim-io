"use client";

import { useState } from "react";

export const useDialog = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const toggleDialog = () => {
    setDialogOpen((prevState) => !prevState);
  };

  return {
    isDialogOpen,
    openDialog,
    closeDialog,
    toggleDialog,
  };
};
