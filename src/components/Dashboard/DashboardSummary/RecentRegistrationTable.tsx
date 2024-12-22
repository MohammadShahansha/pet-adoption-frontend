"use client";
import { useGetAllUsersQuery } from "@/redux/api/allApi/usersApi";
import { Box, Skeleton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import StatusPieChart from "./components/StatusPieChart";

const RecentRegistrationTable = () => {
  const { data: userData, isLoading } = useGetAllUsersQuery({});
  const forLoading = [1, 2, 3, 4];
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 200 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 200 },
    { field: "status", headerName: "Status", flex: 1, minWidth: 200 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "center" },
        px: 2,
        mx: "auto",
        justifyContent: "space-evenly",
        gap: 4,
        width: "100%",
      }}
    >
      {/* Registration Table */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        <Box
          flexGrow={1}
          sx={{
            width: "100%",

            mx: "auto",
          }}
        >
          {!isLoading ? (
            <Typography sx={{ color: "black", fontWeight: 500 }}>
              Recent User Registration:
            </Typography>
          ) : (
            <Skeleton width="200px" height="25px" />
          )}

          <Box
            sx={{
              width: { xs: "320px", md: "100%" },
              height: 250,
            }}
          >
            {!isLoading ? (
              <DataGrid
                rows={userData?.slice(0, 10) || []}
                columns={columns}
                hideFooter
              />
            ) : (
              forLoading.map((item) => (
                <Box key={item} display="flex" alignItems="center" gap={2}>
                  <Skeleton sx={{ width: "100%", height: "70px" }} />
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Box>

      {/* Status Pie Chart */}
      <Box
        flexGrow={1}
        sx={{
          width: "100%",
          maxWidth: { md: "40%" },
          mt: { xs: 2, md: 0 }, // Adds margin on top for small screens
        }}
      >
        <StatusPieChart />
      </Box>
    </Box>
  );
};

export default RecentRegistrationTable;
