"use client";
import { useGetAllReviewsQuery } from "@/redux/api/allApi/reviewApi";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import iconImg from "@/assets/icons/icon.png";
import { useState } from "react";
import UpdateReviewStatus from "./component.tsx/UpdateReviewStatus";

const UpdateReview = () => {
  const { data: reviewData, isLoading } = useGetAllReviewsQuery({});
  const [reviewUpdatModalOpen, setReviewUpdatModalOpen] = useState(false);
  const [selectReviewdata, setSelectReviewData] = useState<any>(null);
  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  console.log(reviewData);

  const handleUpdateStatus = (row: any) => {
    setSelectReviewData(row);
    setReviewUpdatModalOpen(true);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#e5e7eb",
        width: "100%",
        py: "80px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {!isLoading ? (
            reviewData.map((review: any, index: number) => {
              return (
                <Grid item sm={12} md={6} key={index}>
                  <Box
                    sx={{
                      backgroundColor: "white",
                      py: "30px",
                      px: "20px",
                      borderRadius: "30px",
                      border: "0 solid #e5e7eb",
                      boxShadow: "#e5e7eb",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "10px",
                      }}
                    >
                      <Image src={iconImg} alt="icons" />
                    </Box>
                    <Typography>{review?.reviewDescription}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "20px",
                          alignItems: "center",
                          mt: "20px",
                        }}
                      >
                        <Avatar
                          alt="Customar"
                          src={review?.user?.photo}
                          sx={{ width: 40, height: 40 }}
                        />
                        <Box>
                          <Typography component="h6" fontWeight={500}>
                            {review?.user?.name}
                          </Typography>
                          <Typography component="h6" fontWeight={500}>
                            {review?.user?.email}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          mt: "30px",
                        }}
                      >
                        <Button
                          onClick={() => handleUpdateStatus(review)}
                          sx={{
                            ":hover": {
                              backgroundColor: "secondary.main",
                            },
                          }}
                        >
                          Update Status
                        </Button>
                        {selectReviewdata && (
                          <UpdateReviewStatus
                            open={reviewUpdatModalOpen}
                            setOpen={setReviewUpdatModalOpen}
                            defaultValue={selectReviewdata}
                            id={review?.id}
                          />
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })
          ) : (
            <Box>
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default UpdateReview;
