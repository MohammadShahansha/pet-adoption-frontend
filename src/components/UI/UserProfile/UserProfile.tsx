"use client";
import { useGetMeQuery } from "@/redux/api/allApi/usersApi";
import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import UserUpdateModal from "./Components/UserUpdateModal";
import PasswordChangeModal from "./Components/PasswordChangeModal";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";
const UserProfile = () => {
  const { data: myData, isLoading } = useGetMeQuery({});

  const [userModalOpen, setUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [selectForPass, setSellectForPass] = useState<any>(null);
  // console.log("myData:", myData);
  const handleUpdateProfile = (userData: any) => {
    setSelectedUser(userData);
    setUserModalOpen(true);
  };

  const handleChangePassword = (userData: any) => {
    setSellectForPass(userData);
    setChangePasswordModalOpen(true);
  };
  return (
    <Box>
      <Box>
        {!isLoading ? (
          <DashboardBanner
            title="Personal Information"
            routeLink="/dashboard/admin/profile"
            selfName="Profile"
          />
        ) : (
          <BannerLoader />
        )}
      </Box>
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
                  onClick={() => handleChangePassword(myData)}
                  sx={{
                    ":hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                >
                  Change Password
                </Button>

                {selectForPass && (
                  <PasswordChangeModal
                    open={changePasswordModalOpen}
                    setOpen={setChangePasswordModalOpen}
                  />
                )}
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
        <Box>
          <Box sx={{ display: "flex", gap: "100px" }}>
            <Skeleton width={400} height={400} sx={{ mt: "-80px" }} />
            <Box>
              <Skeleton width="250px" height="40px" />
              <Skeleton width="250px" height="40px" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              mt: "-80px",
            }}
          >
            <Skeleton
              sx={{
                width: "180px",
                height: "70px",
                borderRadius: "5px",
                my: "10px",
              }}
            />
            <Skeleton
              sx={{
                width: "180px",
                height: "70px",
                borderRadius: "5px",
                my: "10px",
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UserProfile;
