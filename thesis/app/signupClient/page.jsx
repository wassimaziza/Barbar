"use client"
import React from 'react'

function signupClient() {

    const handleSignUp = async (formData) => {
        try {
          const response = await axios.post('http://localhost:3000/client/signup', formData)
          console.log('Sign Up Successful', response.data)
          setIsLoggedIn(true)
          setToken(response.data)
          sessionStorage.setItem('clientToken', response.data)
          sessionStorage.setItem("idClient")
        } catch (error) {
          console.error('Check your sign up, an error has occurred', error)
        }
      }
  return (
    <div>
      
    </div>
  )
}

export default signupClient
