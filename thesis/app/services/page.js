import React from 'react';

const ServicesSection = () => {
  return (
  
    <section className="section service" id="services" aria-label="services">
      <div className="container">
        <h2 className="h2 section-title text-center">Service We Provide</h2>
        <p className="section-text text-center">
          Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse
        </p>
        <ul className="grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <i className="flaticon-salon"></i>
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Hair Cutting Style</a>
              </h3>
              <p className="card-text">
                Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="card-btn" aria-label="more">
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <i className="flaticon-shampoo"></i>
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Hair Washing</a>
              </h3>
              <p className="card-text">
                Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="card-btn" aria-label="more">
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <i className="flaticon-hot-stone"></i>
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Body Treatments</a>
              </h3>
              <p className="card-text">
                Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="card-btn" aria-label="more">
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <i className="flaticon-treatment"></i>
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Beauty & Spa</a>
              </h3>
              <p className="card-text">
                Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="card-btn" aria-label="more">
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <i className="flaticon-shaving-razor"></i>
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Stylist Shaving</a>
              </h3>
              <p className="card-text">
                Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="card-btn" aria-label="more">
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <i className="flaticon-hair-dye"></i>
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">Multi Hair Colors</a>
              </h3>
              <p className="card-text">
                Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="card-btn" aria-label="more">
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
          
          <li>
            <div className="service-card">
              <div className="card-icon">
                <i className="flaticon-new-service-icon"></i> 
              </div>
              <h3 className="h3">
                <a href="#" className="card-title">New Service Title</a> 
              </h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. {/* Add new description */}
              </p>
              <a href="#" className="card-btn" aria-label="more">
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
