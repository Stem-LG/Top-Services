import {
  Paper,
  Typography,
  Grid,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ContactFooter(props) {
  return (
    <Paper
      sx={{ bgcolor: "#4db251", padding: "2rem" }}
      id="contact"
      margin={props.margin}
    >
      <Typography variant="h4" color="white" align="center">
        {props.tr("contact-us")}
      </Typography>
      <Typography
        variant="body1"
        color="white"
        align="center"
        maxWidth="50ch"
        margin="1.5rem auto"
      >
        {props.tr("contact-us-desc")}
      </Typography>
      <Grid container direction={{ xs: "column", md: "row" }}>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction="column"
          spacing={2}
          alignItems="center"
          padding={{ sm: 2, xs: 0 }}
        >
          <Grid item width="100%">
            <StyledTextField
              id="name"
              label={props.tr("name")}
              required
              size=""
              fullWidth
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              id="email"
              label={props.tr("email")}
              required
              size=""
              fullWidth
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              id="subject"
              label={props.tr("subject")}
              size=""
              fullWidth
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              id="message"
              label={props.tr("message")}
              required
              size=""
              fullWidth
              multiline
              rows={6}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "15px 0 15px 0",
                width: { xs: "12rem", sm: "20rem" },
              }}
            >
              {props.tr("send")}
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          padding={0}
          direction="row"
          xs={12}
          md={6}
          height={450}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h5"
              color="white"
              align="center"
              sx={{ marginTop: { xs: 3, sm: 0 } }}
            >
              {props.tr("contact-info")}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-evenly"
            alignContent={{ xs: "start", sm: "center", md: "start" }}
            xs={12}
          >
            <Grid item>
              <ContactInfo
                title={props.tr("visit-us")}
                content={props.tr("address")}
                icon="/assets/icons/address.svg"
              />
            </Grid>
            <Grid item>
              <ContactInfo
                title={props.tr("phone")}
                content="+216 92005409 / +216 97537966"
                icon="/assets/icons/phone.svg"
              />
            </Grid>
            <Grid item>
              <ContactInfo
                title={props.tr("email")}
                content="topservices@placeholder.com"
                icon="/assets/icons/at.svg"
              />
            </Grid>
            <Grid item>
              <ContactInfo
                title={props.tr("facebook")}
                content="Jaafer Ghanney"
                link="https://www.facebook.com/jaafar.ghanney/"
                icon="/assets/icons/facebook.svg"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

function ContactInfo(props) {
  return (
    <Grid container margin="0.5rem 0" padding={props.padding}>
      <Grid item>
        <Avatar
          variant="square"
          sx={{ height: "4rem", width: "4rem" }}
          src={props.icon}
        ></Avatar>
      </Grid>
      <Grid item margin="0 0 0 0.5rem">
        <Typography variant="h6" color="white">
          {props.title}
        </Typography>
        {props.link ? (
          <a href={props.link} style={{ textDecoration: "none" }}>
            <Typography variant="body1" fontSize={12} color="white">
              {props.content}
            </Typography>
          </a>
        ) : (
          <Typography
            variant="body1"
            fontSize={12}
            color="white"
            maxWidth={{ xs: "17ch", sm: "100%" }}
          >
            {props.content}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
