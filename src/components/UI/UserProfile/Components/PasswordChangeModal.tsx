import PAForm from "@/components/Formas/PAForm";
import PAInput from "@/components/Formas/PAInput";
import PASmallModal from "@/components/Shared/PAModal/PASmallModal";
import { useChangePasswordMutation } from "@/redux/api/allApi/usersApi";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
// export type TDefaultValue = {
//   oldPassword: string;
//   newPassword: string;
// };
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const validationSchema = z.object({
  oldPassword: z.string().min(5, "Your Password not match"),
  newPassword: z.string().min(5, "Your Password must be at least 5 character"),
});

const PasswordChangeModal = ({ open, setOpen }: TProps) => {
  const [changePassword] = useChangePasswordMutation();
  const handleChangeMyPassword = async (formData: FieldValues) => {
    try {
      const res = await changePassword(formData).unwrap();
      console.log(res);
      if (res?.message) {
        toast.success("Change password successfully");
        setOpen(false);
      }
    } catch (err) {
      toast.error("Somthing went wrong");
    }
  };
  return (
    <PASmallModal open={open} setOpen={setOpen} title="Change Your Password">
      <PAForm
        onSubmit={handleChangeMyPassword}
        defaultValues={{ oldPassword: "", newPassword: "" }}
        // resolver={validationSchema}
      >
        <Grid container spacing={2}>
          <Grid item sm={12} md={12}>
            <PAInput name="oldPassword" label="oldPassword" fullWidth={true} />
          </Grid>

          <Grid item sm={12} md={12}>
            <PAInput name="newPassword" label="newPassword" fullWidth={true} />
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

export default PasswordChangeModal;
