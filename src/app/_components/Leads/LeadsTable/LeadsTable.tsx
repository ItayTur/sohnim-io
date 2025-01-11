"use client";

import { api } from "@/trpc/react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { Table } from "../../UI";
import { type Lead } from "../Leads.types";
import { columns } from "./LeadsTable.columns";

export const LeadsTable = () => {
  const { data: leads } = api.lead.getLeads.useQuery();
  const router = useRouter();

  const handleRowClick = async ({ row: lead }: { row: Lead }) => {
    router.push(`/${lead.id}?${qs.stringify(lead)}`);
  };

  return (
    <Box
      sx={{ height: { xs: 300, sm: 400 }, width: "100%", overflowX: "auto" }}
    >
      <Table
        rows={leads}
        columns={columns}
        onRowClick={handleRowClick}
        initialState={{
          sorting: {
            sortModel: [
              {
                field: "id",
                sort: "desc",
              },
            ],
          },
        }}
        clickableRow
      />
    </Box>
  );
};
