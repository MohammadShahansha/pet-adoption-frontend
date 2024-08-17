"use client";
import { Box, Skeleton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllAdoptionRequestQuery } from "@/redux/api/allApi/adoptionRequestApi";
import RequestStatus from "./components/RequestStatus";

const RecentRequestTable = () => {
  const { data: adoptionReq, isLoading } = useGetAllAdoptionRequestQuery({});
  const forLoading = [1, 2, 3, 4];
  const columns: GridColDef[] = [
    {
      field: "pet.name",
      headerName: "Pets_Name",
      flex: 1,
      minWidth: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.pet?.name}</Box>;
      },
    },
    {
      field: "user.name",
      headerName: "User_Name",
      flex: 1,
      minWidth: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.user?.name}</Box>;
      },
    },
    {
      field: "user.email",
      headerName: "User_Email",
      flex: 1,
      minWidth: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.user?.email}</Box>;
      },
    },
    { field: "status", headerName: "Status", flex: 1, minWidth: 150 },
  ];
  return (
    <Box
      sx={{
        display: { md: "flex" },
        alignItems: "center",
        gap: "50px",
        mt: "40px",
      }}
    >
      <Box>
        <RequestStatus />
      </Box>
      <Box>
        {!isLoading ? (
          <Typography
            sx={{
              color: "black",
              fontWeight: 500,
            }}
          >
            Recent Adoption Request:
          </Typography>
        ) : (
          <Box>
            <Box>
              {" "}
              <Skeleton width="200px" height="25px" />
            </Box>
          </Box>
        )}
        <Box
          height={250}
          sx={{
            width: { xs: "300px", md: "600px" },
            // mx: "auto",
          }}
        >
          {!isLoading ? (
            <DataGrid
              rows={adoptionReq?.slice(0, 10)}
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
    </Box>
  );
};

export default RecentRequestTable;
