"use client";
import { useGetAllUsersQuery } from "@/redux/api/allApi/usersApi";
import { Box, Skeleton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import StatusPieChart from "./components/StatusPieChart";

const RecentRegistrationTable = () => {
  const { data: userData, isLoading } = useGetAllUsersQuery({});
  const forLoading = [1, 2, 3, 4];
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <Box>
        {!isLoading ? (
          <Typography
            sx={{
              color: "black",
              fontWeight: 400,
            }}
          >
            Recent User Registration:
          </Typography>
        ) : (
          <Box>
            {" "}
            <Skeleton width="200px" height="25px" />
          </Box>
        )}
        <Box width={600} height={250}>
          {!isLoading ? (
            <DataGrid
              rows={userData?.slice(0, 10)}
              columns={columns}
              hideFooter
            />
          ) : (
            <Box>
              {forLoading.map((item: number) => {
                return (
                  <Box key={item}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Skeleton sx={{ width: "200px", height: "70px" }} />
                      <Skeleton sx={{ width: "200px", height: "70px" }} />
                      <Skeleton sx={{ width: "200px", height: "70px" }} />
                    </Box>
                  </Box>
                );
              })}
            </Box>
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
