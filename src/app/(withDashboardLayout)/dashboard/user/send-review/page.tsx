"use client";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import CreateReviewModal from "./components/CreateReviewModal";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";

const ReviewPage = () => {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const handelReview = async (value: FieldValues) => {
    console.log(value);
  };
  return (
    <Box>
      <Box
        sx={{
          width: { xs: "100vw", md: "100%" },
          overflowX: "hidden",
        }}
      >
        <DashboardBanner
          title="Please!! Send a Review About Us"
          routeLink="/dashboard/user/send-review"
          selfName="Send_Review"
        />
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mx: { xs: "5px", md: "10px" } }}
      >
        <Button
          onClick={() => setReviewModalOpen(true)}
          sx={{ ":hover": { backgroundColor: "secondary.main" } }}
        >
          Send Review
        </Button>
        <CreateReviewModal
          open={reviewModalOpen}
          setOpen={setReviewModalOpen}
        />
      </Stack>
    </Box>
  );
};

export default ReviewPage;
