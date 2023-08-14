"use client"
import React, { useState } from "react"
import axios from "axios"
import "./styles.css"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const LoginClient = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const [token, setToken] = useState("")
  const toggleForm = () => {
    setShowSignUpForm((prevValue) => !prevValue)
  }

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/client/login", formData)
      console.log("Login Successful", response.data)
      setIsLoggedIn(true)
      setToken(response.data.token)
    } catch (error) {
      console.error("Cannot login, please try again", error)
    }
  }

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/client/signUp", formData)
      console.log("Sign Up Successful", response.data)
      setIsLoggedIn(true)
      setToken(response.data.token)
    } catch (error) {
      console.error("check your sign up , an error has occurred", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    if (showSignUpForm) {
      handleSignUp({
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password"),
        profile_pic: "",
        phone_number: formData.get("phone_number"),
        location: formData.get("location"),
      })
    } else {
      handleLogin({
        email: formData.get("email"),
        password: formData.get("password"),
      })
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setToken("")
  }

  return (
    <div className="loginContainer">
      {isLoggedIn ? (
        <button className="logoutButton" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <div>
          <button className="actionButton" onClick={toggleForm}>
            Login
          </button>
          <button className="actionButton" onClick={toggleForm}>
            Sign Up
          </button>
        </div>
      )}

      {isLoggedIn ? (
        <div className="welcomeMessage">Welcome, you are logged in!</div>
      ) : (
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
              <form noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
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
                />
                {showSignUpForm && (
                  <>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="firstname"
                      label="First Name"
                      id="firstname"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="lastname"
                      label="Last Name"
                      id="lastname"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="phone_number"
                      label="Phone Number"
                      id="phone_number"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="location"
                      label="Location"
                      id="location"
                    />
                  </>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {showSignUpForm ? "Sign Up" : "Sign In"}
                </Button>
              </form>
            </Box>
          </Paper>
        </ThemeProvider>
      )}
    </div>
  )
}

export default LoginClient
