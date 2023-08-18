"use client";
import React, { useState } from "react";
import axios from "axios";

const loginShop = () => {
  // const [shop_name, setShopName] = useState("")
  // const [shop_logo, setShopLogo] = useState("")
  // const [diploma, setDiploma] = useState("")
  // const [idCard, setIdCard] = useState("")
  // const [location, setLocation] = useState("")
  const [isLoading, setLoading] = useState(false);
  const [isAlertShown, setAlertShown] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    profile_pic: "",
  });

  // const handleSignUpShop = async () => {
  //   const formData = {
  //     shop_name,
  //     shop_logo,
  //     diploma,
  //     idCard,
  //     location,
  //   }

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/barber/signupShop",
  //       formData
  //     )
  //     console.log("Sign Up Shop Successful", response.data)
  //   } catch (error) {
  //     console.error("Cannot sign up shop, please try again", error)
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   handleSignUpShop()
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/barber/signupShop",
        formData
      );
      console.log("Signup Successful", response.data);
      setAlertShown(true);
      setTimeout(() => {
        setLoading(false);
        router.push("/barberProfile");
      }, 3000);
    } catch (error) {
      console.error("Check your sign up, an error has occurred", error);
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="barberProfile">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
            <form
                onSubmit={handleSubmit}
                className="register-form"
                id="register-form"
              >
              <h2 className="form-title">Sign up for your shop </h2>
              <div className="form-group">
                <label htmlFor="shop_name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="shop_name"
                  id="shop_name"
                  placeholder="Your Shop Name"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="shop_logo">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="shop_logo"
                  id="shop_logo"
                  placeholder="Your Shop logo"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="diploma">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="text"
                  name="diploma"
                  id="diploma"
                  placeholder="Your diploma"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="idCard">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="idCard"
                  id="idCard"
                  placeholder="Your Id card"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="idCard">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Shop address"
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
                  <img src="/images/shop.png" alt="sign up image" width="1300"/>
                </figure>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default loginShop;
