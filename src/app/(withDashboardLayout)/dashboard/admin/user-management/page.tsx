"use client";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "@/redux/api/allApi/usersApi";
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";
import { useState } from "react";
import UpdateUser from "./components/UpdateUser";

const UserManagement = () => {
  const { data: userData, isLoading } = useGetAllUsersQuery({});
  const [deleteUser] = useDeleteUserMutation();

  const [userModalOpen, setUserModalOpen] = useState(false);
  const [selectUserRow, setSelectUserRow] = useState<any>(null);

  console.log(userData);
  const handleDeletUser = async (id: string) => {
    console.log(id);
    try {
      const res = await deleteUser(id).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Delete pets successfully");
      }
    } catch (err) {
      toast.error("Somthing went wrong");
    }
  };

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
      headerName: "Actions",
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
            <IconButton
              onClick={() => handleDeletUser(row.id)}
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
          </>
        );
      },
    },
  ];
  return (
    <Box>
      {!isLoading ? (
        <DataGrid rows={userData} columns={columns} hideFooter />
      ) : (
        <h1>Loading....</h1>
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
