"use client";
import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PATextAreaInput from "@/components/Formas/PATextAreaInput";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
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
        // router.refresh();
        router.push("/dashboard/admin/post");
      }
    } catch (err: any) {
      toast.error("here are some problem");
    }
  };
  return (
    <Box>
      <Box
        sx={{
          width: { xs: "100vw", md: "100%" },
          overflowX: "hidden",
        }}
      >
        <DashboardBanner
          title="Create a Blog To Post "
          routeLink="/dashboard/admin/post"
          selfName="Create_Post"
        />
      </Box>
      <Box
        sx={{
          mx: { xs: "5px", md: "10px" },
        }}
      >
        <PAForm onSubmit={handleLoggin}>
          <Grid
            container
            spacing={1}
            sx={{ width: { xs: "100%", md: "500px" }, mx: "auto" }}
          >
            <Grid item xs={12} md={12}>
              <PAInput name="title" label="Title" fullWidth={true} />
            </Grid>
            <Grid item xs={12} md={12}>
              <PAInput
                name="image"
                label="Image"
                fullWidth={true}
                sx={{ color: "black" }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <PATextAreaInput
                name="description"
                aria-label="maximum height"
                sx={{ width: "100%", color: "black" }}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                marginTop: "20px",
                ":hover": {
                  backgroundColor: "#111e42",
                },

                ml: "10px",
                width: { xs: "100%", md: "500px" },
                display: "flex",
                justifyContent: "center",
              }}
              type="submit"
            >
              {" "}
              Submit
            </Button>
          </Box>
        </PAForm>
      </Box>
    </Box>
  );
};

export default CreatePost;
