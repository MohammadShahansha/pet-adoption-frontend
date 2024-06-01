"use client";
import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PATextAreaInput from "@/components/Formas/PATextAreaInput";
import { useCreatePostMutation } from "@/redux/api/allApi/postApi";
import { Box, Button, Grid, TextareaAutosize, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const CreatePost = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [createPost] = useCreatePostMutation();
  const handleLoggin: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    try {
      const res = await createPost(values).unwrap();

      if (res?.id) {
        toast.success("create post successfully");
        router.refresh();
      }
    } catch (err: any) {
      toast.error("here are some problem");
    }
  };
  return (
    <Box mt={3}>
      <PAForm onSubmit={handleLoggin}>
        <Grid container spacing={3} sx={{ width: "500px", mx: "auto" }}>
          <Grid item md={12}>
            <PAInput name="title" label="Title" fullWidth={true} />
          </Grid>
          <Grid item md={12}>
            <PAInput
              name="image"
              label="Image"
              fullWidth={true}
              sx={{ color: "black" }}
            />
          </Grid>
          <Grid item md={12}>
            <PATextAreaInput
              name="description"
              aria-label="maximum height"
              sx={{ width: "100%", color: "black" }}
            />
          </Grid>
        </Grid>

        <Button
          fullWidth={true}
          sx={{
            marginTop: "20px",
            ":hover": {
              backgroundColor: "#111e42",
            },
            width: "300px",
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
          type="submit"
        >
          {" "}
          Submit
        </Button>
      </PAForm>
    </Box>
  );
};

export default CreatePost;
