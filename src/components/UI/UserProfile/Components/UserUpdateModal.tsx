import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PASmallModal from "@/components/Shared/PAModal/PASmallModal";
import { useUpdateMeMutation } from "@/redux/api/allApi/usersApi";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type defaultValue = {
  id: string;
  name: string;
  email: string;
  photo: string;
};
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: defaultValue;
};
const UserUpdateModal = ({ open, setOpen, userInfo }: TProps) => {
  const [updateMe] = useUpdateMeMutation();
  const handleUpdateMe = async (formData: FieldValues) => {
    try {
      const res = await updateMe(formData).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("pets updated successfully");
        setOpen(false);
      }
    } catch (err) {
      toast.error("Somthing went wrong");
    }
  };
  return (
    <PASmallModal open={open} setOpen={setOpen} title="Update User">
      <PAForm onSubmit={handleUpdateMe} defaultValues={userInfo}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <PAInput name="name" label="Name" fullWidth={true} />
          </Grid>

          <Grid item xs={12} md={12}>
            <PAInput name="photo" label="Choose Image Link" fullWidth={true} />
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

export default UserUpdateModal;
