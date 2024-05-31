import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import RecentRegistrationTable from "@/components/Dashboard/DashboardSummary/RecentRegistrationTable";
const adminPage = () => {
  const keyMaterials = [
    {
      title: "Registrated User",
      number: 50,
      icon: <AccountCircleIcon fontSize="large" />,
      color: "#FFE2EF",
    },
    {
      title: "Active User",
      number: 50,
      icon: <GroupsIcon fontSize="large" />,
      color: "#FFF4DE",
    },
    {
      title: "Available Pets",
      number: 50,
      icon: <PetsIcon fontSize="large" />,
      color: "#DCFCE7",
    },
    {
      title: "Adoptions Request",
      number: 50,
      icon: <FavoriteIcon fontSize="large" />,
      color: "#F3E8FF",
    },
  ];
  return (
    <Box>
      <Grid container spacing={4}>
        {keyMaterials.map((keyMaterial, index) => (
          <Grid item key={index} sm={6} md={3}>
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
      <Box mt={5}>
        <RecentRegistrationTable />
      </Box>
    </Box>
  );
};

export default adminPage;
