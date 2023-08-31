import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (event) => {
    setIsValid(true)
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setIsValid(true)
    setPassword(event.target.value);
  };

  const validateFields = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[A-Z]).{8,}$/;

    const isEmailValid = emailPattern.test(email);
    const isPasswordValid = passwordPattern.test(password.trim());

    setIsValid(isEmailValid && isPasswordValid);
    return isEmailValid && isPasswordValid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 12000);
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          mt: 20,
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            disabled={isLoading}
          />
          {!isValid && (
            <p style={{ fontSize: "10px", color: "red" }}>Некорректный адрес электронной почты</p>
          )}
        </div>
        <div>
          <TextField
            required
            id="outlined-basic"
            label="Password"
            type="password"
            variant="filled"
            value={password}
            onChange={handlePasswordChange}
            disabled={isLoading}
          />
          {!isValid && (
            <p style={{ fontSize: "10px", color: "red" }}>
              Пароль минимум 8 символов, минимум одна заглавная буква
            </p>
          )}
        </div>
        <Button
          variant="contained"
          sx={{ height: "57px" }}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </Box>
    </div>
  );
};

export default Auth;
