"use client";
import { useGetAllAdoptionRequestQuery } from "@/redux/api/allApi/adoptionRequestApi";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const RequestedPage = () => {
  const { data: adoptionReqData, isLoading } = useGetAllAdoptionRequestQuery(
    {}
  );
  console.log(adoptionReqData);
  return (
    <Box>
      <Box>
        <Typography fontSize="20px" fontWeight={500} mb="30px">
          See here your Requested Pets and Status...
        </Typography>
      </Box>
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
                      {item?.pet?.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })
        ) : (
          <h1>Loading....</h1>
        )}
      </Grid>
    </Box>
  );
};

export default RequestedPage;
