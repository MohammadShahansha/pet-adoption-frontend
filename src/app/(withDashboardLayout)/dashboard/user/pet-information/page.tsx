"use client";
import { Box, Button, IconButton, Skeleton } from "@mui/material";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useDeletePetMutation,
  useGetAllpetsQuery,
} from "@/redux/api/allApi/petsApi";
import EditIcon from "@mui/icons-material/Edit";
import SendRequest from "./components/SendRequest";
import SeeDetals from "./components/SeeDetails";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";
const PetInformatin = () => {
  const [reqModalOpen, setReqModalOpen] = useState<boolean>(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);

  const [selectPet, setSelectPet] = useState<any>(null);
  const [selectedRowToSee, setSelectedRowToSee] = useState<any>(null);

  const { data, isLoading } = useGetAllpetsQuery({});
  const rowData = data?.data;
  const forLoading = [1, 2, 3, 4, 5];

  const handleSendRequest = (row: any) => {
    setSelectPet(row);
    setReqModalOpen(true);
  };

  const handleDetailsRow = async (row: any) => {
    setSelectedRowToSee(row);
    setDetailsModalOpen(true);
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
            <Button
              onClick={() => handleSendRequest(row)}
              sx={{
                ":hover": {
                  backgroundColor: "secondary.main",
                },
                mr: "20px",
              }}
            >
              Send Request
            </Button>

            <Button
              onClick={() => handleDetailsRow(row)}
              sx={{
                ":hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              See Details
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
          <DashboardBanner
            title="Choose a Pet to Send Request"
            routeLink="/dashboard/user/pet-information"
            selfName="User_Management"
          />
        ) : (
          <BannerLoader />
        )}
      </Box>
      <Box mt={4}>
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
                    <Skeleton sx={{ width: "400px", height: "70px" }} />
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
      {selectPet && (
        <SendRequest
          open={reqModalOpen}
          setOpen={setReqModalOpen}
          id={selectPet.id}
        />
      )}
      {selectedRowToSee && (
        <SeeDetals
          open={detailsModalOpen}
          setOpen={setDetailsModalOpen}
          row={selectedRowToSee}
        />
      )}
    </Box>
  );
};

export default PetInformatin;
