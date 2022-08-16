import { useState } from "react";
import { nameRegex, emailRegex, phoneRegex } from "./regexPatterns";

function useNameVerifier(defaultName) {
  const [nameValid, setNameValid] = useState(true);
  const [name, setName] = useState(defaultName || "");

  function verifyName(e) {
    setNameValid(
      (nameRegex.test(e.target.value) && e.target.value.length >= 3) ||
        e.target.value == ""
    );
    if (nameValid) {
      setName(e.target.value);
    }
  }

  return [name, nameValid, verifyName];
}

function useEmailVerifier(defaultEmail) {
  const [emailValid, setEmailValid] = useState(true);
  const [email, setEmail] = useState(defaultEmail || "");

  function verifyEmail(e) {
    setEmailValid(emailRegex.test(e.target.value) || e.target.value == "");
    if (emailValid) {
      setEmail(e.target.value);
    }
  }

  return [email, emailValid, verifyEmail];
}

function usePhoneVerifier(defaultPhone) {
  const [phoneValid, setPhoneValid] = useState(true);
  const [phone, setPhone] = useState(defaultPhone || "");

  function verifyPhone(e) {
    setPhoneValid(phoneRegex.test(e.target.value));

    if (phoneValid) {
      setPhone(e.target.value);
    }
  }
  return [phone, phoneValid, verifyPhone];
}

function useLengthVerifier(defaultValue, length) {
  const [lengthValid, setLengthValid] = useState(true);
  const [value, setValue] = useState(defaultValue || "");

  function verifyLength(e) {
    setLengthValid(
      e.target.value.length >= length || e.target.value.length == 0
    );
    if (lengthValid) {
      setValue(e.target.value);
    }
  }

  return [value, lengthValid, verifyLength];
}

export { useEmailVerifier, useNameVerifier, usePhoneVerifier, useLengthVerifier };
