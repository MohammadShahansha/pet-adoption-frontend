"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import { useState } from "react";
import PAForm from "@/components/Formas/PAForm";
import Link from "next/link";
import PAInput from "@/components/Formas/PAInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { userLogin } from "@/serviece/Actions/UserLogin";
import { toast } from "sonner";
import { storeUserInfo } from "@/serviece/authService";
import { useRouter } from "next/navigation";
import bgImage from "@/assets/images/loginImg.png";

const demoCredentials = [
  { role: "ADMIN", email: "yeasin@gmail.com", password: "12345" },

  { role: "USER", email: "jihad@gmail.com", password: "12345" },
];

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [defaultValues, setDefaultValues] = useState({
    email: "yeasin@gmail.com",
    password: "12345",
  });
  const setDemoCredentials = (email: string, password: string) => {
    setDefaultValues({ email, password });
  };

  const handleLoggin: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    try {
      const res = await userLogin(values);
      console.log(res);
      if (res?.data?.token) {
        toast.success("user login successfully");
        storeUserInfo({ accessToken: res?.data?.token });
        router.refresh();
        router.push(`/dashboard/${res?.data?.role?.toLowerCase()}`);
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      console.log("here are some problem");
    }
  };

  console.log(defaultValues);
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
            <Box>
              <Typography variant="h5" fontWeight={600}>
                Login Please!!
              </Typography>
            </Box>
          </Stack>
          <Stack sx={{ mx: "auto" }}>
            {/* <Box sx={{ mx: "auto" }}>
              <Typography component="p" fontWeight={500} color="black">
                Admin Gmail: yeasin@gmail.com
              </Typography>
              <Typography component="p" fontWeight={500} color="black">
                Admin Password: 12345
              </Typography>
            </Box>
            <Box mt={4} sx={{ mx: "auto" }}>
              <Typography component="p" fontWeight={500} color="black">
                User Gmail: jihad@gmail.com
              </Typography>
              <Typography component="p" fontWeight={500} color="black">
                User Password: 12345
              </Typography>
            </Box> */}

            {demoCredentials.map(({ role, email, password }) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  justifyItems: "center",
                  mt: "20px",
                }}
                // className="flex justify-between items-center mt-4"
                key={role}
              >
                <Box>
                  <h3 className="text-md text-gray-500">{role}:</h3>
                  <p className="text-sm text-gray-600">Email - {email}</p>
                  <p className="text-sm text-gray-600">Pass - {password}</p>
                </Box>
                <Box>
                  <Button
                    type="button"
                    sx={{
                      color: "white",
                      ":hover": {
                        backgroundColor: "#111e42",
                      },
                    }}
                    // className="text-white rounded px-2 py-1"
                    onClick={() => setDemoCredentials(email, password)}
                  >
                    {role} Login
                  </Button>
                </Box>
              </Box>
            ))}
          </Stack>
          {error && (
            <Box
              sx={{
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box mt={3}>
            <PAForm onSubmit={handleLoggin} defaultValues={defaultValues}>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <PAInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <PAInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
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
                {" "}
                Submit
              </Button>
              <Typography
                component="p"
                fontWeight={300}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Don&apos;t have an account?
                <Link href="/register">
                  <Box color="primary.main">Register</Box>
                </Link>
              </Typography>
            </PAForm>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default LoginPage;
