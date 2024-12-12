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
  Skeleton,
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
import FilterBySize from "./FilterBySize";
import FilterByGender from "./FilterByGender";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const PetsShow = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { data, isLoading } = useGetAllpetsQuery({});
  const { data: user, isLoading: loading } = useGetMeQuery({});
  const forLoading = [1, 2, 3];

  const [modalOpen, setModalOpen] = useState(false);
  const [petSelected, setPetSelected] = useState<any>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const petsData = data?.data;

  const handleModalOpen = (pet: any) => {
    setPetSelected(pet);
    setModalOpen(true);
  };

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
  };
  const handleSelectGender = (gender: string) => {
    setSelectedGender(gender);
  };

  const filteredPets = petsData
    ?.filter((pet: any) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((pet: any) => (selectedSize ? pet.size === selectedSize : true))
    .filter((pet: any) =>
      selectedGender ? pet.gender === selectedGender : true
    );

  return (
    <Box
      sx={{
        // backgroundColor: "rgba(1,201,214,0.1)",
        backgroundColor: "white",
        py: isSmallScreen ? "30px" : "50px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            my: "10px",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={500}
            color="black"
            sx={{
              // fontWeight: isSmallScreen ? 500 : 500,
              fontSize: isSmallScreen ? "30px" : "35px",
              mb: isSmallScreen ? "70px" : "0px",
            }}
          >
            Find & Choose Pet
          </Typography>
        </Box>
        <Box
          // gap={6}
          my="20px"
          sx={{
            display: isSmallScreen ? "col" : "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "600px" },
              alignContent: "center",
            }}
          >
            <TextField
              placeholder="Search"
              size="small"
              fullWidth
              value={searchTerm}
              onChange={handleSearchTerm}
              sx={{
                position: "absolute",
                bottom: isSmallScreen ? "30px" : 0,
                width: isSmallScreen ? "100%" : "100%",
                // pl: isSmallScreen ? "20px" : "",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                right: isSmallScreen ? "10px" : 0,
                bottom: isSmallScreen ? "30px" : 0,
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: isSmallScreen ? "center" : "",
              gap: "10px",
            }}
          >
            <FilterBySize onSizeSelect={handleSelectSize} />
            <FilterByGender onGenderSelect={handleSelectGender} />
            <Link href="/allPets">
              <Box
                sx={{
                  backgroundColor: "primary.main",
                  px: "20px",
                  py: "10px",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  fontFamily: "sans-serif",
                  // fontFamily: 'IBM Plex Sans', sans-serif;
                  ":hover": {
                    backgroundColor: "secondary.main",
                  },
                }}
              >
                All Pets
              </Box>
            </Link>
          </Box>
        </Box>
        <Box mt="30px">
          <Grid container spacing={2}>
            {!isLoading ? (
              filteredPets?.slice(0, 3)?.map((pet: any, index: number) => {
                return (
                  <Grid
                    item
                    key={index}
                    sm={12}
                    md={6}
                    lg={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Card sx={{ width: "100%" }}>
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
                          <Box>
                            {/* <Button
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
                            )} */}
                            <Link href={`/seeDetails/${pet?.id}`}>
                              <Button
                                size="small"
                                // onClick={() => handleModalOpen(pet)}
                                sx={{
                                  ":hover": {
                                    backgroundColor: "secondary.main",
                                  },
                                }}
                              >
                                See Details
                              </Button>
                              {/* {petSelected && (
                                <PetDetailsModal
                                  open={modalOpen}
                                  setOpen={setModalOpen}
                                  petsData={petSelected}
                                />
                              )} */}
                            </Link>
                          </Box>
                          {/* {user ? (
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
                          )} */}
                        </CardActions>
                      </Box>
                    </Card>
                  </Grid>
                );
              })
            ) : (
              <Box mt="20px">
                <Grid container spacing={2}>
                  {forLoading.map((item: number, index: number) => {
                    return (
                      <Grid item sm={12} md={4} key={index}>
                        <Skeleton
                          variant="rectangular"
                          width={350}
                          height={180}
                        />
                        <Box sx={{ pt: 0.5, display: "flex" }}>
                          <Box>
                            <Skeleton animation="wave" width="220px" />
                            <Skeleton animation="wave" width="180px" />
                            <Skeleton animation="wave" width="150px" />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "end",
                              mt: "30px",
                            }}
                          >
                            <Skeleton
                              animation="wave"
                              width="120px"
                              height="60px"
                            />
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PetsShow;
