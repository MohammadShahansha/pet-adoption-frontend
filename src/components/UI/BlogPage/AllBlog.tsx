"use client";
import { useGetAllPostQuery } from "@/redux/api/allApi/postApi";
import { Box, Divider, Grid, Skeleton, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import SingleBlog from "./SingleBlog";
import Image from "next/image";
export type TBlog = {
  id: string;
  userId: string;
  title: string;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
const AllBlog = () => {
  const { data: postData, isLoading } = useGetAllPostQuery({});
  const [selectId, setSelectId] = useState<string | null>(null);
  const singleBlogRef = useRef<HTMLDivElement>(null);
  const forLoading = [1, 2, 3, 4, 5];

  const handlePost = async (id: string) => {
    setSelectId(id);
    if (singleBlogRef.current) {
      singleBlogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      mx={5}
      sx={{
        py: { xs: 0, md: "40px" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Typography component="h1" variant="h5" fontWeight={500}>
            Recent Post
          </Typography>
          {!isLoading ? (
            <Box>
              {postData?.map((singlePost: any, index: number) => {
                const isActive = singlePost?.id === selectId;
                return (
                  <Box key={index}>
                    <Box
                      component="button"
                      onClick={() => handlePost(singlePost?.id)}
                      sx={{
                        backgroundColor: isActive ? "#e5e7eb" : "white",
                        width: "100%",
                        height: "100px",
                        my: "10px",
                        border: "10px solid balck",
                        borderRadius: "5px",
                        ":hover": {
                          backgroundColor: "#e5e7eb",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <Image
                          src={singlePost?.image}
                          alt="blog_image"
                          width={60}
                          height={50}
                          style={{
                            paddingLeft: "10px",
                            borderRadius: "8px",
                          }}
                        />
                        <Box>
                          <Typography textAlign="start" fontWeight={600}>
                            {singlePost?.title}
                          </Typography>
                          <Typography
                            textAlign="start"
                            fontSize="10px"
                            mt="5px"
                          >
                            posted: {singlePost?.createdAt?.slice(0, 10)}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Divider />
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Box>
              {forLoading.map((item: number, index: number) => {
                return (
                  <Box key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Skeleton width={50} height={70} animation="wave" />
                      <Box>
                        <Skeleton
                          animation="wave"
                          sx={{ width: "150px", height: "30px" }}
                        />
                        <Skeleton
                          animation="wave"
                          sx={{ width: "100px", height: "20px" }}
                        />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          )}
        </Grid>

        <Grid item md={9}>
          <Box ref={singleBlogRef}>
            {selectId ? (
              <SingleBlog id={selectId} />
            ) : (
              <Box mt={10}>
                {!isLoading ? (
                  <Box>
                    <Typography
                      component="h1"
                      variant="h3"
                      textAlign="center"
                      fontWeight={600}
                      color="gray"
                    >
                      Choose Your Blog
                    </Typography>
                    <Typography
                      component="p"
                      textAlign="center"
                      fontWeight={300}
                      color="gray"
                      mt="50px"
                    >
                      Get here how will you take care of your pets and how give
                      and get intertainment
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Skeleton
                      animation="wave"
                      sx={{
                        width: "400px",
                        height: "80px",
                        mx: "auto",
                      }}
                    />
                    <Skeleton
                      animation="wave"
                      sx={{
                        width: "800px",
                        height: "25px",
                        mx: "auto",
                        mt: "40px",
                      }}
                    />
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllBlog;
