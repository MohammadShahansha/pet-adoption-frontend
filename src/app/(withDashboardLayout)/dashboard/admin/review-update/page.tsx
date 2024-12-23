"use client";
import { useGetAllReviewsQuery } from "@/redux/api/allApi/reviewApi";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import iconImg from "@/assets/icons/icon.png";
import { useState } from "react";
import UpdateReviewStatus from "./component.tsx/UpdateReviewStatus";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";

const UpdateReview = () => {
  const { data: reviewData, isLoading } = useGetAllReviewsQuery({});
  const [reviewUpdatModalOpen, setReviewUpdatModalOpen] = useState(false);
  const [selectReviewdata, setSelectReviewData] = useState<any>(null);
  const forLoading = [1, 2, 3, 4];
  // console.log(reviewData);

  const handleUpdateStatus = (row: any) => {
    setSelectReviewData(row);
    setReviewUpdatModalOpen(true);
  };
  return (
    <Box>
      <Box>
        <Box
          sx={{
            width: { xs: "100vw", md: "100%" },
            overflowX: "hidden",
          }}
        >
          {!isLoading ? (
            <DashboardBanner
              title="Update User Review To Display Home"
              routeLink="/dashboard/admin/review-update"
              selfName="Review_Update"
            />
          ) : (
            <BannerLoader />
          )}
        </Box>
        <Box
          sx={{
            mx: { xs: "5px", md: "10px" },
          }}
        >
          <Grid container spacing={2}>
            {!isLoading ? (
              reviewData?.map((review: any, index: number) => {
                return (
                  <Grid item sm={12} md={6} key={index}>
                    <Box
                      sx={{
                        backgroundColor: "#e5e7eb",
                        py: "30px",
                        px: "20px",
                        borderRadius: "30px",
                        border: "0 solid #e5e7eb",
                        boxShadow: " 0px, 4px, 6px, rgba(0, 0, 0, 0.1)",
                        mb: "2px",
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
              <Grid container spacing={2} mt={4}>
                {forLoading.map((item: number) => {
                  return (
                    <Grid item key={item} sm={12} md={6}>
                      <Box
                        sx={{
                          backgroundColor: "#FBF8F8",
                          padding: "30px",
                          borderRadius: "30px",
                        }}
                      >
                        <Skeleton
                          animation="wave"
                          sx={{ width: "100%", height: "35px" }}
                        />
                        <Skeleton
                          animation="wave"
                          sx={{ width: "100%", height: "35px" }}
                        />
                        <Skeleton
                          animation="wave"
                          sx={{ width: "100%", height: "35px" }}
                        />
                        <Skeleton
                          animation="wave"
                          sx={{ width: "50%", height: "35px" }}
                        />
                        <Box sx={{ display: "flex", gap: "30px", mt: "40px" }}>
                          <Box sx={{ display: "flex", gap: "30px" }}>
                            <Skeleton
                              sx={{
                                width: "50px",
                                height: "70px",
                                borderRadius: "50%",
                              }}
                            />
                            <Box>
                              <Skeleton
                                sx={{ width: "200px", height: "30px" }}
                              />
                              <Skeleton
                                sx={{ width: "200px", height: "30px" }}
                              />
                            </Box>
                          </Box>
                          <Skeleton sx={{ width: "180px", height: "60px" }} />
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateReview;
