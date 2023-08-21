"use client"
import React, { useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/navigation'
import ClientProfile from '../clientProfile/page'
import ClientSignup from '../clientSignup/page'

const LoginLogic = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const [clientId, setClientId] = useState('')
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const router = useRouter()

  const handleLogin = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3000/client/login', formData)

      if (response.status === 201) {
        console.log('Login Successful', response.data)
        const decodedToken = jwt.decode(response.data)
        setClientId(decodedToken.idclient)
        setIsLoggedIn(true)
        setToken(response.data)
        sessionStorage.setItem('clientToken', response.data)
        sessionStorage.setItem('idClient', decodedToken.idclient)
        router.push('/clientProfile')
      } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Cannot login, please try again', error)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setToken('')
    sessionStorage.removeItem('clientToken')
    sessionStorage.removeItem('idClient') /
    router.push('/home')

  const storedToken = sessionStorage.getItem('clientToken')

  if (isLoggedIn || storedToken) {
    return (
      <ClientProfile token={token || storedToken} idClient={clientId} handleLogout={handleLogout} />
    )
  }

  const toggleForm = () => {
    setShowSignUpForm(!showSignUpForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const loginData = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    handleLogin(loginData)
  }

  return (
    <div className="login-client">
      <section className={showSignUpForm ? 'signup' : 'sign-in'}>
        <div className="container-login">
          <div className="signup-content">
            {showSignUpForm ? (
              <ClientSignup />
            ) : (
              <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form onSubmit={handleSubmit} className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="email">
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
                <a href="#" className="signup-image-link" onClick={toggleForm}>
                  Create an account
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
}

export default LoginLogic
