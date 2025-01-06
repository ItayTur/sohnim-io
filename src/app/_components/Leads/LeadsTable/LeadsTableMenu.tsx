"use client";

import Link from "next/link";
import { useDialog } from "../../UI/Dialog/useDialog";
import { MenuItem } from "../../UI/Menu/MenuItem";
import { ThreeDotsMenu } from "../../UI/ThreeDotsMenu/ThreeDotsMenu";
import { LeadDialog } from "../LeadDialog/LeadDialog";
import { type Lead } from "../Leads.types";

type LeadTableMenuProps = {
  lead: Lead;
};

export const LeadsTableMenu = ({ lead }: LeadTableMenuProps) => {
  const {
    isDialogOpen: isleadFormOpen,
    closeDialog: closeLeadForm,
    openDialog: openLeadForm,
  } = useDialog();

  const onEdit = () => {
    openLeadForm();
  };

  return (
    <>
      <ThreeDotsMenu>
        <MenuItem onClick={onEdit}>ערוך</MenuItem>
        <MenuItem>
          <Link href={{ pathname: `/${lead.id}`, query: lead }}>מוצרים</Link>
        </MenuItem>
      </ThreeDotsMenu>
      <LeadDialog open={isleadFormOpen} onClose={closeLeadForm} lead={lead} />
    </>
  );
};
