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
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "center" },
        px: 2,
        gap: "50px",
        mt: "40px",
        width: "100%",
      }}
    >
      <Box
        flexGrow={1}
        sx={{ width: "100%", maxWidth: { md: "40%" }, mt: { xs: 2, md: 0 } }}
      >
        <RequestStatus />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          {!isLoading ? (
            <Typography
              sx={{
                color: "black",
                fontWeight: 500,
                // mb: 2,
              }}
            >
              Recent Adoption Request:
            </Typography>
          ) : (
            <Skeleton width="200px" height="25px" />
          )}
          <Box
            height={250}
            sx={{
              width: { xs: "320px", md: "100%" },
            }}
          >
            {!isLoading ? (
              <DataGrid
                rows={adoptionReq?.slice(0, 10)}
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
    </Box>
  );
};

export default RecentRequestTable;
