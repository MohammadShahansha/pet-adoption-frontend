import { Button } from "@mui/material";

const CommonButton = ({ buttonName }: { buttonName: string }) => {
  return (
    <Button
      sx={{
        ":hover": {
          backgroundColor: "#111e42",
        },
      }}
    >
      {buttonName}
    </Button>
  );
};

export default CommonButton;
