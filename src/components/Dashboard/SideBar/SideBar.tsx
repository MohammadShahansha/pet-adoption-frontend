import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "@/assets/logo/logo.webp";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  const drawer = (
    <div>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="5px"
        mt={1}
        py={1}
        component={Link}
        href="/"
      >
        <Image src={logo} alt="Logo" width={40} height={40} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="h1" sx={{}}>
            P
          </Typography>
          <Typography variant="h6" component="h1" color="primary.main">
            et
          </Typography>
          <Typography variant="h6" component="h1" sx={{}} ml={1}>
            Adoption
          </Typography>
        </Box>
      </Stack>
      {drawer}
    </div>
  );
};

export default SideBar;
