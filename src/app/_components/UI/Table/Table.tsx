import { DataGrid, type DataGridProps } from "@mui/x-data-grid";

type TableProps = DataGridProps & { clickableRow?: boolean };

export const Table = ({ clickableRow, ...props }: TableProps) => {
  return (
    <DataGrid
      sx={{
        color: "var(--foreground-primary)",
        boxShadow: 2,
        border: 2,
        borderColor: "var(--accent-primary-light)",
        "& .MuiButtonBase-root": {
          color: "var(--foreground-primary) !important",
        },
        "& .MuiDataGrid-row:hover": clickableRow
          ? {
              cursor: "pointer",
              backgroundColor: "secondary.light",
            }
          : undefined,
      }}
      {...props}
    />
  );
};
