import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import PetsIcon from "@mui/icons-material/Pets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import RecentRegistrationTable from "@/components/Dashboard/DashboardSummary/RecentRegistrationTable";
import RecentRequestTable from "@/components/Dashboard/DashboardSummary/RecentRequestTable";
import TotalSummary from "@/components/Dashboard/DashboardSummary/TotalSummary";
import RecentPets from "@/components/Dashboard/DashboardSummary/RecentsPets";
const AdminPage = () => {
  // const keyMaterials = [
  //   {
  //     title: "Registrated User",
  //     number: 50,
  //     icon: <AccountCircleIcon fontSize="large" />,
  //     color: "#FFE2EF",
  //   },
  //   {
  //     title: "Active User",
  //     number: 50,
  //     icon: <GroupsIcon fontSize="large" />,
  //     color: "#FFF4DE",
  //   },
  //   {
  //     title: "Available Pets",
  //     number: 50,
  //     icon: <PetsIcon fontSize="large" />,
  //     color: "#DCFCE7",
  //   },
  //   {
  //     title: "Adoptions Request",
  //     number: 50,
  //     icon: <FavoriteIcon fontSize="large" />,
  //     color: "#F3E8FF",
  //   },
  // ];
  return (
    <Box>
      <TotalSummary />
      <Box mt={5}>
        <RecentRegistrationTable />
        <RecentRequestTable />
        <RecentPets />
      </Box>
    </Box>
  );
};

export default AdminPage;
