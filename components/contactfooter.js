import {
  Paper,
  Typography,
  Grid,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  useEmailVerifier,
  useNameVerifier,
  usePhoneVerifier,
  useLengthVerifier,
} from "../lib/verifiers";

export default function ContactFooter(props) {
  const [name, nameValid, verifyName] = useNameVerifier("");
  const [email, emailValid, verifyEmail] = useEmailVerifier("");
  const [phone, phoneValid, verifyPhone] = usePhoneVerifier("");
  const [message, messageValid, verifyMessage] = useLengthVerifier("", 15);

  const [sendColor, setSendColor] = useState("secondary");
  const [sendText, setSendText] = useState("send");

  let data = {
    name: name,
    email: email,
    phone: phone,
    subject: "",
    content: message,
  };

  async function submitMessage() {
    if (
      nameValid &&
      name != "" &&
      emailValid &&
      email != "" &&
      phoneValid &&
      phone != "" &&
      messageValid &&
      message != ""
    ) {
      let res = await axios.post("/api/message", data);

      console.log(res);
      console.log(data);
      if (res.data.exist) {
        setSendColor("error");
        setSendText("not-sent");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSendColor("secondary");
        setSendText("send");
      } else {
        setSendColor("success");
        setSendText("sent");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSendColor("secondary");
        setSendText("send");
      }
    } else {
      setSendColor("error");
      setSendText("invalid-data");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSendColor("secondary");
      setSendText("send");
    }
  }

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
          direction="row"
          spacing={2}
          alignItems="center"
          padding={{ sm: 2, xs: 0 }}
          justifyContent="center"
        >
          <Grid item width="100%">
            <StyledTextField
              label={props.tr("name")}
              required
              error={!nameValid}
              onBlur={verifyName}
              helperText={nameValid ? "" : props.tr("invalid-name")}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={7.5}>
            <StyledTextField
              label={props.tr("email")}
              required
              error={!emailValid}
              onBlur={verifyEmail}
              helperText={emailValid ? "" : props.tr("invalid-email")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4.5}>
            <StyledTextField
              label={props.tr("phone")}
              required
              error={!phoneValid}
              onBlur={verifyPhone}
              helperText={phoneValid ? "" : props.tr("invalid-phone")}
              fullWidth
            />
          </Grid>

          <Grid item width="100%">
            <StyledTextField
              label={props.tr("subject")}
              fullWidth
              onBlur={(e) => {
                data.subject = e.target.value;
              }}
              inputProps={{ maxLength: 50 }}
            />
          </Grid>
          <Grid item width="100%">
            <StyledTextField
              label={props.tr("message")}
              required
              fullWidth
              multiline
              error={!messageValid}
              rows={6}
              onBlur={verifyMessage}
              helperText={messageValid ? "" : props.tr("invalid-message")}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={submitMessage}
              variant="contained"
              color={sendColor}
              sx={{
                borderRadius: "15px 0 15px 0",
                width: { xs: "12rem", sm: "20rem" },
              }}
            >
              {props.tr(sendText)}
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

function StyledTextField(props) {
  let sx = props.error
    ? {
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { border: "2px solid" },
          color: "white",
        },
      }
    : {
        input: {
          color: "white",
        },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { border: "2px solid white" },
          "&:hover fieldset": {
            borderColor: "white",
            borderWidth: 2,
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
          color: "white",
        },
        "& label": {
          color: "white",
        },
        "& label.Mui-focused": {
          color: "white",
        },
      };

  const [textFieldSize, setTextFieldSize] = useState("medium");

  useEffect(() => {
    if (window.innerWidth < 500) {
      setTextFieldSize("small");
    }
    window.addEventListener("resize", () =>
      setTextFieldSize(window.innerWidth >= 500 ? "medium" : "small")
    );
  });

  return <TextField {...props} sx={sx} size={textFieldSize} />;
}

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
