"use client";
import { Box, Button, Skeleton } from "@mui/material";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetAllpetsQuery } from "@/redux/api/allApi/petsApi";
import SendRequest from "./components/SendRequest";
import SeeDetals from "./components/SeeDetails";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";
import Link from "next/link";
import Paper from "@mui/material/Paper";
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
      minWidth: 150,
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      minWidth: 350,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        // console.log(row.id);
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // gap: "8px",
              flexWrap: "wrap",
              width: { xs: "300px", md: "100%" },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Button
                onClick={() => handleSendRequest(row)}
                sx={{
                  backgroundColor: "secondary.main",
                  ":hover": {
                    backgroundColor: "primary.main",
                  },
                  mr: "20px",
                }}
              >
                Send Request
              </Button>

              <Link href={`/dashboard/user/seeDetails/${row?.id}`}>
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

  // const columns: GridColDef[] = [
  //   { field: "name", headerName: "Name", width: 120 },
  //   {
  //     field: "gender",
  //     headerName: "Gender",
  //     width: 120,
  //   },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     width: 120,
  //   },

  //   {
  //     field: "size",
  //     headerName: "Size",
  //     width: 120,
  //   },
  //   {
  //     field: "location",
  //     headerName: "Location",
  //     width: 150,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Actions",
  //     width: 350,
  //     headerAlign: "center",
  //     align: "center",
  //     renderCell: ({ row }) => {
  //       // console.log(row.id);
  //       return (
  //         <Box
  //           sx={{
  //             display: "flex",
  //             justifyContent: "center",
  //             // gap: "8px",
  //             flexWrap: "wrap",
  //             width: { xs: "300px", md: "100%" },
  //           }}
  //         >
  //           <Box sx={{ width: "100%" }}>
  //             <Button
  //               onClick={() => handleSendRequest(row)}
  //               sx={{
  //                 backgroundColor: "secondary.main",
  //                 ":hover": {
  //                   backgroundColor: "primary.main",
  //                 },
  //                 mr: "20px",
  //               }}
  //             >
  //               Send Request
  //             </Button>

  //             <Link href={`/dashboard/user/seeDetails/${row?.id}`}>
  //               <Button
  //                 sx={{
  //                   ":hover": {
  //                     backgroundColor: "secondary.main",
  //                   },
  //                 }}
  //               >
  //                 See Details
  //               </Button>
  //             </Link>
  //           </Box>
  //         </Box>
  //       );
  //     },
  //   },
  // ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%" }}>
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

      {!isLoading ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowX: "auto",
            display: "flex",
            justifyContent: "center",
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "320px", md: "100%" },
              display: "flex",
              justifyContent: "center",
              mx: { xs: "auto", md: "10px" },
            }}
          >
            <DataGrid rows={rowData} columns={columns} hideFooter />
          </Box>
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
