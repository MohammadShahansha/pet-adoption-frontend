import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, CircularProgress } from "@mui/material";
import { useGetRequestStatusQuery } from "@/redux/api/allApi/adoptionRequestApi";

export default function RequestStatus() {
  const { data: requestStatus, isLoading } = useGetRequestStatusQuery({});
  console.log(requestStatus);
  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  const data = [
    {
      id: 1,
      value: requestStatus.pendingRequest || 0,
      label: "Pending",
      color: "#DAF7A6 ",
    },
    {
      id: 2,
      value: requestStatus.rejectedRequest || 0,
      label: "Rejected",
      color: "#E4352A ",
    },
    {
      id: 0,
      value: requestStatus.approvedRequest || 0,
      label: "Approved",
      color: "#50E56B",
    },
  ];

  return (
    <Box>
      <Box>
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          height={240}
          width={500}
        />
      </Box>
    </Box>
  );
}
