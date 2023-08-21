"use client"
import React, { useState } from "react"
import "./styles.css";

function Home() {
  const carouselImages = [
    "/images/caroussel1.jpg",
    "/images/caroussel2.jpg",
    "/images/caroussel3.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentImage = carouselImages[currentIndex]

  return (
    <div>
      <div className="custom_about_area">
        <div className="custom_about_container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
             
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="custom_about_info">
                <div className="custom_section_title mb-20px">
                  <span>About Us</span>
                  <h3>
                    Experienced and <br /> Traditional Stylish <br /> Barber
                    Shop
                  </h3>
                </div>
                <p>
                  Inspires employees and organizations to support causes they
                  care <br /> about. We do this to bring more resources to the
                  nonprofits that are <br /> changing our world.
                </p>
                <a href="#" className="custom_boxed_btn3">
                  Learn More
                </a>
              </div>
              <br/>
              <div className="custom_about_thumb">
                <img src={currentImage} alt="Carousel Image" />
                <button onClick={prevImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
