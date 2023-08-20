"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const SignUpLogic = () => {
  const router = useRouter()
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false)

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3000/client/signup', formData)

      if (response.status === 201) {
        console.log('Sign Up Successful', response.data)
        setIsSignUpSuccess(true) 
      } else {
        console.error('Sign Up failed')
      }
    } catch (error) {
      console.error('Check your sign up, an error has occurred', error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    const signUpData = {
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      email: formData.get('email'),
      password: formData.get('password'),
      profile_pic: '',
      phone_number: formData.get('phone-number'),
      location: formData.get('location'),
    }
    handleSignUp(signUpData);
  }

  if (isSignUpSuccess) {
    return (
      <div>
        <p>Sign up successful! You can now proceed to log in.</p>
        <button onClick={() => router.push('/clientLogin')}>Go to Log In</button>
      </div>
    )
  }
  return (
    <div className="login-client">
      <section className="signup">
        <div className="container-login">
          <div className="signup-content">
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
          </div>
        </div>
      </section>
    </div>
  )
}


export default SignUpLogic
