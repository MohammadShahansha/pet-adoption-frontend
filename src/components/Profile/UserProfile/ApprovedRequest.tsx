import { useGetUserAdoptionRequestQuery } from "@/redux/api/allApi/adoptionRequestApi";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const ApprovedRequest = () => {
  const { data: myRequestedPet, isLoading } = useGetUserAdoptionRequestQuery(
    {}
  );
  console.log(myRequestedPet);
  let approvedPets = [];
  if (!isLoading && myRequestedPet) {
    // Filter the pets with status 'APPROVED'
    const approvedData = myRequestedPet.filter(
      (pet: any) => pet?.status === "APPROVED"
    );
    approvedPets = approvedData.map((pet: any) => ({
      id: pet?.pet?.id || Math.random(),
      ...pet.pet,
    }));
  }
  console.log(approvedPets);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, maxWidth: 150 },
    { field: "gender", headerName: "Gender", flex: 1, maxWidth: 150 },
    { field: "age", headerName: "Age", flex: 1, maxWidth: 100 },
    { field: "size", headerName: "Size", flex: 1, maxWidth: 100 },
  ];

  return (
    <Box mt="10px" sx={{ width: "100%", height: "auto" }}>
      <Box
        sx={{
          my: "20px",
          fontSize: "20px",
          fontWeight: 600,
          color: "secondary.main",
          textAlign: "center",
        }}
      >
        My Pets:
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "auto",
        }}
      >
        <Box
          sx={{
            width: { xs: { maxWidth: 500 }, md: { width: "600px" } },
            height: "auto",
          }}
        >
          <DataGrid
            rows={approvedPets}
            columns={columns}
            hideFooter
            autoHeight // Adjusts height automatically
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ApprovedRequest;
