import { Box } from "@mui/system";
import RecentRequestTable from "@/components/Dashboard/DashboardSummary/RecentRequestTable";
import TotalSummary from "@/components/Dashboard/DashboardSummary/TotalSummary";
import RecentPets from "@/components/Dashboard/DashboardSummary/RecentsPets";
const UserDashboard = () => {
  return (
    <Box>
      <TotalSummary />
      <Box mt={5}>
        <RecentRequestTable />
        <RecentPets />
      </Box>
    </Box>
  );
};

export default UserDashboard;
