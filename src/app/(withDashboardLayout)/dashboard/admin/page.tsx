import { Box } from "@mui/system";
import RecentRegistrationTable from "@/components/Dashboard/DashboardSummary/RecentRegistrationTable";
import RecentRequestTable from "@/components/Dashboard/DashboardSummary/RecentRequestTable";
import TotalSummary from "@/components/Dashboard/DashboardSummary/TotalSummary";
import RecentPets from "@/components/Dashboard/DashboardSummary/RecentsPets";
const AdminPage = () => {
  return (
    <Box
    // sx={{
    //   backgroundColor: "#e7fbf9",
    // }}
    >
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
