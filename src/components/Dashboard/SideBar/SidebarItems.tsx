import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { sidebarItem } from "@/types/common";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TProps = {
  item: sidebarItem;
};
const SidebarItems = ({ item }: TProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();
  return (
    <Link href={linkPath}>
      <ListItem disablePadding>
        <ListItemButton
          sx={{
            ...(pathName === linkPath
              ? {
                  borderRight: "3px solid #1586FD",
                  "& svg": {
                    color: "#1586FD",
                  },
                }
              : {}),
            marginTop: "5px",
          }}
        >
          <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;
