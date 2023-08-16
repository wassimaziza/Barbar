"use client"
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const LoginBarber = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [profile_pic, setProfilePic] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/barber/signUp", {
        firstname,
        lastname,
        email,
        password,
        profile_pic,
      });
      console.log("Sign Up Successful", response.data);
      setIsLoggedIn(true);
      setToken(response.data.token);
      setShowNextButton(true);
      
      localStorage.setItem("barberSignUp", JSON.stringify(response.data));
    } catch (error) {
      console.error("Cannot sign up, please try again", error);
    }
  };

  const handleNext = () => {
    router.push("/loginShop");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  const handleLogout = () => {
    setIsLoggedIn(false)
    setToken("")
  }

  return (
    <div className="loginContainer">
      <ThemeProvider theme={createTheme()}>
        <Paper elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <form noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
           
              {!isLoggedIn && (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="firstname"
                    label="First Name"
                    id="firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="lastname"
                    label="Last Name"
                    id="lastname"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="profile_pic"
                    label="Profile Picture"
                    id="profile_pic"
                    onChange={(e) => setProfilePic(e.target.value)}
                  />
                        <Button
                    onClick={handleNext}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {showNextButton ? "Next" : "Sign Up"}
                  </Button>
                  {/* {showNextButton ? (
                   
                  ) : (
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                  )} */}
                </>
              )}
            </form>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  )
}

export default LoginBarber
