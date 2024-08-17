"use client";
import { Box, Button, IconButton, Skeleton } from "@mui/material";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";
import {
  useDeleteRequestMutation,
  useGetAllAdoptionRequestQuery,
} from "@/redux/api/allApi/adoptionRequestApi";
import UpdateStatus from "./components/UpdateStatus";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";

const AllRequest = () => {
  const [statusModalOpen, setStatusModalOpen] = useState<boolean>(false);
  const { data: requestedData, isLoading } = useGetAllAdoptionRequestQuery({});
  const [deleteRequest] = useDeleteRequestMutation();
  const forLoading = [1, 2, 3, 4, 5, 6, 7, 8];

  const [selectedReq, setSelectedReq] = useState<any>(null);

  const handleUpdateStatus = (row: any) => {
    setSelectedReq(row);
    setStatusModalOpen(true);
  };

  const handleDeletReq = async (id: string) => {
    console.log(id);
    try {
      const res = await deleteRequest(id).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Delete pets successfully");
      }
    } catch (err) {
      toast.error("Somthing went wrong");
    }
  };
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
      field: "email",
      headerName: "User_Email",
      flex: 1,
      minWidth: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.user?.email}</Box>;
      },
    },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "pet.size",
      headerName: "Pets_Size",
      flex: 1,
      minWidth: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.pet?.size}</Box>;
      },
    },
    {
      field: "pet.location",
      headerName: "Pets_Location",
      flex: 1,
      minWidth: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.pet?.location}</Box>;
      },
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      minWidth: 200,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        // console.log(row.id);
        return (
          <>
            <IconButton
              onClick={() => handleUpdateStatus(row)}
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
              onClick={() => handleDeletReq(row.id)}
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
            title="Manage Adoption Request By Updateing & Deleting"
            routeLink="/dashboard/admin/all-request"
            selfName="All_Request"
          />
        ) : (
          <BannerLoader />
        )}
      </Box>
      <Box mt={2}>
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
            <DataGrid rows={requestedData} columns={columns} hideFooter />
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
                    <Skeleton sx={{ width: "330px", height: "70px" }} />
                    <Skeleton sx={{ width: "430px", height: "70px" }} />
                    <Skeleton sx={{ width: "330px", height: "70px" }} />
                    <Skeleton sx={{ width: "330px", height: "70px" }} />
                    <Skeleton sx={{ width: "330px", height: "70px" }} />
                    <Skeleton sx={{ width: "100%", height: "70px" }} />
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
      {selectedReq && (
        <UpdateStatus
          open={statusModalOpen}
          setOpen={setStatusModalOpen}
          id={selectedReq.id}
          defaultValue={selectedReq}
        />
      )}
    </Box>
  );
};

export default AllRequest;
