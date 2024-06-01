import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PASmallModal from "@/components/Shared/PAModal/PASmallModal";
import { useCreateReviewMutation } from "@/redux/api/allApi/reviewApi";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateReviewModal = ({ open, setOpen }: TProps) => {
  const [createReview] = useCreateReviewMutation();
  const handleSendReview = async (formData: FieldValues) => {
    try {
      const res = await createReview(formData).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Review Send successfully");
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Somthing went wrong");
    }
  };
  return (
    <PASmallModal open={open} setOpen={setOpen} title="Send a Review">
      <PAForm onSubmit={handleSendReview}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={12}>
            <PAInput name="rating" label="Rating" fullWidth={true} />
          </Grid>

          <Grid item sm={12} md={12}>
            <PAInput
              name="reviewDescription"
              label="Write Your Review Here"
              fullWidth={true}
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

export default CreateReviewModal;
