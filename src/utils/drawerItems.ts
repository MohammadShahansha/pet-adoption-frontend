import { USER_ROLE } from "@/constant/role";
import { sidebarItem, userRole } from "@/types/common";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PetsIcon from "@mui/icons-material/Pets";
import SendIcon from "@mui/icons-material/Send";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RateReviewIcon from "@mui/icons-material/RateReview";

const drawerItems = (role: userRole): sidebarItem[] => {
  const roleMenus: sidebarItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "User-Management",
          path: `${role}/user-management`,
          icon: GroupIcon,
        },
        {
          title: "Pet-Management",
          path: `${role}/pet-management`,
          icon: PetsIcon,
        },
        {
          title: "All-Request",
          path: `${role}/all-request`,
          icon: RequestPageIcon,
        },
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: AccountBoxIcon,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Pet-Information",
          path: `${role}/pet-information`,
          icon: SendIcon,
        },
        {
          title: "See-Update-Req",
          path: `${role}/requested-pets`,
          icon: VisibilityIcon,
        },
        {
          title: "Profile",
          path: `${role}/profile`,
          icon: AccountBoxIcon,
        },
        {
          title: "Send-Review",
          path: `${role}/send-review`,
          icon: RateReviewIcon,
        }
      );
      break;
    default:
      break;
  }
  return [...roleMenus];
};

export default drawerItems;
