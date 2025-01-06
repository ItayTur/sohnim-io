import { LeadDetailsView } from "../../LeadDetails/LeadDetails";
import { type Lead } from "../../Leads/Leads.types";
import { TransferButton } from "../../TransferButton/TransferButton";
import { Text } from "../../UI";
import { ProductCategoriesTable } from "../ProductCategoriesTable/ProductCategoriesTable";

export const ProductCategories = ({ lead }: { lead: Lead }) => {
  return (
    <>
      <Text variant="h2" fontWeight={800} aria-label="product categories table">
        Lead Details
      </Text>
      <TransferButton />
      <LeadDetailsView lead={lead} />
      <ProductCategoriesTable leadId={lead.id} />
    </>
  );
};
