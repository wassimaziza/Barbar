"use client"
import React from 'react';

const booking = () => {
  return (
    <section className="section pricing has-bg-image has-before" id="pricing" aria-label="pricing"
             style={{ backgroundImage: "url('./assets/images/pricing-bg.jpg')" }}>
      <div className="container">
        <h2 className="h2 section-title text-center">Awesome Pricing Plan</h2>
        <p className="section-text text-center">
          Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
        </p>
        <div className="pricing-tab-container">
          <ul className="tab-filter">
            <li>
              <button className="filter-btn active" data-filter-btn="all">
                <div className="btn-icon">
                  <i className="flaticon-beauty-salon" aria-hidden="true"></i>
                </div>
                <p className="btn-text">All Pricing</p>
              </button>
            </li>
          </ul>
          <ul className="grid-list">
            <li data-filter="shaving">
              <div className="pricing-card">
                <figure className="card-banner img-holder" style={{ "--width": 90, "--height": 90 }}>
                  <img src="/images/pricing-1.jpg" width="90" height="90" alt="Hair Cutting & Fitting" className="img-cover" />
                </figure>
                <div className="wrapper">
                  <h3 className="h3 card-title">Hair Cutting & Fitting</h3>
                  <p className="card-text">Clean & simple 30-40 minutes</p>
                </div>
                <data className="card-price" value="89">$89</data>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default booking;
