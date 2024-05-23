"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo/logo.webp";
import Image from "next/image";
import PAForm from "@/components/Formas/PAForm";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import PAInput from "@/components/Formas/PAInput";
import Link from "next/link";
import { userRegister } from "@/serviece/Actions/UserRegister";
import { toast } from "sonner";
import { userLogin } from "@/serviece/Actions/UserLogin";
import { storeUserInfo } from "@/serviece/authService";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    console.log(values);
    try {
      const res = await userRegister(values);
      console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        router.push("/login");
        const directLoggin = await userLogin({
          email: values.email,
          password: values.password,
        });
        console.log(res);
        if (directLoggin?.data?.token) {
          storeUserInfo({ accessToken: directLoggin?.data?.token });
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.log(err.messsage);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={logo} alt="logo" width={50} height={50}></Image>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography variant="h5" mt={1} fontWeight={600}>
                SignUp
              </Typography>
              <Typography
                variant="h5"
                mt={1}
                color="primary.main"
                fontWeight={600}
              >
                Pet
              </Typography>
              <Typography variant="h5" mt={1} fontWeight={600}>
                Adaption
              </Typography>
            </Box>
          </Stack>
          <Box mt={3}>
            <PAForm
              onSubmit={handleRegister}
              // resolver={zodResolver(validationSchema)}
              // defaultValues={defaultValues}
            >
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <PAInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item md={6}>
                  <PAInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <PAInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <PAInput
                    label="Photo"
                    placeholder="Photo"
                    fullWidth={true}
                    name="photo"
                  />
                </Grid>
                <Grid item md={6}>
                  <PAInput
                    label="role"
                    placeholder="Role"
                    fullWidth={true}
                    name="role"
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth={true}
                sx={{
                  marginTop: "20px",
                  ":hover": {
                    backgroundColor: "#111e42",
                  },
                }}
                type="submit"
              >
                Register
              </Button>
              <Typography
                component="p"
                fontWeight={300}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Do you have an account?
                <Link href="/login">
                  <Box color="primary.main">Login</Box>
                </Link>
              </Typography>
            </PAForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
