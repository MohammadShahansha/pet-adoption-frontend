"use client";

import { useGetSinglePostQuery } from "@/redux/api/allApi/postApi";
import { Box, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";

type TProp = {
  id: string | null;
};
const SingleBlog = (id: TProp) => {
  const { data: singleData, isLoading } = useGetSinglePostQuery(id);
  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box>
      <Typography component="h2" variant="h4" fontWeight={600}>
        {singleData?.title}:
      </Typography>
      <Image
        src={singleData?.image}
        alt="Image"
        layout="responsive"
        width={1}
        height={1}
      />
      <Typography component="p" fontSize="10px">
        Created By: admin
      </Typography>
      <Typography component="p" fontSize="10px">
        Posted At: {singleData?.createdAt.slice(0, 10)}
      </Typography>
      <Typography component="p" fontSize="18px">
        {singleData?.description.slice(0, 500)}-
      </Typography>
      <Typography component="p" fontSize="18px" my="20px">
        {singleData?.description.slice(500, 1100)}-
      </Typography>
      <Typography component="p" fontSize="18px" my="20px">
        {singleData?.description.slice(1100)}-
      </Typography>
    </Box>
  );
};

export default SingleBlog;
