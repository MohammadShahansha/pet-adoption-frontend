import { USER_ROLE } from "@/constant/role";
import { sidebarItem, userRole } from "@/types/common";
import DashboardIcon from "@mui/icons-material/Dashboard";

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
          icon: DashboardIcon,
        },
        {
          title: "Pet-Management",
          path: `${role}/pet-management`,
          icon: DashboardIcon,
        },
        {
          title: "All-Request",
          path: `${role}/all-request`,
          icon: DashboardIcon,
        },
        {
          title: "Change-Password",
          path: `${role}/change-password`,
          icon: DashboardIcon,
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
          icon: DashboardIcon,
        },
        {
          title: "Change-password",
          path: `${role}/change-password`,
          icon: DashboardIcon,
        }
      );
      break;
    default:
      break;
  }
  return [...roleMenus];
};

export default drawerItems;
