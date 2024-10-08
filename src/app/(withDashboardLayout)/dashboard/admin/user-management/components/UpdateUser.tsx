import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PASelectField from "@/components/Formas/PASelectField";
import PASmallModal from "@/components/Shared/PAModal/PASmallModal";
import { useUpdateUsersMutation } from "@/redux/api/allApi/usersApi";
import { roleUser, userStatus } from "@/types/common";
import { Box, Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type defaultValue = {
  id: string;
  name: string;
  email: string;
  password: string;
  photo: string;
  role: string;
  needPasswordChange: boolean;
  status: string;
};
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  defaultValue: defaultValue;
};

const UpdateUser = ({ open, setOpen, id, defaultValue }: TProps) => {
  const [updateUsers] = useUpdateUsersMutation();

  const handleUpdateUser = async (formData: FieldValues) => {
    try {
      const res = await updateUsers({ id, ...formData }).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("User updated successfully");
        setOpen(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Somthing went wrong");
    }
  };
  return (
    <PASmallModal open={open} setOpen={setOpen} title="Update User">
      <PAForm onSubmit={handleUpdateUser} defaultValues={defaultValue}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <PASelectField
              name="role"
              label="Role"
              items={roleUser}
              fullWidth={true}
              sx={{ width: { xs: "100%", md: "500px" } }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <PASelectField
              name="status"
              label="Status"
              items={userStatus}
              fullWidth={true}
              sx={{ minWidth: { xs: "100%", md: "500px" } }}
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

export default UpdateUser;
