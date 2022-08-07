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
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  Home as HomeIcon,
  Newspaper as NewspaperIcon,
  Photo as PhotoIcon,
  Info as InfoIcon,
  Email as EmailIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
  Translate as TranslateIcon,
  ArrowRight as ArrowRightIcon
} from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function NavBar(props) {
    const router = useRouter();
    const langs = [
      {
        locale: "en",
        display: "English",
      },
      {
        locale: "fr",
        display: "Français",
      },
      {
        locale: "ar",
        display: "العربية",
      },
    ];

    const initLang = langs.find((l) => l.locale == router.locale);
    const [CurrentLang, setCurrentLang] = useState(
      Boolean(initLang) ? initLang : langs[0]
    );


  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  let actions = [
    { title: props.tr("home"), route: "#", icon: <HomeIcon /> },
    // { title: "Blog", route: "#", icon: <NewspaperIcon /> },
    {
      title: props.tr("gallery"),
      route: "#gallery",
      icon: <PhotoIcon />,
    },
    // { title: "About", route: "#", icon: <InfoIcon /> },
    {
      title: props.tr("contact"),
      route: "#contact",
      icon: <EmailIcon />,
    },
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
                <IconButton
                  aria-label="close menu"
                  onClick={() => {
                    setDrawerIsOpen(false);
                  }}
                  sx={{ m: "0 16px" }}
                >
                  <MenuIcon />
                </IconButton>
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
                <LangSwitcherDrawer
                  router={router}
                  langs={langs}
                  currentLang={CurrentLang}
                  setCurrentLang={setCurrentLang}
                />
              </List>
            </Drawer>
          </>
          <Box
            height={{ xs: 48, sm: 64 }}
            width={{ xs: 90, sm: 120 }}
            sx={{ position: "relative" }}
          >
            <Image
              src="/assets/images/logo.png"
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
            <Grid item>
              <LangSwitcher
                router={router}
                langs={langs}
                currentLang={CurrentLang}
                setCurrentLang={setCurrentLang}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <a href="tel:+21692005409">
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

function LangSwitcher(props) {

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
    return (
      <Box>
        <Button onClick={handleClick}>
          {props.currentLang.display}
          <ArrowDropDownIcon
            sx={{ display: Boolean(anchorEl) ? "none" : "block" }}
          />
          <ArrowDropUpIcon
            sx={{ display: Boolean(anchorEl) ? "block" : "none" }}
          />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {props.langs.map((lang) => (
            <MenuItem
              key={lang}
              onClick={() => {
                handleClose();
                props.setCurrentLang({
                  loacale: lang.locale,
                  display: lang.display,
                });
                props.router.push("", "", { locale: lang.locale });
              }}
            >
              {lang.display}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );

}

function LangSwitcherDrawer(props) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }



  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <TranslateIcon color={open ? "primary" : "initial"} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1" color={open ? "primary" : "initial"}>
            {props.currentLang.display}
          </Typography>{" "}
        </ListItemText>
        <ListItemIcon sx={{ minWidth: "0px" }}>
          <ArrowDropDownIcon />
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={open} unmountOnExit>
        <List disablePadding>
          {props.langs.map((lang) => (
            <ListItemButton
            key={lang}
              sx={{
                pl: lang.locale == props.currentLang.locale ? 3 : 6,
                bgcolor: "#0001",
              }}
              onClick={() => {
                props.setCurrentLang({
                  loacale: lang.locale,
                  display: lang.display,
                });
                props.router.push("", "", { locale: lang.locale });
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  display:
                    lang.locale == props.currentLang.locale ? "" : "none",
                }}
              >
                <ArrowRightIcon
                  color={
                    lang.locale == props.currentLang.locale
                      ? "primary"
                      : "initial"
                  }
                />
              </ListItemIcon>
              <ListItemText>
                <Typography
                  variant="body1"
                  color={
                    lang.locale == props.currentLang.locale
                      ? "primary"
                      : "initial"
                  }
                >
                  {lang.display}
                </Typography>
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}
export default NavBar;
