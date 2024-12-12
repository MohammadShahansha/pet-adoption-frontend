"use client";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAvailabelPetsQuery } from "@/redux/api/allApi/petsApi";

const RecentPets = () => {
  const { data: petsData, isLoading } = useAvailabelPetsQuery({});
  const rowData = petsData?.pets;
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      minWidth: 150,
    },

    {
      field: "size",
      headerName: "Size",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "breed",
      headerName: "Breed",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "species",
      headerName: "Species",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "specialNeeds",
      headerName: "Special_Needs",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "helthStatus",
      headerName: "Helth_Status",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "medicalHistory",
      headerName: "MedicalHistory",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "temperament",
      headerName: "Temperament",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 150,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // gap: "50px",
        my: "40px",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "black",
            fontWeight: 500,
          }}
        >
          Recent Pets:
        </Typography>
        <Box
          height={250}
          sx={{
            width: { xs: "320px", md: "100%" },
            // mx: "auto",
          }}
        >
          {!isLoading ? (
            <DataGrid
              rows={rowData?.slice(0, 20)}
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

export default RecentPets;
