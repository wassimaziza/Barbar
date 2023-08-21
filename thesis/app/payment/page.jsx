"use client"
import React, { useState } from "react"
import axios from "axios"
import "./styles.css"

const PaymentPage = ({ token }) => {
  const [formData, setFormData] = useState({
    amount: "",
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:3000/payment/initiatePayment",
        {
          amount: formData.amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      window.location.href = response.data.result
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="payment-page">
      <h2>Make The Payment</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          name="amount"
          placeholder="Enter the Amount"
          onChange={handleFormChange}
        />
        <div
          data-tooltip="using flouci"
          className="button"
          onClick={handleFormSubmit}
        >
          <div className="button-wrapper">
            <div className="text">Buy Now</div>
            <span className="icon">
              <svg
                viewBox="0 0 16 16"
                className="bi bi-cart2"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
              </svg>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PaymentPage
