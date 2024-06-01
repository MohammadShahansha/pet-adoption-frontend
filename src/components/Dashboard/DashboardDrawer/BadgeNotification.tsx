import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useGetRequestStatusQuery } from "@/redux/api/allApi/adoptionRequestApi";
import { Box, CircularProgress } from "@mui/material";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

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
  return (
    <Box>
      {!isLoading ? (
        <IconButton aria-label={notificationsLabel(100)}>
          <Badge badgeContent={reqStatusData?.pendingRequest} color="primary">
            <CircleNotificationsIcon fontSize="large" />
          </Badge>
        </IconButton>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
}
