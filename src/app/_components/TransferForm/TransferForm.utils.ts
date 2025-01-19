import { type TransferFormValues, TransferKeys } from "./TransferForm.consts";

export const getDefaultTransfer = (): TransferFormValues => {
  return {
    [TransferKeys.NEW_COMPANY]: "",
    [TransferKeys.NEW_MAIN_COURSE]: "",
    [TransferKeys.NEW_PRODUCT_TYPE]: "",
    [TransferKeys.PREV_COMPANY]: "",
    [TransferKeys.PREV_MAIN_COURSE]: "",
    [TransferKeys.PREV_PRODUCT_TYPE]: "",
    [TransferKeys.SUBMISSION_ID]: "",
  };
};
