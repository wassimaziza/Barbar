import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile({ token,idClient, handleLogout }) {
  console.log('hi',idClient);
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
        `http://localhost:3000/client/${idClient}`,
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
          `http://localhost:3000/client/updateProfile/${idClient}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { firstname, lastname, email, phone_number, location } =
          response.data;
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
            <img src="/images/profile-image.png" alt="Profile" />
          </div>
          <div className="name">Client name</div>
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
        {!showForm ? (
          <div>
            <h2>Your Infos</h2>
            <div className="card">
              <div className="card-body">
                <table>
                  <tbody>
                    <tr>
                      <td>Name :</td>
                      <td>
                        {formData.firstname} {formData.lastname}
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
        ) : (
          <div className="">
            <div className="popup-content">
              <form className="form" onSubmit={handleSubmit}>
                <div className="flex">
                  <label>
                    <input
                      required
                      placeholder=""
                      type="text"
                      className="input"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                    />
                    <span>first name</span>
                  </label>

                  <label>
                    <input
                      required
                      placeholder=""
                      type="text"
                      className="input"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                    />
                    <span>last name</span>
                  </label>
                </div>

                <label>
                  <input
                    required
                    placeholder=""
                    type="email"
                    className="input"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <span>email</span>
                </label>

                <label>
                  <input
                    required
                    type="tel"
                    placeholder=""
                    className="input"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                  />
                  <span>contact number</span>
                </label>
                <label>
                  <textarea
                    required
                    rows="3"
                    placeholder=""
                    className="input01"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  ></textarea>
                  <span>Address</span>
                </label>

                <button className="fancy" type="submit">
                  <span className="text">Update</span>
                </button>
              </form>
            </div>
          </div>
        )}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
