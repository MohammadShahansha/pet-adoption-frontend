import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useGetUserStatusQuery } from "@/redux/api/allApi/usersApi";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function StatusPieChart() {
  const { data: userStatus, isLoading } = useGetUserStatusQuery({});
  console.log(userStatus);

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  const data = [
    {
      id: 0,
      value: userStatus.activeUsers || 0,
      label: "Active",
      color: "#00ff00",
    },
    {
      id: 1,
      value: userStatus.blockedUsers || 0,
      label: "Blocked",
      color: "#DAF7A6 ",
    },
    {
      id: 2,
      value: userStatus.deletedUsers || 0,
      label: "Deleted",
      color: "#FF5733",
    },
  ];

  return (
    <Box mr={50}>
      <Typography fontWeight={300}>User Status</Typography>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
        width={500}
      />
    </Box>
  );
}
