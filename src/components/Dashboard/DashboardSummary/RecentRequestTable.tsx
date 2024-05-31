"use client";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllAdoptionRequestQuery } from "@/redux/api/allApi/adoptionRequestApi";
import RequestStatus from "./components/RequestStatus";

const RecentRequestTable = () => {
  const { data: adoptionReq, isLoading } = useGetAllAdoptionRequestQuery({});
  const columns: GridColDef[] = [
    {
      field: "pet.name",
      headerName: "Pets_Name",
      width: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.pet?.name}</Box>;
      },
    },
    {
      field: "user.name",
      headerName: "User_Name",
      width: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.user?.name}</Box>;
      },
    },
    {
      field: "user.email",
      headerName: "User_Email",
      width: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.user?.email}</Box>;
      },
    },
    { field: "status", headerName: "Status", width: 150 },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "50px",
        mt: "40px",
      }}
    >
      <Box>
        <Typography fontWeight={400} color="black" ml={5} mt={0}>
          Request Status:
        </Typography>
        <RequestStatus />
      </Box>
      <Box>
        <Typography
          sx={{
            color: "black",
            fontWeight: 400,
          }}
        >
          Recent Adoption Request:
        </Typography>
        <Box width={600} height={250}>
          {!isLoading ? (
            <DataGrid
              rows={adoptionReq.slice(0, 10)}
              columns={columns}
              hideFooter
            />
          ) : (
            <h1>Loading....</h1>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default RecentRequestTable;
