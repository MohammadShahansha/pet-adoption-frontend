"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import logo from "@/assets/logo/logo.webp";
import Image from "next/image";
import { z } from "zod";
import { useState } from "react";
import PAForm from "@/components/Formas/PAForm";
import Link from "next/link";
import PAInput from "@/components/Formas/PAInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { userLogin } from "@/serviece/Actions/UserLogin";
import { toast } from "sonner";
import { storeUserInfo } from "@/serviece/authService";
import { useRouter } from "next/navigation";

export const validatinSchema = z.object({
  email: z.string().email("Please inter a valid email"),
  password: z.string().min(5, "Must be at least 5 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLoggin: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    try {
      const res = await userLogin(values);
      console.log(res);
      if (res?.data?.token) {
        toast.success("user login successfully");
        storeUserInfo({ accessToken: res?.data?.token });
        router.push("/dashboard");
      } else {
        setError(res.message);
      }
    } catch (err: any) {
      console.log("here are some problem");
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
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={logo} alt="logo" width={50} height={50}></Image>
            </Box>
            <Box>
              <Typography variant="h5" mt={1} fontWeight={600}>
                Login Pet Adaption
              </Typography>
            </Box>
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
            <PAForm
              onSubmit={handleLoggin}
              // resolver={zodResolver(validatinSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
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
              <Typography
                fontWeight={300}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                Forget password?
              </Typography>
              <Button
                sx={{
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
    </Container>
  );
};

export default LoginPage;
