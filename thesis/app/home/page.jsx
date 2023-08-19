"use client";
import React from "react";
import "./styles.css";

function home() {
  return (
    <div>
      <div class="custom_about_area">
        <div class="custom_about_container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6">
              <div class="custom_about_thumb">
                {/* <img src="/images/home1.png" alt="About Image"/> */}
                <div class="clock">
                  <div class="clock-face">
                    <div class="hand hour-hand"></div>
                    <div class="hand minute-hand"></div>
                    <div class="hand second-hand"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="custom_about_info">
                <div class="custom_section_title mb-20px">
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
                <a href="#" class="custom_boxed_btn3">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
