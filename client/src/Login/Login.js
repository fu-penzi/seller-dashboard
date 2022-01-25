import {
  Button,
  FormControl,
  Box,
  TextField,
  Typography
} from "@mui/material";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../config";
import Widget from "../Widgets/Widget";
import { AuthContext } from "./AuthContext";
const LoginInput = (props) => {
  return (
    <FormControl fullWidth sx={{ mb: 1 }}>
      <TextField
        name={props.name}
        required
        id={props.name}
        type={props.type ? props.type : ""}
        placeholder={props.placeholder}
      />
    </FormControl>
  );
};
const LoginButton = () => {
  const { t } = useTranslation();
  return (
    <Button fullWidth sx={{ height: 48 }} variant="contained" type="submit">
      <Typography variant="button">{t("Zaloguj się")}</Typography>
    </Button>
  );
};
export default function Login() {
  const { t } = useTranslation();
  let navigate = useNavigate();
  let location = useLocation();
  const auth = useContext(AuthContext);
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      login: form.get("login"),
      password: form.get("password"),
    }
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.ok) {
        console.log(res)
        return res.json();
      }
    }).then(data => {
      auth.authenticate(data.login);
      navigate(from, { replace: true });
    });
  };
  return (
    <Box sx={{
      maxWidth: "500px",
      mx: "auto"
    }}>
      <Widget>
        {data => (
          <form onSubmit={handleSubmit}>
            <LoginInput
              name="login"
              placeholder={t("Adres e-mail lub login")}
            />
            <LoginInput
              name="password"
              type="password"
              placeholder={t("Hasło")}
            />
            <LoginButton />
          </form>
        )}

      </Widget>
    </Box>
  );
}
