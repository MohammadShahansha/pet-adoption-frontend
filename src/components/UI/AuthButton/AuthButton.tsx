import { getUserInfo, removeUserInfo } from "@/serviece/authService";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getUserInfo();
  console.log(userInfo);
  const handleLogout = () => {
    removeUserInfo();
    router.refresh();
  };
  return (
    <>
      {userInfo?.email ? (
        <Button color="error" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
