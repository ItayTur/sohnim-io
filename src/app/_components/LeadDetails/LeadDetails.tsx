import { Suspense } from "react";
import { type Lead } from "../Leads/Leads.types";
import { TransferButton } from "../TransferButton/TransferButton";
import { Text } from "../UI";
import { LeadInfo } from "./LeadInfo/LeadInfo";

export const LeadDetails = ({
  searchParams,
}: {
  searchParams: Promise<Lead>;
}) => {
  return (
    <>
      <Text variant="h2" fontWeight={800} aria-label="product categories table">
        Lead Details
      </Text>
      <TransferButton />
      <Suspense fallback="loading...">
        <LeadInfo searchParams={searchParams} />
      </Suspense>
    </>
  );
};
