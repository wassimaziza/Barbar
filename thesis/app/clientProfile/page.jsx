"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css"

function Profile({ token, idClient, handleLogout }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    address: "",
  });

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/client/updateProfile/${sessionStorage.getItem("idClient")}`,
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

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
        );
        const { firstname, lastname, email, phone_number, location } = response.data;
        setFormData({
          firstname,
          lastname,
          email,
          phone_number,
          address: location,
        });
      } catch (error) {
        console.error("Error fetching client info", error);
      }
    };

    fetchClientInfo();
  }, [token]);

  return (
    <div className="profile-client">
      <div className="sidenav">
        <div className="profile">
          <div className="profile-image">
            <img src={formData.profile_pic} alt="Profile" />
          </div>
          <div className="name">@{formData.firstname}</div>
        </div>
        <div className="sidenav-url">
          <div className="url">
            <a href="#profile" className="active">
              Profile
            </a>
            <hr align="center" />
          </div>
          <div className="url">
            <a onClick={toggleForm}>Settings</a>
            <hr align="center" />
          </div>
        </div>
      </div>
      <div className="main">
          <div>
            <h2>Your Infos</h2>
            <div className="card">
              <div className="card-body">
                <table>
                  <tbody>
                    <tr>
                      <td>Name :</td>
                      <td>
                        {formData.firstname} {formData.lastname}.
                      </td>
                    </tr>
                    <tr>
                      <td>Email :</td>
                      <td>{formData.email}</td>
                    </tr>
                    <tr>
                      <td>Address :</td>
                      <td>{formData.address}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button className="logout-button" onClick={handleLogout} >
    Sign up
    <div class="arrow-wrapper">
        <div class="arrow"></div>
    </div>
</button>
      </div>
    </div>
  );
}

export default Profile;
