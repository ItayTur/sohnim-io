import { REQUIRED_MESSAGE } from "@/consts";
import { z } from "zod";

export enum TransferKeys {
  NEW_PRODUCT_TYPE = "newProductType",
  PREV_PRODUCT_TYPE = "prevProductType",
  NEW_COMPANY = "newCompany",
  PREV_COMPANY = "prevCompany",
  NEW_MAIN_COURSE = "newMainCourse",
  PREV_MAIN_COURSE = "prevMainCourse",
  SUBMISSION_ID = "submissionId",
}

export const transferSchema = z.object({
  [TransferKeys.NEW_PRODUCT_TYPE]: z.string().nonempty(REQUIRED_MESSAGE),
  [TransferKeys.PREV_PRODUCT_TYPE]: z.string().nonempty(REQUIRED_MESSAGE),
  [TransferKeys.NEW_COMPANY]: z.string().nonempty(REQUIRED_MESSAGE),
  [TransferKeys.PREV_COMPANY]: z.string().nonempty(REQUIRED_MESSAGE),
  [TransferKeys.NEW_MAIN_COURSE]: z.string().nonempty(REQUIRED_MESSAGE),
  [TransferKeys.PREV_MAIN_COURSE]: z.string().nonempty(REQUIRED_MESSAGE),
  [TransferKeys.SUBMISSION_ID]: z.string().nonempty(REQUIRED_MESSAGE),
});

export type TransferFormValues = z.infer<typeof transferSchema>;
