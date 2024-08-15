import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PASelectField from "@/components/Formas/PASelectField";
import PAModal from "@/components/Shared/PAModal/PAModal";
import { useCreatePetsMutation } from "@/redux/api/allApi/petsApi";
import { Gender, Size } from "@/types/common";
import { Box, Button, Grid, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreatePetModal = ({ open, setOpen }: TProps) => {
  const [createPets] = useCreatePetsMutation();
  const handleCreatePets = async (values: FieldValues) => {
    // console.log(values);
    values.age = Number(values.age);
    try {
      const res = await createPets(values).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("pets created successfully");
        setOpen(false);
      }
    } catch (err) {
      toast.error("Somthing went wrong");
    }
  };
  return (
    <PAModal open={open} setOpen={setOpen} title="Create New Pet">
      <PAForm onSubmit={handleCreatePets}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <PAInput name="name" label="Name" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput name="species" label="Species" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput
              name="breed"
              label="Breed"
              placeholder="Breed"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput name="age" label="Age" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PASelectField
              name="size"
              label="Size"
              items={Size}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PASelectField
              name="gender"
              label="Gender"
              items={Gender}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput name="location" label="Location" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput
              name="specialNeeds"
              label="Special Needs"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput name="image" label="Image" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput name="helthStatus" label="Helth Status" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput
              name="description"
              type="message"
              label="Description"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput name="temperament" label="Temperament" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput
              name="medicalHistory"
              label="Medical History"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput
              name="adoptionRequirements"
              label="Adoption Requirements"
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
    </PAModal>
  );
};

export default CreatePetModal;
