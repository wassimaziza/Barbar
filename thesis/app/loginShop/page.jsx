"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import BusinessIcon from '@mui/icons-material/Business'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const loginShop = () => {
  const [shop_name, setShopName] = useState('')
  const [shop_logo, setShopLogo] = useState('')
  const [diploma, setDiploma] = useState('')
  const [idCard, setIdCard] = useState('')
  const [location, setLocation] = useState('')

  const handleSignUpShop = async () => {
    const formData = {
      shop_name,
      shop_logo,
      diploma,
      idCard,
      location,
    }

    try {
      const response = await axios.post('http://localhost:3000/barber/signupShop', formData)
      console.log('Sign Up Shop Successful', response.data)
    } catch (error) {
      console.error('Cannot sign up shop, please try again', error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSignUpShop()
  }

  return (
    <div className="loginContainer">
      <ThemeProvider theme={createTheme()}>
        <Paper elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <BusinessIcon />
            </Avatar>
            <form noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="shop_name"
                label="Shop Name"
                id="shop_name"
                onChange={(e) => setShopName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="shop_logo"
                label="Shop Logo"
                id="shop_logo"
                onChange={(e) => setShopLogo(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="diploma"
                label="Diploma"
                id="diploma"
                onChange={(e) => setDiploma(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="idCard"
                label="ID Card"
                id="idCard"
                onChange={(e) => setIdCard(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="location"
                label="Location"
                id="location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up Shop
              </Button>
            </form>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  )
}

export default loginShop

