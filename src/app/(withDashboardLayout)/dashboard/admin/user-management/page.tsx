"use client";
import { useGetAllUsersQuery } from "@/redux/api/allApi/usersApi";
import { Box, IconButton, Skeleton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import UpdateUser from "./components/UpdateUser";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";

const UserManagement = () => {
  const { data: userData, isLoading } = useGetAllUsersQuery({});

  const [userModalOpen, setUserModalOpen] = useState(false);
  const [selectUserRow, setSelectUserRow] = useState<any>(null);
  const forLoading = [1, 2, 3, 4, 5, 6, 7, 8];

  // console.log(userData);

  const handleUpdateUser = (row: any) => {
    setSelectUserRow(row);
    setUserModalOpen(true);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    {
      field: "action",
      headerName: "Update_Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        // console.log(row.id);
        return (
          <>
            <IconButton
              onClick={() => handleUpdateUser(row)}
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
            title="Manage User By Updateing & Deleting"
            routeLink="/dashboard/admin/user-management"
            selfName="User_Management"
          />
        ) : (
          <BannerLoader />
        )}
      </Box>
      {!isLoading ? (
        <DataGrid rows={userData} columns={columns} hideFooter />
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
      {selectUserRow && (
        <UpdateUser
          open={userModalOpen}
          setOpen={setUserModalOpen}
          id={selectUserRow.id}
          defaultValue={selectUserRow}
        />
      )}
    </Box>
  );
};

export default UserManagement;
