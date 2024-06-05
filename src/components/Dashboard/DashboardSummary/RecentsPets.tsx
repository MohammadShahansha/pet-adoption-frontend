"use client";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAvailabelPetsQuery } from "@/redux/api/allApi/petsApi";

const RecentPets = () => {
  const { data: petsData, isLoading } = useAvailabelPetsQuery({});
  const rowData = petsData?.pets;
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      width: 150,
    },

    {
      field: "size",
      headerName: "Size",
      width: 150,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "breed",
      headerName: "Breed",
      width: 150,
    },
    {
      field: "species",
      headerName: "Species",
      width: 150,
    },
    {
      field: "specialNeeds",
      headerName: "Special_Needs",
      width: 150,
    },
    {
      field: "helthStatus",
      headerName: "Helth_Status",
      width: 150,
    },
    {
      field: "medicalHistory",
      headerName: "MedicalHistory",
      width: 150,
    },
    {
      field: "temperament",
      headerName: "Temperament",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "50px",
        my: "40px",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "black",
            fontWeight: 400,
          }}
        >
          Recent Pets:
        </Typography>
        <Box width={800} height={300}>
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
