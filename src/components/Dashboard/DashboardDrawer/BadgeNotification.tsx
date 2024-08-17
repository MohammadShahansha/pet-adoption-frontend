"use client";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useGetRequestStatusQuery } from "@/redux/api/allApi/adoptionRequestApi";
import { Box, CircularProgress } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { getUserInfo } from "@/serviece/authService";

function notificationsLabel(count: number) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

export default function BadgeNotification() {
  const { data: reqStatusData, isLoading } = useGetRequestStatusQuery({});
  const [userRole, setUserRole] = React.useState("");
  React.useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);
  return (
    <Box>
      {!isLoading ? (
        <IconButton aria-label={notificationsLabel(100)}>
          {userRole === "admin" ? (
            <Badge badgeContent={reqStatusData?.pendingRequest} color="primary">
              <CircleNotificationsIcon
                sx={{
                  fontSize: { xs: "small", md: "large" },
                }}
              />
            </Badge>
          ) : (
            <Badge
              badgeContent={reqStatusData?.approvedRequest}
              color="primary"
            >
              <CircleNotificationsIcon
                sx={{
                  fontSize: { xs: "small", md: "large" },
                }}
              />
            </Badge>
          )}
        </IconButton>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
