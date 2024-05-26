"use client";
import { Box, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  useDeletePetMutation,
  useGetAllpetsQuery,
} from "@/redux/api/allApi/petsApi";
import EditIcon from "@mui/icons-material/Edit";
import SendRequest from "./components/SendRequest";
import SeeDetals from "./components/SeeDetails";
const PetInformatin = () => {
  const [reqModalOpen, setReqModalOpen] = useState<boolean>(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);

  const [selectPet, setSelectPet] = useState<any>(null);
  const [selectedRowToSee, setSelectedRowToSee] = useState<any>(null);

  const { data, isLoading } = useGetAllpetsQuery({});
  const rowData = data?.data;

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
      <Box mt={4}>
        {!isLoading ? (
          <DataGrid rows={rowData} columns={columns} hideFooter />
        ) : (
          <h1>Loading....</h1>
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
