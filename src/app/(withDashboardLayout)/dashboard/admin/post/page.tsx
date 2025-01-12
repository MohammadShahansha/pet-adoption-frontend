"use client";
import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PATextAreaInput from "@/components/Formas/PATextAreaInput";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import { useCreatePostMutation } from "@/redux/api/allApi/postApi";
import { Box, Button, Grid, TextareaAutosize, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import uploadImageToImgbb from "@/components/ImageUploader/ImageUploader";

const ReactQuillNoSSR = dynamic(() => import("react-quill"), { ssr: false });
const CreatePost = () => {
  const router = useRouter();
  // const [error, setError] = useState("");
  // const [content, setContent] = useState("");
  const [createPost] = useCreatePostMutation();
  // const { control, handleSubmit, reset } = useForm();
  const [photo, setPhoto] = useState("");

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleFileUpload = async (file: File) => {
    try {
      const image = await uploadImageToImgbb(file);

      if (image) {
        toast.success("image Upload successfully");
      }
      setPhoto(image);
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  const submit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    const postData = {
      title: values?.title || "",
      image: photo || "",
      description: values?.description || "",
    };
    console.log(postData);
    try {
      const res = await createPost(postData).unwrap();

      if (res?.id) {
        toast.success("create post successfully");
        // router.refresh();
        router.push("/dashboard/admin/post");
      }
    } catch (err: any) {
      toast.error("here are some problem");
    }
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

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
        <PAForm onSubmit={submit}>
          <Grid
            container
            spacing={1}
            sx={{ width: { xs: "100%", md: "500px" }, mx: "auto" }}
          >
            <Grid item xs={12} md={12}>
              <PAInput name="title" label="Title" fullWidth={true} />
            </Grid>
            <Grid item xs={12} md={12}>
              {/* <PAInput
                name="image"
                label="Image"
                fullWidth={true}
                sx={{ color: "black" }}
              /> */}
              {/* <div className="h-10 w-full"> */}
              {/* <p
                  className="block text-sm font-medium text-gray-700"
                  style={{ marginBottom: "5px" }}
                >
                  Profile URL
                </p> */}
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{ width: "100%" }}
              >
                Upload Image
                <VisuallyHiddenInput
                  type="file"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                      handleFileUpload(file); // Pass the selected file to handleFileUpload
                    }
                  }}
                  multiple
                />
              </Button>
              {/* </div> */}
            </Grid>
            <Grid item xs={12} md={12}>
              <Controller
                name="description"
                defaultValue=""
                render={({ field }) => (
                  <ReactQuillNoSSR
                    {...field}
                    modules={modules}
                    formats={formats}
                    onChange={(newContent) => field.onChange(newContent)}
                  />
                )}
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
