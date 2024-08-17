import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useGetUserStatusQuery } from "@/redux/api/allApi/usersApi";
import { Box, CircularProgress, Skeleton, Typography } from "@mui/material";

export default function StatusPieChart() {
  const { data: userStatus, isLoading } = useGetUserStatusQuery({});
  console.log(userStatus);

  if (isLoading) {
    return (
      <Box>
        <Skeleton width={150} height={20} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="end"
          gap={10}
          ml={20}
          mt={-5}
        >
          <Skeleton
            sx={{ width: "200px", height: "350px", borderRadius: "50%" }}
          />
          <Box>
            <Skeleton width="150px" height="20px" />
            <Skeleton width="150px" height="20px" />
            <Skeleton width="150px" height="20px" />
          </Box>
        </Box>
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
    <Box>
      <Typography
        fontWeight={500}
        color="black"
        // ml={5}
        // mt={0}
        sx={{
          ml: { xs: 0, md: "40px" },
          mt: { xs: "20px", md: 0 },
        }}
      >
        User Status:
      </Typography>

      <Box
        sx={{
          width: { xs: "300px", md: "500px" },
          height: { xs: "180px", md: "240px" },
        }}
      >
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          // height={240}
          // width={500}
        />
      </Box>
    </Box>
  );
}
