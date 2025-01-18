import { z } from "zod";

export enum TransferKeys {
  NEW_PRODUCT_TYPE = "newProductType",
  PREV_PRODUCT_TYPE = "prevProductType",
  NEW_COMPANY = "newCompany",
  PREV_COMPANY = "prevCompany",
  NEW_MAIN_COURSE = "newMainCourse",
  PREV_MAIN_COURSE = "prevMainCourse",
  IS_DEFAULT = "isDefault",
  SUBMISSION_ID = "submissionId",
}

export const transferSchema = z.object({
  [TransferKeys.NEW_PRODUCT_TYPE]: z.string(),
  [TransferKeys.PREV_PRODUCT_TYPE]: z.string(),
  [TransferKeys.NEW_COMPANY]: z.string(),
  [TransferKeys.PREV_COMPANY]: z.string(),
  [TransferKeys.NEW_MAIN_COURSE]: z.string(),
  [TransferKeys.PREV_MAIN_COURSE]: z.string(),
  [TransferKeys.IS_DEFAULT]: z.boolean(),
  [TransferKeys.SUBMISSION_ID]: z.string(),
});

export type TransferFormValues = z.infer<typeof transferSchema>;
