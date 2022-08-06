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
    <Paper sx={{ bgcolor: "#4db251", padding: "2rem" }} id="contact" margin={props.margin}>
      <Typography variant="h4" color="white" align="center" >
        Contact Us!
      </Typography>
      <Typography
        variant="body1"
        color="white"
        align="center"
        maxWidth="50ch"
        margin="1.5rem auto"
      >
        Please fill the form and provide all the details, and we'll be in touch as fast as possible.
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
              label="Name"
              required
              size=""
              fullWidth
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              id="email"
              label="Email"
              required
              size=""
              fullWidth
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              id="subject"
              label="Subject (optional)"
              size=""
              fullWidth
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              id="message"
              label="Message"
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
              Send
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
              Contact information
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
                title="Visit Us"
                content={props.address}
                icon="/assets/icons/address.svg"
              />
            </Grid>
            <Grid item>
              <ContactInfo
                title="Phone"
                content={
                  "+" +
                  props.phone.countryCode +
                  " " +
                  props.phone.number +
                  " / " +
                  "+" +
                  props.phone2.countryCode +
                  " " +
                  props.phone2.number
                }
                icon="/assets/icons/phone.svg"
              />
            </Grid>
            <Grid item>
              <ContactInfo
                title="Email"
                content={props.email}
                icon="/assets/icons/at.svg"
              />
            </Grid>
            <Grid item>
              <ContactInfo
                title="Facebook"
                content={props.facebook.Name}
                link={props.facebook.Link}
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
