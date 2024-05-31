"use client";
import { useGetAllUsersQuery } from "@/redux/api/allApi/usersApi";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import StatusPieChart from "./components/StatusPieChart";

const RecentRegistrationTable = () => {
  const { data: userData, isLoading } = useGetAllUsersQuery({});
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "black",
            fontWeight: 400,
          }}
        >
          Recent User Registration:
        </Typography>
        <Box width={600} height={250}>
          {!isLoading ? (
            <DataGrid
              rows={userData.slice(0, 5)}
              columns={columns}
              hideFooter
            />
          ) : (
            <h1>Loading....</h1>
          )}
        </Box>
      </Box>
      <Box>
        <StatusPieChart />
      </Box>
    </Box>
  );
};

export default RecentRegistrationTable;
