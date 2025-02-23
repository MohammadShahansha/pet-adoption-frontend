"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo/logo.png";
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
import bgImage from "@/assets/images/loginImg.png";

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    console.log(values);
    try {
      const res = await userRegister(values);
      if (res?.data?.id) {
        toast.success(res?.message);
        router.push("/login");
        const directLoggin = await userLogin({
          email: values.email,
          password: values.password,
        });
        // console.log(res);
        if (directLoggin?.data?.token) {
          storeUserInfo({ accessToken: directLoggin?.data?.token });
          router.push(`/dashboard/${directLoggin?.data?.role.toLowerCase()}`);
        }
      }
    } catch (err: any) {
      console.log(err.messsage);
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          filter: "blur(10px)",
        },
      }}
    >
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
                SignUp Please!!
              </Typography>
            </Box>
          </Stack>
          <Box mt={3}>
            <PAForm onSubmit={handleRegister}>
              <Grid container spacing={3}>
                <Grid item md={12} sx={{ width: "100%" }}>
                  <PAInput label="Name" fullWidth={true} name="name" />
                </Grid>
                <Grid item md={12} sx={{ width: "100%" }}>
                  <PAInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={12} sx={{ width: "100%" }}>
                  <PAInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>

                {/* <Grid item md={12}>
                  <PAInput label="Photo_URL" fullWidth={true} name="photo" />
                </Grid> */}
                {/* <Grid item md={6}>
                  <PAInput
                    label="role"
                    placeholder="Role"
                    fullWidth={true}
                    name="role"
                  />
                </Grid> */}
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
    </Box>
  );
};

export default RegisterPage;
