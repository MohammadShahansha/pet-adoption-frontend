"use client";
import { useGetAllPostQuery } from "@/redux/api/allApi/postApi";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
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
  //   console.log(postData);

  const handlePost = async (id: string) => {
    setSelectId(id);
  };
  return (
    <Box mx={5}>
      <Grid container spacing={10}>
        <Grid item md={3}>
          <Typography component="h1" variant="h5" fontWeight={500}>
            Recent Post
          </Typography>
          {!isLoading ? (
            <Box>
              {postData?.map((singlePost: any, index: number) => {
                return (
                  <Box key={index}>
                    <Box
                      component="button"
                      onClick={() => handlePost(singlePost?.id)}
                      sx={{
                        backgroundColor: "#e5e7eb",
                        width: "100%",
                        my: "10px",
                        border: "10px solid balck",
                        borderRadius: "5px",
                        ":hover": {
                          backgroundColor: "primary.main",
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
                          width={50}
                          height={50}
                        />
                        <Box>
                          <Typography>{singlePost?.title}</Typography>
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
            <h1>lodaing</h1>
          )}
        </Grid>

        <Grid item md={9}>
          {selectId ? (
            <SingleBlog id={selectId} />
          ) : (
            <Box mt={10}>
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
                Get here how will you take care of your pets and how give and
                get intertainment
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllBlog;
