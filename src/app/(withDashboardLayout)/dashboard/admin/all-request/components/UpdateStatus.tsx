import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PASelectField from "@/components/Formas/PASelectField";
import PASmallModal from "@/components/Shared/PAModal/PASmallModal";
import { useUpdateRequestMutation } from "@/redux/api/allApi/adoptionRequestApi";
import { requestStatus, userStatus } from "@/types/common";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type pet = {
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
type user = {
  id: string;
  name: string;
  email: string;
  password: string;
  photo: string;
  role: string;
  needPasswordChange: boolean;
  status: string;
};
type defaultValue = {
  id: string;
  userId: string;
  petId: string;
  status: string;
  petOwnershipExperience: string;
  pet: pet;
  user: user;
};
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  defaultValue: defaultValue;
};
const UpdateStatus = ({ open, setOpen, id, defaultValue }: TProps) => {
  const [updateRequest] = useUpdateRequestMutation();
  console.log(id);

  const handleUpdatePets = async (formData: FieldValues) => {
    try {
      const res = await updateRequest({ id, status: formData.status }).unwrap();
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
              items={requestStatus}
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

export default UpdateStatus;
