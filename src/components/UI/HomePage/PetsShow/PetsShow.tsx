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

const PetsShow = () => {
  const { data, isLoading } = useGetAllpetsQuery({});
  const { data: user, isLoading: loading } = useGetMeQuery({});
  const forLoading = [1, 2, 3, 4, 5];

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
    <Box sx={{ backgroundColor: "rgba(1,201,214,0.1)", py: "80px" }}>
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
          <Typography fontWeight={600} fontSize="40px" color="black">
            Find & Choose Pet
          </Typography>
        </Box>
        <Stack direction="row" gap={6} justifyContent="center" my="20px">
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
              value={searchTerm}
              onChange={handleSearchTerm}
              // value={searchTerm}
              // onChange={handleSearchChange}
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
          <Box sx={{ display: "flex", gap: "20px" }}>
            <FilterBySize onSizeSelect={handleSelectSize} />
            <FilterByGender onGenderSelect={handleSelectGender} />
          </Box>
        </Stack>
        <Box mt="20px" sx={{}}>
          <Grid container spacing={2}>
            {!isLoading ? (
              filteredPets?.map((pet: any, index: number) => {
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
