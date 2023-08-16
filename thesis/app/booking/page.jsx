"use client"
import React, { useState } from 'react'
import axios from 'axios'

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    barber: '',
    date: '',
    message: ''
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/booking/create', formData)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="booking">
      <section className="section appoin" id="appointment" aria-label="appointment">
        <div className="container">
          <div className="appoin-card">
            <figure className="card-banner img-holder" style={{ '--width': 250, '--height': 774 }}>
              <img src="/images/appoin-banner-1.jpg" width="250" height="774" loading="lazy" alt="" className="img-cover" />
            </figure>
            <div className="card-content">
              <h2 className="h2 section-title">Make Appointment</h2>
              <p className="section-text">
                Introducing our new booking system for barber shops! Say goodbye
                to the struggles of booking and save yourself time with our
                easy-to-use and advanced platform.
              </p>
              <form onSubmit={handleFormSubmit} className="appoin-form">
  <div className="input-wrapper">
    <select
      name="status"
      className="input-field"
      value={formData.status}
      onChange={handleFormChange}
    >
      <option value="">Select status</option>
      <option value="accepted">Accepted</option>
      <option value="declined">Declined</option>
      <option value="pending">Pending</option>
    </select>
  </div>
  <input
    type="time"
    name="time"
    required
    className="input-field date"
    value={formData.time}
    onChange={handleFormChange}
  />
  <input
    type="date"
    name="date"
    required
    className="input-field date"
    value={formData.date}
    onChange={handleFormChange}
  />
  <button type="submit" className="continue-application">
    <div>
      <div className="pencil"></div>
      <div className="folder">
        <div className="top">
          <svg viewBox="0 0 24 27">
            <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
          </svg>
        </div>
        <div className="paper"></div>
      </div>
    </div>
    Continue appointment
  </button>
</form>
            </div>
            <figure className="card-banner img-holder" style={{ '--width': 250, '--height': 774 }}>
              <img src="/images/appoin-banner-2.jpg" width="250" height="774" loading="lazy" alt="" className="img-cover" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppointmentSection
