"use client";
import { useGetAllUsersQuery } from "@/redux/api/allApi/usersApi";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const UserManagement = () => {
  const { data: userData, isLoading } = useGetAllUsersQuery({});
  console.log(userData);
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
  ];
  return (
    <Box>
      {!isLoading ? (
        <DataGrid
          rows={userData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      ) : (
        <h1>Loading....</h1>
      )}
    </Box>
  );
};

export default UserManagement;
