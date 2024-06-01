"use client";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import CreateReviewModal from "./components/CreateReviewModal";

const ReviewPage = () => {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const handelReview = async (value: FieldValues) => {
    console.log(value);
  };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setReviewModalOpen(true)}>Send Review</Button>
        <CreateReviewModal
          open={reviewModalOpen}
          setOpen={setReviewModalOpen}
        />
      </Stack>
    </Box>
  );
};

export default ReviewPage;
