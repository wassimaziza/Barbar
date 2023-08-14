import React, { useState } from "react"
import axios from "axios"
import "./styles.css"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useHistory } from "react-router-dom"

const LoginBarber = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory() 

  const handleLogin = async () => {
    try {
      const response = await axios.post("/barber/login", { email, password })
      console.log("Login Successful", response.data)
      setIsLoggedIn(true)
      setToken(response.data.token)
    } catch (error) {
      console.error("Cannot login, please try again", error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin()
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setToken("")
  }

  const handleNext = () => {
    history.push("/loginShop")
  }

  return (
    <div className="loginContainer">
      {isLoggedIn ? (
        <button className="logoutButton" onClick={handleLogout}>
          Logout
        </button>
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
                  value={email}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </form>
              {isLoggedIn && (
                <Button
                  onClick={handleNext}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Next
                </Button>
              )}
            </Box>
          </Paper>
        </ThemeProvider>
      )}
    </div>
  )
}

export default LoginBarber
