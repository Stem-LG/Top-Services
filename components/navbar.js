import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Grid,
  Button,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
  Newspaper as NewspaperIcon,
  Photo as PhotoIcon,
  Info as InfoIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";

function NavBar(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  let actions = [
    { title: "Home", route: "#", icon: <HomeIcon /> },
    // { title: "Blog", route: "#", icon: <NewspaperIcon /> },
    { title: "Gallery", route: "#gallery", icon: <PhotoIcon /> },
    // { title: "About", route: "#", icon: <InfoIcon /> },
    { title: "Contact", route: "#contact", icon: <EmailIcon /> },
  ];

  return (
    <>
      <Box height={{ xs: "48px", sm: "64px" }} />
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <>
            <IconButton
              aria-label="menu"
              onClick={() => {
                setDrawerIsOpen(true);
              }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerIsOpen}
              onClose={() => {
                setDrawerIsOpen(false);
              }}
            >
              <List sx={{ width: 280 }}>
                {actions.map((action, key) => (
                  <a
                    href={action.route}
                    style={{ textDecoration: "none" }}
                    key={key}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{action.icon}</ListItemIcon>
                        <ListItemText>
                          <Typography variant="body1">
                            {action.title}
                          </Typography>{" "}
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </a>
                ))}
                
              </List>
            </Drawer>
          </>
          <Box
            height={{ xs: 48, sm: 64 }}
            width={{ xs: 90, sm: 120 }}
            sx={{ position: "relative" }}
          >
            <Image
              src={props.logo}
              alt="LOGO"
              width="100%"
              height="100%"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Grid
            container
            sx={{ display: { xs: "none", md: "flex" } }}
            spacing={2}
            width="auto"
          >
            {actions.map((action, key) => (
              <Grid item key={key}>
                <a href={action.route}>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: "15px 0 15px 0" }}
                  >
                    {action.title}
                  </Button>
                </a>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <a href={"tel:+" + props.phone.countryCode + props.phone.number}>
              <IconButton aria-label="Contact">
                <PhoneIcon />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
