"use client";
import { useGetMeQuery } from "@/redux/api/allApi/usersApi";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import UserUpdateModal from "./Components/UserUpdateModal";
const UserProfile = () => {
  const { data: myData, isLoading } = useGetMeQuery({});

  const [userModalOpen, setUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  console.log("myData:", myData);

  const handleUpdateProfile = (userData: any) => {
    setSelectedUser(userData);
    setUserModalOpen(true);
  };
  return (
    <Box>
      {!isLoading ? (
        <Box
          sx={{
            display: "flex",
            gap: "100px",
          }}
        >
          <Box>
            <Image src={myData?.photo} alt="profile" width={400} height={400} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                gap: "20px",
                mt: "20px",
              }}
            >
              <Box>
                <Button
                  sx={{
                    ":hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                >
                  Change Password
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => handleUpdateProfile(myData)}
                  sx={{
                    ":hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                >
                  Update Profile
                </Button>
                {selectedUser && (
                  <UserUpdateModal
                    open={userModalOpen}
                    setOpen={setUserModalOpen}
                    userInfo={selectedUser}
                  />
                )}
              </Box>
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
                fontWeight={600}
                fontSize="25px"
              >
                Name:
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                }}
                fontWeight={400}
                fontSize="25px"
              >
                {" "}
                {myData?.name}
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
                fontSize="25px"
              >
                Email:
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                }}
                fontWeight={400}
                fontSize="25px"
              >
                {" "}
                {myData?.email}
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Typography>Loading....</Typography>
      )}
    </Box>
  );
};

export default UserProfile;
