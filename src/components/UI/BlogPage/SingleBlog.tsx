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
  const spliceDescriptionIntoSentence = (text: string): string[] => {
    return text.match(/[^.!?]+[.!?]+[\])'"`’”]*|.+/g) || [];
  };

  const sentence = spliceDescriptionIntoSentence(singleData?.description || "");
  const firstPara = sentence.slice(0, 6).join(" ");
  const secondPara = sentence.slice(6, 8).join(" ");
  const thirdPara = sentence.slice(8).join("");
  return (
    <Box sx={{ backgroundColor: "#e5e7eb", p: "30px" }}>
      <Typography
        component="h2"
        variant="h4"
        fontWeight={600}
        my="30px"
        textAlign="center"
      >
        {singleData?.title}
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
        {firstPara}
      </Typography>
      {secondPara && (
        <Typography
          component="p"
          fontSize="18px"
          my="30px"
          ml="100px"
          color="primary.main"
        >
          {secondPara}
        </Typography>
      )}
      {thirdPara && (
        <Typography component="p" fontSize="18px">
          {thirdPara}
        </Typography>
      )}
    </Box>
  );
};

export default SingleBlog;
