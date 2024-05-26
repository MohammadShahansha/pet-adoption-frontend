import PAModal from "@/components/Shared/PAModal/PAModal";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

type TPet = {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  size: string;
  gender: string;
  location: string;
  specialNeeds: string;
  image: string;
  helthStatus: string;
  description: string;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
};
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  petsData: TPet;
};
const PetDetailsModal = ({ open, setOpen, petsData }: TProps) => {
  console.log(petsData);
  return (
    <PAModal
      open={open}
      setOpen={setOpen}
      title="See Detail to Choose and Adoption a Pet"
    >
      <Container>
        <Stack>
          <Grid container spacing={10}>
            <Grid item sm={12} md={4}>
              <Image
                src={petsData?.image}
                alt="Pet Image"
                width={400}
                height={400}
              />
            </Grid>
            <Grid item sm={12} md={4}>
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
                  fontWeight={600}
                  fontSize="20px"
                >
                  Name:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {" "}
                  {petsData?.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={600}
                  fontSize="20px"
                >
                  Age:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {petsData?.age} Months
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={600}
                  fontSize="20px"
                >
                  Size:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {petsData?.size}
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
                  fontWeight={600}
                  fontSize="20px"
                >
                  Species:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {" "}
                  {petsData.species}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={600}
                  fontSize="20px"
                >
                  Gender:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {petsData.gender}
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
                  fontWeight={600}
                  fontSize="20px"
                >
                  Breed:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {" "}
                  {petsData.breed}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={600}
                  fontSize="20px"
                >
                  Special_Needs:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {petsData.specialNeeds}
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
                  fontWeight={600}
                  fontSize="20px"
                >
                  Helth_Status:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {" "}
                  {petsData.helthStatus}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={600}
                  fontSize="20px"
                >
                  Gender:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {petsData.gender}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  my: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={600}
                  fontSize="20px"
                >
                  Location:
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                  }}
                  fontWeight={400}
                  fontSize="20px"
                >
                  {petsData.location}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={12} md={4}>
              <Box>
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={500}
                  fontSize="15px"
                >
                  Adoption_Requirement:
                </Typography>
                <Typography fontWeight={500} fontSize="15px">
                  {petsData.adoptionRequirements}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={500}
                  fontSize="15px"
                >
                  Medical_History:
                </Typography>
                <Typography fontWeight={500} fontSize="15px">
                  {petsData.medicalHistory}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={500}
                  fontSize="15px"
                >
                  Temperament:
                </Typography>
                <Typography fontWeight={500} fontSize="15px">
                  {petsData.temperament}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "primary.main",
                  }}
                  fontWeight={500}
                  fontSize="15px"
                >
                  Description:
                </Typography>
                <Typography fontWeight={500} fontSize="15px">
                  {petsData.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </PAModal>
  );
};

export default PetDetailsModal;
