import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PASelectField from "@/components/Formas/PASelectField";
import PASmallModal from "@/components/Shared/PAModal/PASmallModal";
import { useUpdateRequestMutation } from "@/redux/api/allApi/adoptionRequestApi";
import { useUpdateReviewMutation } from "@/redux/api/allApi/reviewApi";
import { requestStatus, reviewStatus, userStatus } from "@/types/common";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  photo: string;
  role: string;
  needPasswordChange: boolean;
  status: string;
};

type TReview = {
  id: string;
  userId: string;
  user: TUser;
  status: string;
  rating: string;
  reviewDescription: string;
};
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  defaultValue: TReview;
  id: string;
};
const UpdateReviewStatus = ({ open, setOpen, defaultValue, id }: TProps) => {
  const [updateReview] = useUpdateReviewMutation();

  const handleUpdatePets = async (formData: FieldValues) => {
    try {
      const res = await updateReview({ id, status: formData.status }).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Status update successfully");
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Somthing went wrong");
    }
  };
  return (
    <PASmallModal open={open} setOpen={setOpen} title="Update Status">
      <PAForm onSubmit={handleUpdatePets} defaultValues={defaultValue}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={12}>
            <PASelectField
              name="status"
              label="Status"
              items={reviewStatus}
              fullWidth={true}
              sx={{ width: "300px" }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Button
            type="submit"
            sx={{
              ":hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </PAForm>
    </PASmallModal>
  );
};

export default UpdateReviewStatus;
