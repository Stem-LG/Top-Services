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
    <Paper sx={{ bgcolor: "#4db251", padding: "2rem" }}>
      <Typography variant="h4" color="white" align="center">
        Contact Us!
      </Typography>
      <Typography
        variant="body1"
        color="white"
        align="center"
        maxWidth="50ch"
        margin="1.5rem auto"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, ipsum.
        Facilis labore at asperiores ratione.
      </Typography>
      <Grid container direction={{ md: "row" }}>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction="column"
          spacing={2}
          alignItems="center"
          padding={2}
        >
          <Grid item width="100%">
            <StyledTextField
              id="name"
              label="Name"
              required
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              id="email"
              label="Email"
              required
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              id="subject"
              label="Subject (optional)"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              id="message"
              label="Message"
              required
              size="small"
              fullWidth
              multiline
              rows={6}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: "15px 0 15px 0", width: "20rem" }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          padding={2}
          paddingTop={0}
          direction="column"
          xs={12}
          md={6}
          height={450}
          justifyContent="center"
        >
          <Grid item xs={1}>
            <Typography variant="h5" color="white">
              Contact information
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="space-evenly"
            xs={10}
          >
            <Grid item>
              <ContactInfo title="Visit Us" content={props.address} />
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
              />
            </Grid>
            <Grid item>
              <ContactInfo title="Email" content={props.email} />
            </Grid>
            <Grid item>
              <ContactInfo
                title="Facebook"
                content={props.facebook.Name}
                link={props.facebook.Link}
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
    <Grid container margin={props.margin} padding={props.padding}>
      <Grid item>
        <Avatar sx={{ height: "4rem", width: "4rem" }}>{props.icon}</Avatar>
      </Grid>
      <Grid item margin="0 1rem">
        <Typography variant="h6" color="white">
          {props.title}
        </Typography>
        {props.link ? (
          <a href={props.link} style={{ textDecoration: "none" }}>
            <Typography variant="body1" color="white">
              {props.content}
            </Typography>
          </a>
        ) : (
          <Typography variant="body1" color="white" maxWidth="20ch">
            {props.content}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
