"use client";
import { useGetAllUsersQuery } from "@/redux/api/allApi/usersApi";
import { Box, IconButton, Skeleton, useMediaQuery } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import UpdateUser from "./components/UpdateUser";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";
import { useTheme } from "@mui/material/styles";

const UserManagement = () => {
  const { data: userData, isLoading } = useGetAllUsersQuery({});

  const [userModalOpen, setUserModalOpen] = useState(false);
  const [selectUserRow, setSelectUserRow] = useState<any>(null);
  const forLoading = [1, 2, 3, 4, 5, 6, 7, 8];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // console.log(userData);

  const handleUpdateUser = (row: any) => {
    setSelectUserRow(row);
    setUserModalOpen(true);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 150 },
    { field: "role", headerName: "Role", flex: 1, minWidth: 150 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "action",
      headerName: "Update_Status",
      flex: 1,
      minWidth: 150,
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
            title="Manage User By Updateing "
            routeLink="/dashboard/admin/user-management"
            selfName="User_Management"
          />
        ) : (
          <BannerLoader />
        )}
      </Box>
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
          <DataGrid
            rows={userData}
            columns={columns}
            hideFooter
            autoHeight
            sx={{
              "& .MuiDataGrid-root": {
                borderRadius: "8px",
                overflow: "hidden",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          />
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
