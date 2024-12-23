"use client";

import { useGetMeQuery } from "@/redux/api/allApi/usersApi";
import {
  Box,
  Button,
  Skeleton,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import UserUpdateModal from "./Components/UserUpdateModal";
import PasswordChangeModal from "./Components/PasswordChangeModal";
import DashboardBanner from "@/components/Shared/DashboardBanner/DashboardBanner";
import BannerLoader from "@/components/Shared/DashboardBanner/BannerLoader";
import ApprovedRequest from "@/components/Profile/UserProfile/ApprovedRequest";

const UserProfile = () => {
  const { data: myData, isLoading } = useGetMeQuery({});
  console.log(myData);

  const [userModalOpen, setUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
  const [selectForPass, setSellectForPass] = useState(null);

  const handleUpdateProfile = (userData: any) => {
    setSelectedUser(userData);
    setUserModalOpen(true);
  };

  const handleChangePassword = (userData: any) => {
    setSellectForPass(userData);
    setChangePasswordModalOpen(true);
  };

  return (
    <Box sx={{ mx: { xs: "5px", md: "10px" } }}>
      {/* Banner Section */}
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

      {/* Main Profile Section */}
      {!isLoading ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Profile Card */}

          <Card
            sx={{
              display: { xs: "col", md: "flex" },
              flexDirection: "row",
              alignItems: "center",
              p: "20px",
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#e0f7fa", // Soft teal background
                borderRadius: "50%",
                overflow: "hidden",
                width: "150px",
                height: "150px",
              }}
            >
              <Image
                src={myData?.photo}
                alt="profile"
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
              />
            </Box>

            <CardContent sx={{ ml: "20px", flex: 1 }}>
              <Typography variant="h5" fontWeight={600} color="primary.main">
                {myData?.name || "User Name"}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                Email: {myData?.email || "user@example.com"}
              </Typography>

              <Box sx={{ display: "flex", gap: "10px", mt: "20px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleChangePassword(myData)}
                >
                  Change Password
                </Button>
                {selectForPass && (
                  <PasswordChangeModal
                    open={changePasswordModalOpen}
                    setOpen={setChangePasswordModalOpen}
                  />
                )}

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleUpdateProfile(myData)}
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
            </CardContent>
          </Card>

          {/* Approved Requests Section */}
          {myData?.role === "USER" ? (
            <Box>
              <ApprovedRequest />
            </Box>
          ) : (
            ""
          )}
        </Box>
      ) : (
        /* Skeleton Loader */
        <Box>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Skeleton variant="circular" width={150} height={150} />
            <Box>
              <Skeleton width="200px" height="40px" />
              <Skeleton width="300px" height="20px" sx={{ mt: "10px" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              mt: "20px",
              alignItems: "center",
            }}
          >
            <Skeleton width="120px" height="50px" />
            <Skeleton width="120px" height="50px" />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UserProfile;
