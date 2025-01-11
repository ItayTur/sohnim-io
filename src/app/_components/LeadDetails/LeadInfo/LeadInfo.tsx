import { api } from "@/trpc/server";
import { LeadDetailsCard } from "../../LeadDetailsCard/LeadDetailsCard";
import { type Lead } from "../../Leads/Leads.types";
import { ProductCategoriesTable } from "../ProductCategoriesTable/ProductCategoriesTable";

export const LeadInfo = async ({
  searchParams,
}: {
  searchParams: Promise<Lead>;
}) => {
  const lead = await searchParams;
  void api.product.getProductsByLeadId.prefetch({ leadId: Number(lead.id) });

  return (
    <>
      <LeadDetailsCard lead={lead} />
      <ProductCategoriesTable leadId={lead.id} />
    </>
  );
};
