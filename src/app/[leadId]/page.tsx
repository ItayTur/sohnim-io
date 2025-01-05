import { api, HydrateClient } from "@/trpc/server";
import { type Lead } from "../_components/Leads/Leads.types";
import { ProductCategories } from "../_components/Products/ProductCategories/ProductCategories";

export default async function LeadProducts({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const lead = (await searchParams) as unknown as Lead;
  void api.product.getProductsByLeadId.prefetch({ leadId: Number(lead.id) });
  return (
    <HydrateClient>
      <ProductCategories lead={lead} />
    </HydrateClient>
  );
}
