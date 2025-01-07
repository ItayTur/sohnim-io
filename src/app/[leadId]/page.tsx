import { api, HydrateClient } from "@/trpc/server";
import { LeadDetails } from "../_components/LeadDetails/LeadDetails";
import { type Lead } from "../_components/Leads/Leads.types";

export default async function LeadDetailsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const lead = (await searchParams) as unknown as Lead;
  void api.product.getProductsByLeadId.prefetch({ leadId: Number(lead.id) });
  return (
    <HydrateClient>
      <LeadDetails lead={lead} />
    </HydrateClient>
  );
}
