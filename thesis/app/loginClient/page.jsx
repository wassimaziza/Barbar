"use client"
import React, { useState } from 'react'
import axios from 'axios'
import ClientProfile from '../clientProfile/page' 


const LoginClient = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignUpForm, setShowSignUpForm] = useState(true)
  const [token, setToken] = useState('')

  const toggleForm = () => {
    setShowSignUpForm((prevValue) => !prevValue)
  }

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3000/client/login', formData)
      console.log('Login Successful', response.data)
      setIsLoggedIn(true)
      setToken(response.data.token)
      sessionStorage.setItem('clientToken', response.data.token)
    } catch (error) {
      console.error('Cannot login, please try again', error)
    }
  }

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3000/client/signup', formData)
      console.log('Sign Up Successful', response.data)
      setIsLoggedIn(true)
      setToken(response.data.token)
      sessionStorage.setItem('clientToken', response.data.token)
    } catch (error) {
      console.error('Check your sign up, an error has occurred', error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    if (showSignUpForm) {
      const signUpData = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        password: formData.get('password'),
        profile_pic: '',
        phone_number: formData.get('phone-number'),
        location: formData.get('location'),
      }
      handleSignUp(signUpData)
    } else {
      const loginData = {
        email: formData.get('email'),
        password: formData.get('password'), 
      }
      handleLogin(loginData)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setToken('')
    sessionStorage.removeItem('clientToken')
  }

  const storedToken = sessionStorage.getItem('clientToken')

  if (isLoggedIn || storedToken) {
    return <ClientProfile token={token || storedToken} handleLogout={handleLogout} />
  }
  return (
    <div className="login-client">
      <section className={showSignUpForm ? 'signup' : 'sign-in'}>
        <div className="container-login">
          <div className="signup-content">
            {showSignUpForm ? (
              <div className="signup-form">
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleSubmit} className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Your first Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Your last Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone number">
                      <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">
                      <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Your location"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                      required
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      I agree all statements in{' '}
                      <a href="#" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Join Us!"
                    />
                  </div>
                </form>
              </div>
            ) : (
              <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form onSubmit={handleSubmit} className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="your_email">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label htmlFor="remember-me" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                    />
                  </div>
                </form>
              </div>
            )}
            <a href="#" className="signup-image-link" onClick={toggleForm}>
            {showSignUpForm ? (
            <>
              <figure>
                <img src="images/sign-up.png" alt="Sign Up Image" />
              </figure>
              I am already a member
            </>
          ) : (
            'Create an account'
          )}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginClient
