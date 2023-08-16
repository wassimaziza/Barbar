"use client"
import React, { useState } from "react"
import axios from "axios"
import "./styles.css"


const LoginClient = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const [token, setToken] = useState('')
  const toggleForm = () => {
    setShowSignUpForm((prevValue) => !prevValue)
  }

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3000/client/login', formData)
      console.log('Welcome!', response.data)
      setIsLoggedIn(true)
      setToken(response.data.token)
    } catch (error) {
      console.error('login impossible , please try again', error)
    }
  }

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3000/client/signUp', formData)
      console.log('Sign Up Successful', response.data)
      setIsLoggedIn(true)
      setToken(response.data.token)
    } catch (error) {
      console.error('Check your sign up, an error has occurred', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    if (showSignUpForm) {
      handleSignUp({
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        password: formData.get('password'),
        profile_pic: '',
        phone_number: formData.get('phone_number'),
        location: formData.get('location'),
      })
    } else {
      handleLogin({
        email: formData.get('email'),
        password: formData.get('password'),
      })
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setToken('')
  }

  if (isLoggedIn) {
    return <ClientProfile token={token} handleLogout={handleLogout} />
  }

  return (
    <div className="login-client">
       <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your first Name" required/>
                            </div>
                            <div class="form-group">
                                <label for="last name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your last Name" required/>
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" required/>
                            </div>
                            <div class="form-group">
                                <label for="phone number"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="text" name="phone-number" id="phone-number" placeholder=" your phone number" required/>
                            </div>
                            <div class="form-group">
                              <label for="location"><i class="zmdi zmdi-lock-outline"></i></label>
                              <input type="text" name="location" id="location" placeholder=" your location" required/>
                            </div>
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term"  required />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Join Us!"/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="/images/sign-up.png" alt="sing up image"/></figure>
                        <a href="#" class="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LoginClient
 