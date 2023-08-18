"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function BarberProfile() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [isAlertShown, setAlertShown] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    profile_pic: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/barber/signup",
        formData
      )
      console.log("Signup Successful", response.data);
      setAlertShown(true);
      setTimeout(() => {
        setLoading(false);
        router.push("/loginShop");
      }, 3000);
    } catch (error) {
      console.error("Check your sign up, an error has occurred", error);
      setLoading(false);
    }
  };
  return (
    <div className="barberProfile">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form
                onSubmit={handleSubmit}
                className="register-form"
                id="register-form"
              >
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
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Your last Name"
                    required
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="profile_pic">
                    <i className="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="text"
                    name="profile_pic"
                    id="profile_pic"
                    placeholder="Enter your profile pic"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="/images/sign-up.png" alt="sign up image" />
              </figure>
              <a href="#" className="signup-image-link">
                I am already a barber
              </a>
            </div>
          </div>
        </div>
      </section>
      {isAlertShown && <div className="alert">Welcome aboard!</div>}
      {isLoading && <div className="loader">Loading...</div>}
    </div>
  );
}

export default BarberProfile;
