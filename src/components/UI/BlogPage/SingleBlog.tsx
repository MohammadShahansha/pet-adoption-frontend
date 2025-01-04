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
    <Box sx={{ p: { xs: "5px", md: "30px" } }}>
      <Typography
        variant="h4"
        fontWeight={500}
        my="30px"
        textAlign="center"
        sx={{
          // fontWeight: { xs: 500, md: 600 },
          fontSize: { xs: "25px", md: "35px" },
        }}
      >
        {singleData?.title}
      </Typography>
      <Image
        src={singleData?.image}
        alt="Image"
        width={400}
        height={400}
        style={{ borderRadius: "8px" }}
      />
      <Typography component="p" fontSize="10px">
        Created By: admin
      </Typography>
      <Typography component="p" fontSize="10px">
        Posted At: {singleData?.createdAt.slice(0, 10)}
      </Typography>
      <Typography
        component="p"
        fontSize="18px"
        dangerouslySetInnerHTML={{ __html: singleData?.description }}
      >
        {/* {singleData?.description} */}
      </Typography>
    </Box>
  );
};

export default SingleBlog;
