import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PASmallModal from "@/components/Shared/PAModal/PASmallModal";
import { useCreateAdoptionRequestMutation } from "@/redux/api/allApi/adoptionRequestApi";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};
const SendRequest = ({ open, setOpen, id }: TProps) => {
  const [createAdoptionRequest] = useCreateAdoptionRequestMutation();
  // console.log(id);
  const handleSendRequest = async (values: FieldValues) => {
    // console.log(values);
    const petId = id;
    try {
      const res = await createAdoptionRequest({ petId, ...values }).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("adoption request created successfully");
        setOpen(false);
      }
    } catch (err) {
      toast.error("Somthing went wrong");
    }
  };
  return (
    <PASmallModal open={open} setOpen={setOpen} title="Send a Request">
      <PAForm onSubmit={handleSendRequest}>
        <Grid
          container
          spacing={4}
          sx={{ width: { xs: "300px", md: "500px" } }}
        >
          <Grid item sm={12} md={12} sx={{ width: "100%" }}>
            <PAInput
              name="petOwnershipExperience"
              label="Pet Ownership Experience"
              fullWidth={true}
            ></PAInput>
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

export default SendRequest;
