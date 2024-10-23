"use client";
import { useGetHomeReviewQuery } from "@/redux/api/allApi/reviewApi";
import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Grid,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import iconImg from "@/assets/icons/icon.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ReviewSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { data: reviewData, isLoading } = useGetHomeReviewQuery({});
  const forLoading = [1, 2, 3];
  return (
    <Box
      sx={{
        backgroundColor: "#e5e7eb",
        width: "100%",
        py: isSmallScreen ? "30px" : "50px",
      }}
    >
      <Container>
        <Box>
          <Typography
            component="h2"
            variant="h3"
            // fontWeight={600}
            textAlign="center"
            sx={{
              fontWeight: isSmallScreen ? 500 : 600,
              fontSize: isSmallScreen ? "30px" : "35px",
            }}
          >
            {" "}
            What Customers Say About Us
          </Typography>
          <Typography component="p" textAlign="center" my="40px">
            See Why Thousands of Customer Love Us!
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {!isLoading ? (
            reviewData?.slice(0, 3).map((review: any, index: number) => {
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
            <Box mt="20px">
              <Grid container spacing={2}>
                {forLoading.map((item: number, index: number) => {
                  return (
                    <Grid item sm={12} md={4} key={index}>
                      <Skeleton variant="rectangular" width={350} />
                      <Skeleton
                        variant="rectangular"
                        width={350}
                        sx={{ my: "5px" }}
                      />
                      <Skeleton variant="rectangular" width={350} />
                      <Skeleton
                        variant="rectangular"
                        width={350}
                        sx={{ my: "5px" }}
                      />
                      <Box
                        sx={{
                          mt: "10px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            // justifyContent: "space-between",
                            gap: "20px",
                            alignItems: "center",
                          }}
                        >
                          <Skeleton
                            width={50}
                            height={70}
                            sx={{ borderRadius: "50% " }}
                          />
                          <Box>
                            <Skeleton sx={{ width: "100px" }} />
                            <Skeleton width="100px" />
                          </Box>
                        </Box>
                        <Skeleton width="100px" height="20px" />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default ReviewSection;
