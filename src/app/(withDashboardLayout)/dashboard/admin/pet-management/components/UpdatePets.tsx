import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PASelectField from "@/components/Formas/PASelectField";
import PAModal from "@/components/Shared/PAModal/PAModal";
import {
  useCreatePetsMutation,
  useGetSinglePetsQuery,
  useUpdatePetMutation,
} from "@/redux/api/allApi/petsApi";
import { Gender, Size } from "@/types/common";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type defaultValue = {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  size: string;
  gender: string;
  location: string;
  specialNeeds: string;
  image: string;
  helthStatus: string;
  description: string;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
};

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  defaultValue: defaultValue;
  // scroll: "body" | "paper" | undefined;
};
const UpdatePets = ({ open, setOpen, id, defaultValue }: TProps) => {
  const [updatePet] = useUpdatePetMutation();

  const handleUpdatePets = async (formData: FieldValues) => {
    try {
      const res = await updatePet({ id, ...formData }).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("pets updated successfully");
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Somthing went wrong");
    }
  };
  return (
    <PAModal open={open} setOpen={setOpen} title="Update Pet">
      <PAForm onSubmit={handleUpdatePets} defaultValues={defaultValue}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <PAInput name="name" label="Name" fullWidth={true} />
          </Grid>
          <Grid item xs={6} md={4}>
            <PAInput name="species" label="Species" fullWidth={true} />
          </Grid>
          <Grid item xs={6} md={4}>
            <PAInput
              name="breed"
              label="Breed"
              placeholder="Breed"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <PAInput name="age" label="Age" fullWidth={true} />
          </Grid>
          <Grid item xs={6} md={4}>
            <PASelectField
              name="size"
              label="Size"
              items={Size}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <PASelectField
              name="gender"
              label="Gender"
              items={Gender}
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <PAInput name="location" label="Location" fullWidth={true} />
          </Grid>
          <Grid item xs={6} md={4}>
            <PAInput
              name="specialNeeds"
              label="Special Needs"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <PAInput name="image" label="Image" fullWidth={true} />
          </Grid>
          <Grid item xs={6} md={4}>
            <PAInput name="helthStatus" label="Helth Status" fullWidth={true} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PAInput name="description" label="Description" fullWidth={true} />
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
export default UpdatePets;
