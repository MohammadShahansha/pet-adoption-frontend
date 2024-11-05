import { Box, List, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { userRole } from "@/types/common";
import drawerItems from "@/utils/drawerItems";
import SidebarItems from "./SidebarItems";
import { getUserInfo } from "@/serviece/authService";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);
  //   console.log(userInfo);
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="5px"
        mt={1}
        py={1}
        component={Link}
        href="/"
      >
        <Image src={logo} alt="Logo" width={40} height={40} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="h1" sx={{}}>
            Petsmart
          </Typography>
        </Box>
      </Stack>
      <List>
        {drawerItems(userRole as userRole).map((item, index) => (
          <SidebarItems key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
