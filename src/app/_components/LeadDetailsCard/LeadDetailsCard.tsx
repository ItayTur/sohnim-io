import { type Lead } from "../Leads/Leads.types";
import { Box, Card, CardContent, Text } from "../UI";

type LeadDetailsProps = {
  lead: Lead;
};

export const LeadDetailsCard = ({ lead }: LeadDetailsProps) => {
  return (
    <Card sx={{ maxWidth: 800, boxShadow: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Text variant="body1">
            <strong>First Name:</strong> {lead.firstName}
          </Text>
          <Text variant="body1">
            <strong>Last Name:</strong> {lead.lastName}
          </Text>
          <Text variant="body1">
            <strong>Age:</strong> {lead.age}
          </Text>
          <Text variant="body1">
            <strong>Email:</strong> {lead.email}
          </Text>
        </Box>
      </CardContent>
    </Card>
  );
};
