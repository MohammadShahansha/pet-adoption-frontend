"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import CreatePetModal from "./components/CreatePetModal";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useDeletePetMutation,
  useGetAllpetsQuery,
} from "@/redux/api/allApi/petsApi";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";

const PetManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllpetsQuery({});
  const [deletePet] = useDeletePetMutation();
  const rowData = data?.data;

  const handleDeletRow = async (id: string) => {
    console.log(id);
    try {
      const res = await deletePet(id).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Delete pets successfully");
      }
    } catch (err) {
      toast.error("Somthing went wrong");
    }
  };
  const handleUpdateRow = async (id: string) => {
    // console.log(id);
  };
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
      field: "action",
      headerName: "Actions",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <>
            <IconButton
              onClick={() => handleUpdateRow(row.id)}
              aria-label="update"
              defaultValue={row}
              sx={{
                backgroundColor: "primary.main",
                ":hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              <EditIcon
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
            <IconButton
              onClick={() => handleDeletRow(row.id)}
              aria-label="delete"
              sx={{
                mx: "20px",
                backgroundColor: "red",
                ":hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              <DeleteIcon
                sx={{
                  color: "white",
                }}
              />
            </IconButton>

            <Button
              sx={{
                ":hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              See Detail
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Pet</Button>
        <CreatePetModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField placeholder="search pet" size="small" />
      </Stack>
      <Box mt={4}>
        {!isLoading ? (
          <DataGrid
            rows={rowData}
            columns={columns}
            // initialState={{
            //   pagination: {
            //     paginationModel: { page: 0, pageSize: 5 },
            //   },
            // }}
            // pageSizeOptions={[5, 10]}
            // checkboxSelection
            hideFooter
          />
        ) : (
          <h1>Loading....</h1>
        )}
      </Box>
    </Box>
  );
};

export default PetManagement;
