import { z } from "zod";

export enum TransferKeys {
  NEW_PRODUCT_TYPE = "newProductType",
  PREV_PRODUCT_TYPE = "prevProductType",
  NEW_COMPANY = "newCompany",
  PREV_COMPANY = "prevCompany",
  NEW_MAIN_COURSE = "newMainCourse",
  PREV_MAIN_COURSE = "prevMainCourse",
}

export const transferSchema = z.object({
  [TransferKeys.NEW_PRODUCT_TYPE]: z.string(),
  [TransferKeys.PREV_PRODUCT_TYPE]: z.string(),
  [TransferKeys.NEW_COMPANY]: z.string(),
  [TransferKeys.PREV_COMPANY]: z.string(),
  [TransferKeys.NEW_MAIN_COURSE]: z.string(),
  [TransferKeys.PREV_MAIN_COURSE]: z.string(),
});
