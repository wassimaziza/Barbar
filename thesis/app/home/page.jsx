"use client"
import React from "react";
import Link from "next/link";
import styles from "./styles.css";

function HomePage() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="#" class="navbar-brand ms-4 ms-lg-0">
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <Link href="/" class="nav-item nav-link active">Home</Link>
            <Link href="/shop" class="nav-item nav-link">Shop</Link>
            <Link href="/services" class="nav-item nav-link">Services</Link>
            <Link href="/contact" class="nav-item nav-link">Contact</Link>
            {/* <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Profile</a>
              <div class="dropdown-menu m-0">
                <a href="price.html" class="dropdown-item">Profile</a>
                <a href="team.html" class="dropdown-item">Liked Barber</a>
              </div>
            </div> */}
            <Link href="/loginClient" class="nav-item nav-link">Join Us</Link>
            <Link href="/loginBarber" class="nav-item nav-link">Start Your Shop Already!</Link>
          </div>
          <a href="" class="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">Book an Appointment<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
      </nav>    
      <div className="container-xxl py-5">
      <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="d-flex flex-column">
                        <img class="img-fluid w-75 align-self-end" src="/public/about.jpg" alt=""/>
                        <div class="w-50 bg-secondary p-5" >
                            <h1 class="text-uppercase text-primary mb-3">25 Years</h1>
                            <h2 class="text-uppercase mb-0">Experience</h2>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p class="d-inline-block bg-secondary text-primary py-1 px-4">About Us</p>
                    <h1 class="text-uppercase mb-4">More Than Just A Haircut. Learn More About Us!</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                    <div class="row g-4">
                        <div class="col-md-6">
                            <h3 class="text-uppercase mb-3">Since 1990</h3>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                        </div>
                        <div class="col-md-6">
                            <h3 class="text-uppercase mb-3">1000+ clients</h3>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container-xxl py-5">
      <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                <p class="d-inline-block bg-secondary text-primary py-1 px-4">Services</p>
                <h1 class="text-uppercase">What We Provide</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" >
                            <img class="img-fluid" src="/public/haircut.png" alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Haircut</h3>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                            <span class="text-uppercase text-primary">From $15</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" >
                            <img class="img-fluid" src="/public/beard-trim.png" alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Beard Trim</h3>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                            <span class="text-uppercase text-primary">From $15</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" >
                            <img class="img-fluid" src="/public/mans-shave.png" alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Mans Shave</h3>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                            <span class="text-uppercase text-primary">From $15</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" >
                            <img class="img-fluid" src="/public/hair-dyeing.png" alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Hair Dyeing</h3>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                            <span class="text-uppercase text-primary">From $15</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" >
                            <img class="img-fluid" src="/public/mustache.png" alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Mustache</h3>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                            <span class="text-uppercase text-primary">From $15</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                        <div class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" >
                            <img class="img-fluid" src="/public/stacking.png" alt=""/>
                        </div>
                        <div class="ps-4">
                            <h3 class="text-uppercase mb-3">Stacking</h3>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.</p>
                            <span class="text-uppercase text-primary">From $15</span>
                        </div>
                        <a class="btn btn-square" href=""><i class="fa fa-plus text-primary"></i></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      

      <div className="container-xxl py-5">
      <div class="container">
            <div class="row g-0">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                        <p class="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">Price & Plan</p>
                        <h1 class="text-uppercase mb-4">Check Out Our Barber Services And Prices</h1>
                        <div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Haircut</h6>
                                <span class="text-uppercase text-primary">$29.00</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Beard Trim</h6>
                                <span class="text-uppercase text-primary">$35.00</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Mans Shave</h6>
                                <span class="text-uppercase text-primary">$23.00</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Hair Dyeing</h6>
                                <span class="text-uppercase text-primary">$19.00</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Mustache</h6>
                                <span class="text-uppercase text-primary">$15.00</span>
                            </div>
                            <div class="d-flex justify-content-between py-2">
                                <h6 class="text-uppercase mb-0">Stacking</h6>
                                <span class="text-uppercase text-primary">$39.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="h-100">
                        <img class="img-fluid h-100" src="/public/price.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container-xxl py-5">
      <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                <p class="d-inline-block bg-secondary text-primary py-1 px-4">Our Barber</p>
                <h1 class="text-uppercase">Meet Our Barber</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid" src="/public/team-1.jpg" alt=""/>
                            <div class="team-social">
                                <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="bg-secondary text-center p-4">
                            <h5 class="text-uppercase">Barber Name</h5>
                            <span class="text-primary">Designation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid" src="/public/team-2.jpg" alt=""/>
                            <div class="team-social">
                                <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="bg-secondary text-center p-4">
                            <h5 class="text-uppercase">Barber Name</h5>
                            <span class="text-primary">Designation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid" src="/public/team-3.jpg" alt=""/>
                            <div class="team-social">
                                <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="bg-secondary text-center p-4">
                            <h5 class="text-uppercase">Barber Name</h5>
                            <span class="text-primary">Designation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="team-item">
                        <div class="team-img position-relative overflow-hidden">
                            <img class="img-fluid" src="/public/team-4.jpg" alt=""/>
                            <div class="team-social">
                                <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="bg-secondary text-center p-4">
                            <h5 class="text-uppercase">Barber Name</h5>
                            <span class="text-primary">Designation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container-xxl py-5">
      <div class="container">
            <div class="row g-0">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="h-100">
                        <img class="img-fluid h-100" src="img/open.jpg" alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                        <p class="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">Working Hours</p>
                        <h1 class="text-uppercase mb-4">Professional Barbers Are Waiting For You</h1>
                        <div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Monday</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Tuesday</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Wednesday</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Thursday</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Friday</h6>
                                <span class="text-uppercase">09 AM - 09 PM</span>
                            </div>
                            <div class="d-flex justify-content-between py-2">
                                <h6 class="text-uppercase mb-0">Sat / Sun</h6>
                                <span class="text-uppercase text-primary">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>

      {/* JavaScript Libraries
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="lib/wow/wow.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>

      {/* Template Javascript */}
      {/* <script src="js/main.js"></script> */} 
    </div>
  );
}

export default HomePage;
