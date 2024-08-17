"use client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import { CircularProgress, Grid, Skeleton, Typography } from "@mui/material";
import RecentRegistrationTable from "@/components/Dashboard/DashboardSummary/RecentRegistrationTable";
import RecentRequestTable from "@/components/Dashboard/DashboardSummary/RecentRequestTable";
import { useAvailabelPetsQuery } from "@/redux/api/allApi/petsApi";
import { useGetUserStatusQuery } from "@/redux/api/allApi/usersApi";
import { useGetRequestStatusQuery } from "@/redux/api/allApi/adoptionRequestApi";
const TotalSummary = () => {
  const { data: petsData, isLoading: petsLoadin } = useAvailabelPetsQuery({});
  const { data: userData, isLoading: userLoading } = useGetUserStatusQuery({});
  const { data: reqData, isLoading: reqLoading } = useGetRequestStatusQuery({});

  const forLoading = [1, 2, 3, 4];
  if (petsLoadin || userLoading || reqLoading) {
    return (
      <Box>
        <Grid container spacing={2}>
          {forLoading.map((item: number, index: number) => {
            return (
              <Grid item key={index} sm={12} md={3}>
                <Box sx={{ backgroundColor: "#F8F4F4 ", p: "5px" }}>
                  <Box>
                    <Skeleton width="200px" height="25px" />
                    <Skeleton width="100px" height="30px" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      mt: "50px",
                    }}
                  >
                    <Skeleton
                      width="50px"
                      height="70px"
                      sx={{
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  }
  const keyMaterials = [
    {
      title: "Registrated User",
      number: userData?.totalUser,
      icon: <AccountCircleIcon fontSize="large" />,
      color: "#FFE2EF",
    },
    {
      title: "Active User",
      number: userData?.activeUsers,
      icon: <GroupsIcon fontSize="large" />,
      color: "#FFF4DE",
    },
    {
      title: "Available Pets",
      number: petsData?.totalPets,
      icon: <PetsIcon fontSize="large" />,
      color: "#DCFCE7",
    },
    {
      title: "Adoptions Request",
      number: reqData?.totalRequest,
      icon: <FavoriteIcon fontSize="large" />,
      color: "#F3E8FF",
    },
  ];
  return (
    <Box>
      <Grid container spacing={4}>
        {keyMaterials.map((keyMaterial, index) => (
          <Grid item key={index} xs={12} md={3}>
            <Box
              sx={{
                backgroundColor: `${keyMaterial.color}`,
                padding: "20px",
              }}
            >
              <Typography variant="h6" component="p">
                {keyMaterial.title}
              </Typography>
              <Typography fontWeight={600} fontSize="30px">
                {keyMaterial.number}+
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  mt: "20px",
                  color: "gray",
                  ":hover": {
                    color: "secondary.main",
                  },
                }}
              >
                {keyMaterial.icon}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TotalSummary;
