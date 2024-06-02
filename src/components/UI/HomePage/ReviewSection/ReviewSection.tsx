"use client";
import { useGetHomeReviewQuery } from "@/redux/api/allApi/reviewApi";
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import iconImg from "@/assets/icons/icon.png";

const ReviewSection = () => {
  const { data: reviewData, isLoading } = useGetHomeReviewQuery({});
  //   const { data: reviewsData, isLoading } = useGetAllReviewsQuery({});
  // if (isLoading) {
  //   return (
  //     <Box display="flex" alignItems="center" justifyContent="center">
  //       <CircularProgress />
  //     </Box>
  //   );
  // }
  console.log(reviewData);
  return (
    <Box
      sx={{
        backgroundColor: "#e5e7eb",
        width: "100%",
        py: "80px",
      }}
    >
      <Container>
        <Box>
          <Typography
            component="h2"
            variant="h3"
            fontWeight={600}
            textAlign="center"
          >
            {" "}
            What Customers Say About Us
          </Typography>
          <Typography component="p" textAlign="center" my="50px">
            See Why Thousands of Customer Love Us!
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {!isLoading ? (
            reviewData?.map((review: any, index: number) => {
              return (
                <Grid item sm={12} md={4} key={index}>
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
                      <Box mt={6}>
                        <Rating
                          name="size-medium"
                          defaultValue={review?.rating}
                          precision={0.5}
                        />
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

export default ReviewSection;
