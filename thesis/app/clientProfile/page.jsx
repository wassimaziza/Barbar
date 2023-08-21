"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"
import "./styles.css"

function Profile({ token, idClient, handleLogout }) {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    address: "",
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success')) {
      alert("Congratulations! Your payment is successful. You can check your points.");
    }
  }, [])

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put(
        `http://localhost:3000/client/updateProfile/${sessionStorage.getItem("idClient")}`,
        formData
      )
      console.log(response.data)
    } catch (error) {
      console.error("Error updating profile", error)
    }
  }

  useEffect(() => {
    const fetchClientInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/client/getOneUser/${sessionStorage.getItem("idClient")}`,
          {
            headers: {
              "Authorization": `${sessionStorage.getItem("clientToken")}`,
            },
          }
        )
        const { firstname, lastname, email, phone_number, location } = response.data
        setFormData({
          firstname,
          lastname,
          email,
          phone_number,
          address: location,
        })
      } catch (error) {
        console.error("Error fetching client info", error)
      }
    }

    fetchClientInfo()
  }, [token])

  return (
      <div className="main">
        <div className="card-container">
          
          {/* <img className="round" src={formData.profile_pic} alt="user" /> */}
          <center> <img  className="user-image" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" width="100"/></center>
          <h3>{formData.firstname} {formData.lastname}</h3>
          <h6>{formData.address}</h6>
          <div className="skills">
            <h6>Barbers liked</h6>
            <ul>
              <li>Ala</li>
            </ul>
          </div>
          <div className="bookings">
            <h6>Bookings</h6>
            <ul>
              <li>
              <h6>time :   <br/>
              day :        </h6>
              </li>
            </ul>
          </div>
        </div>
        
        <button class="full-rounded">
<span>  logout  </span>
<div class="border full-rounded"></div></button>
      </div>
    
  );
}
  

export default Profile
