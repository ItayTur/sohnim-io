import { HydrateClient } from "@/trpc/server";
import { LeadDetails } from "../_components/LeadDetails/LeadDetails";
import { type Lead } from "../_components/Leads/Leads.types";

export default async function LeadDetailsPage({
  searchParams,
}: {
  searchParams: Promise<Lead>;
}) {
  return (
    <HydrateClient>
      <LeadDetails searchParams={searchParams} />
    </HydrateClient>
  );
}
