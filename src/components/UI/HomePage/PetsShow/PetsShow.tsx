"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useGetAllpetsQuery } from "@/redux/api/allApi/petsApi";
import { useState } from "react";
import PetDetailsModal from "./PetDetailsModal";
import { useGetMeQuery } from "@/redux/api/allApi/usersApi";
import Link from "next/link";
import DropDown from "./DropDown";

const PetsShow = () => {
  const { data, isLoading } = useGetAllpetsQuery({});
  const { data: user, isLoading: loading } = useGetMeQuery({});

  const [modalOpen, setModalOpen] = useState(false);
  const [petSelected, setPetSelected] = useState<any>(null);
  const petsData = data?.data;
  //   console.log(user);
  //   console.log(petsData);
  const handleModalOpen = (pet: any) => {
    setPetSelected(pet);
    setModalOpen(true);
  };
  return (
    <Container sx={{ mt: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          my: "10px",
        }}
      >
        <Typography fontWeight={600} fontSize="40px">
          Find &
        </Typography>
        <Typography fontWeight={600} fontSize="40px" color="primary.main">
          Choose
        </Typography>
        <Typography fontWeight={600} fontSize="40px">
          Pet
        </Typography>
      </Box>
      <Stack direction="row" gap={6} justifyContent="center">
        <Box
          sx={{
            position: "relative",
            width: "600px",
          }}
        >
          <TextField
            placeholder="Search"
            size="small"
            fullWidth
            sx={{
              position: "absolute",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              right: 0,
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
        <Box>
          {/* <Button
            sx={{
              ":hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            Filter By
          </Button> */}
          <DropDown />
        </Box>
      </Stack>
      <Box mt="20px" sx={{}}>
        <Grid container spacing={2}>
          {!isLoading ? (
            petsData.map((pet: any, index: number) => {
              return (
                <Grid item key={index} sm={12} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 180 }}
                      image={pet.image}
                      title="green iguana"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <CardContent>
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
                            fontSize="15px"
                          >
                            Name:
                          </Typography>
                          <Typography
                            sx={{
                              color: "secondary.main",
                            }}
                            fontWeight={400}
                            fontSize="15px"
                          >
                            {" "}
                            {pet?.name}
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
                            fontSize="15px"
                          >
                            Size:
                          </Typography>
                          <Typography
                            sx={{
                              color: "secondary.main",
                            }}
                            fontWeight={400}
                            fontSize="15px"
                          >
                            {" "}
                            {pet?.size}
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
                            fontSize="15px"
                          >
                            Location:
                          </Typography>
                          <Typography
                            sx={{
                              color: "secondary.main",
                            }}
                            fontWeight={400}
                            fontSize="15px"
                          >
                            {" "}
                            {pet?.location}
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          bottom: 0,
                          mt: "15px",
                        }}
                      >
                        {user ? (
                          <Box>
                            <Button
                              size="small"
                              onClick={() => handleModalOpen(pet)}
                              sx={{
                                ":hover": {
                                  backgroundColor: "secondary.main",
                                },
                              }}
                            >
                              See Details
                            </Button>
                            {petSelected && (
                              <PetDetailsModal
                                open={modalOpen}
                                setOpen={setModalOpen}
                                petsData={petSelected}
                              />
                            )}
                          </Box>
                        ) : (
                          <Box component={Link} href="/login">
                            <Button
                              sx={{
                                ":hover": {
                                  backgroundColor: "secondary.main",
                                },
                              }}
                            >
                              See Details
                            </Button>
                          </Box>
                        )}
                      </CardActions>
                    </Box>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default PetsShow;
