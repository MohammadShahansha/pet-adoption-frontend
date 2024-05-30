import { getUserInfo, removeUserInfo } from "@/serviece/authService";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import { useGetMeQuery } from "@/redux/api/allApi/usersApi";
import UserProfileShow from "./UserProfileShow";

const AuthButton = () => {
  const userInfo = getUserInfo();

  return (
    <>
      {userInfo?.email ? (
        // <button onClick={handleLogout}>
        //   <Avatar alt="Remy Sharp" src={myData?.photo} />
        // </button>
        <UserProfileShow />
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
