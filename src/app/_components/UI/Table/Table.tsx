import { DataGrid, type DataGridProps } from "@mui/x-data-grid";

export const Table = (props: DataGridProps) => {
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
      }}
      {...props}
    />
  );
};
