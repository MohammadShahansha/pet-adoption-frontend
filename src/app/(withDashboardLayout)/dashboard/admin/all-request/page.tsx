"use client";
import { Box, Button, IconButton } from "@mui/material";
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

const AllRequest = () => {
  const [statusModalOpen, setStatusModalOpen] = useState<boolean>(false);
  const { data: requestedData, isLoading } = useGetAllAdoptionRequestQuery({});
  const [deleteRequest] = useDeleteRequestMutation();
  console.log(requestedData);
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
      field: "email",
      headerName: "User_Email",
      width: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.user?.email}</Box>;
      },
    },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "pet.size",
      headerName: "Pets_Size",
      width: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.pet?.size}</Box>;
      },
    },
    {
      field: "pet.location",
      headerName: "Pets_Location",
      width: 150,
      renderCell: ({ row }) => {
        return <Box>{row?.pet?.location}</Box>;
      },
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
      <Box mt={4}>
        {!isLoading ? (
          <DataGrid rows={requestedData} columns={columns} hideFooter />
        ) : (
          <h1>Loading....</h1>
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
