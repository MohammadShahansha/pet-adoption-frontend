"use client";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import { useGetAllAdoptionRequestQuery } from "@/redux/api/allApi/adoptionRequestApi";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const RequestedPage = () => {
  const { data: adoptionReqData, isLoading } = useGetAllAdoptionRequestQuery(
    {}
  );
  const forLoading = [1, 2, 3, 4, 5, 6];
  console.log(adoptionReqData);
  return (
    <Box>
      <Box>
        {!isLoading ? (
          <DashboardBanner
            title="See Your Requested Pet's Updation"
            routeLink="/dashboard/user/requested-pets"
            selfName="See_Update_Request"
          />
        ) : (
          <BannerLoader />
        )}
      </Box>
      <Box></Box>
      <Grid container spacing={2}>
        {!isLoading ? (
          adoptionReqData?.map((item: any, index: number) => {
            return (
              <Grid item key={index} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 180 }}
                    image={item?.pet?.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "primary.main",
                        }}
                        fontWeight={500}
                        fontSize="15px"
                      >
                        Name:
                      </Typography>
                      <Typography
                        sx={{
                          color: "secondary.main",
                        }}
                        fontWeight={400}
                        fontSize="15px"
                      >
                        {" "}
                        {item?.pet?.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "primary.main",
                        }}
                        fontWeight={500}
                        fontSize="15px"
                      >
                        Status:
                      </Typography>
                      <Typography
                        sx={{
                          color: "secondary.main",
                        }}
                        fontWeight={400}
                        fontSize="15px"
                      >
                        {" "}
                        {item?.status}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item?.pet?.description.slice(0, 120)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <Grid container spacing={2}>
            {forLoading.map((item: number) => {
              return (
                <Grid item key={item} sm={12} md={4} gap={4}>
                  <Box
                    sx={{
                      backgroundColor: "#FBF8F8",
                      padding: "10px",
                      borderRadius: "30px",
                    }}
                  >
                    <Skeleton
                      animation="wave"
                      sx={{ width: "100%", height: "200px" }}
                    />
                    <Skeleton
                      animation="wave"
                      sx={{ width: "100%", height: "20px" }}
                    />
                    <Skeleton
                      animation="wave"
                      sx={{ width: "80%", height: "20px" }}
                    />
                    <Skeleton
                      animation="wave"
                      sx={{ width: "50%", height: "20px" }}
                    />
                    <Skeleton
                      animation="wave"
                      sx={{ width: "100%", height: "20px" }}
                    />
                    <Skeleton
                      animation="wave"
                      sx={{ width: "100%", height: "20px" }}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default RequestedPage;
