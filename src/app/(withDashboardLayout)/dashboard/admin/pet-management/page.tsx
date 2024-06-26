"use client";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
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
import UpdatePets from "./components/UpdatePets";
import DetailsPet from "./components/DetailsPet";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";

const PetManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);

  const [selectedPet, setSelectedPet] = useState<any>(null);
  const [selectRowToSee, setSelectRowToSee] = useState<any>(null);

  const { data, isLoading } = useGetAllpetsQuery({});
  const [deletePet] = useDeletePetMutation();
  const rowData = data?.data;

  const forLoading = [1, 2, 3, 4, 5, 6, 7, 8];

  ///delete operation---------------------------------
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

  const handleEditRow = (row: any) => {
    setSelectedPet(row);
    setUpdateModalOpen(true);
  };

  const handleDetailsRow = async (row: any) => {
    setSelectRowToSee(row);
    setDetailModalOpen(true);
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
        // console.log(row.id);
        return (
          <>
            <IconButton
              onClick={() => handleEditRow(row)}
              aria-label="update"
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
              {/* <UpdatePets
                open={updateModalOpen}
                setOpen={setUpdateModalOpen}
                id={row.id}
                defaultValue={row}
              /> */}
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
              onClick={() => handleDetailsRow(row)}
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
      <Box>
        {!isLoading ? (
          <Box>
            <DashboardBanner
              title="Manage Pets By Updateing & Deleting"
              routeLink="/dashboard/admin/pet-management"
              selfName="Pet_Management"
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                sx={{ ":hover": { backgroundColor: "secondary.main" } }}
              >
                Create Pet
              </Button>
              <CreatePetModal open={isModalOpen} setOpen={setIsModalOpen} />
            </Stack>
          </Box>
        ) : (
          <Box>
            <BannerLoader />
            <Skeleton
              sx={{
                width: "120px",
                height: "60px",
                borderRadius: "5px",
                my: "10px",
              }}
            />
          </Box>
        )}
      </Box>

      <Box mt={2}>
        {!isLoading ? (
          <DataGrid rows={rowData} columns={columns} hideFooter />
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
                    <Skeleton sx={{ width: "300px", height: "70px" }} />
                    <Skeleton sx={{ width: "300px", height: "70px" }} />
                    <Skeleton sx={{ width: "300px", height: "70px" }} />
                    <Skeleton sx={{ width: "300px", height: "70px" }} />
                    <Skeleton sx={{ width: "300px", height: "70px" }} />
                    <Skeleton sx={{ width: "100%", height: "70px" }} />
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
      {selectedPet && (
        <UpdatePets
          open={updateModalOpen}
          setOpen={setUpdateModalOpen}
          id={selectedPet.id}
          defaultValue={selectedPet}
        />
      )}
      {selectRowToSee && (
        <DetailsPet
          open={detailModalOpen}
          setOpen={setDetailModalOpen}
          row={selectRowToSee}
        />
      )}
    </Box>
  );
};

export default PetManagement;
