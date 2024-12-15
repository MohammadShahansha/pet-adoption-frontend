"use client";
import SendRequest from "@/app/(withDashboardLayout)/dashboard/user/pet-information/components/SendRequest";
import { useGetSinglePetsQuery } from "@/redux/api/allApi/petsApi";
import { getUserInfo } from "@/serviece/authService";
import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SeeDetails = ({ params }: any) => {
  console.log(params?.id);
  const router = useRouter();
  const user = getUserInfo();
  //   console.log(user);
  const { data, isLoading } = useGetSinglePetsQuery(params?.id);
  console.log(data);
  const [reqModalOpen, setReqModalOpen] = useState<boolean>(false);
  const [selectPetId, setSelectPetId] = useState<any>(null);
  const handleSendRequest = (id: string) => {
    console.log(id);
    if (!user) {
      router.push("/login");
    }
    setSelectPetId(id);
    setReqModalOpen(true);
  };
  console.log(selectPetId);
  return (
    <Box
      sx={{
        mt: "90px",
      }}
    >
      {!isLoading ? (
        <Container>
          <Stack>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>
                <Image
                  src={data?.image}
                  alt="Pet Image"
                  width={400}
                  height={400}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <Box>
                  <Box
                    sx={{
                      display: { md: "flex" },
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "100px",
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Name:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {" "}
                          {data?.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          // my: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Age:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {data?.age} Months
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          // my: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Size:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {data?.size}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Species:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {" "}
                          {data?.species}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          // my: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Gender:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {data?.gender}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Breed:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {" "}
                          {data?.breed}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          // my: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Special_Needs:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {data?.specialNeeds}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Helth_Status:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {" "}
                          {data?.helthStatus}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          // my: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Gender:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {data?.gender}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          // my: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "primary.main",
                          }}
                          fontWeight={500}
                          fontSize="18px"
                        >
                          Location:
                        </Typography>
                        <Typography
                          sx={{
                            color: "secondary.main",
                          }}
                          fontWeight={400}
                          fontSize="18px"
                        >
                          {data?.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "40px",
                    }}
                  >
                    <Button
                      onClick={() => handleSendRequest(data?.id)}
                      sx={{
                        backgroundColor: "primary.main",
                        ":hover": {
                          backgroundColor: "secondary.main",
                        },
                        mr: "20px",
                      }}
                    >
                      Adopt Pet
                    </Button>

                    {selectPetId && (
                      <SendRequest
                        open={reqModalOpen}
                        setOpen={setReqModalOpen}
                        id={selectPetId}
                      />
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} my="35px">
              <Grid item sm={12} md={12}>
                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      mb: "5px",
                    }}
                    fontWeight={500}
                    fontSize="15px"
                  >
                    Adoption_Requirement:
                  </Typography>
                  <Typography fontWeight={500} fontSize="15px">
                    {data?.adoptionRequirements}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      mt: "10px",
                      mb: "5px",
                    }}
                    fontWeight={500}
                    fontSize="15px"
                  >
                    Medical_History:
                  </Typography>
                  <Typography fontWeight={500} fontSize="15px">
                    {data?.medicalHistory}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      mt: "10px",
                      mb: "5px",
                    }}
                    fontWeight={500}
                    fontSize="15px"
                  >
                    Temperament:
                  </Typography>
                  <Typography fontWeight={500} fontSize="15px">
                    {data?.temperament}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      mt: "10px",
                      mb: "5px",
                    }}
                    fontWeight={500}
                    fontSize="15px"
                  >
                    Description:
                  </Typography>
                  <Typography fontWeight={500} fontSize="15px">
                    {data?.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      ) : (
        <Container>
          <Stack>
            <Grid container spacing={2}>
              <Grid
                item
                sm={12}
                md={6}
                sx={{
                  mt: "-100px",
                }}
              >
                <Skeleton sx={{ width: "400px", height: "400px" }} />
              </Grid>
              <Grid
                item
                sm={12}
                md={6}
                sx={{
                  mt: "-30px",
                }}
              >
                <Skeleton sx={{ width: "400px", height: "70px" }} />
                <Skeleton sx={{ width: "400px", height: "70px" }} />
                <Skeleton sx={{ width: "400px", height: "70px" }} />
                <Skeleton sx={{ width: "400px", height: "70px" }} />
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: "-50px",
              }}
            >
              <Skeleton
                sx={{ width: "fullWidth", height: "200px", my: "0px" }}
              />
              <Skeleton
                sx={{ width: "fullWidth", height: "200px", my: "-50px" }}
              />
              <Skeleton sx={{ width: "fullWidth", height: "200px" }} />
            </Box>
          </Stack>
        </Container>
      )}
    </Box>
  );
};

export default SeeDetails;
