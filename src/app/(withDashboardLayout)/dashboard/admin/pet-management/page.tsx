"use client";
import {
  Box,
  Button,
  DialogProps,
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
import Link from "next/link";

const PetManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

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
    { field: "name", headerName: "Name", flex: 1, minWidth: 120 },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      minWidth: 120,
    },

    {
      field: "size",
      headerName: "Size",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 2,
      minWidth: 300,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        // console.log(row.id);
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
              width: { xs: "300px", md: "100%" },
            }}
          >
            <Box sx={{ width: "100%" }}>
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

              {/* <Button
                onClick={() => handleDetailsRow(row)}
                sx={{
                  ":hover": {
                    backgroundColor: "secondary.main",
                  },
                }}
              >
                See Detail
              </Button> */}
              <Link href={`/dashboard/admin/seeDetails/${row?.id}`}>
                <Button
                  sx={{
                    ":hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                >
                  See Details
                </Button>
              </Link>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          width: { xs: "100vw", md: "100%" },
          overflowX: "hidden",
        }}
      >
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
              sx={{
                mx: { xs: "5px", md: "10px" },
              }}
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

      <Box
        sx={{
          mx: { xs: "auto", md: "10px" },
          mt: "20px",
        }}
      >
        {!isLoading ? (
          <Box
            sx={{
              // width: isMobile ? "300px" : "100%",
              width: { xs: "330px", sm: "500px", md: "100%" },
              overflowX: "auto",
              overflowY: "auto",

              mx: "auto",
            }}
          >
            <DataGrid rows={rowData} columns={columns} hideFooter autoHeight />
          </Box>
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
