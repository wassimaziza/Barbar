"use client"
import React from 'react';
import Link from 'next/link'

const NavBar = () => {
  return (
    <header className="header">
      <div className="header-bottom" data-header>
        <div className="container">
          <a href="#" className="logo">
            BarBar
            <span className="span">barbers booking app</span>
          </a>
          <nav className="navbar container" data-navbar>
      <ul className="navbar-list">
        <li className="navbar-item">
            <Link href="/" className="navbar-link" data-nav-link>Home</Link>
        </li>
        <li className="navbar-item">
            <Link href="/services" className="navbar-link" data-nav-link>Services</Link>
        </li>
        <li className="navbar-item">
            <Link href="/shop" className="navbar-link" data-nav-link>Pricing</Link>
        </li>
        <li className="navbar-item">
            <Link href="/work" className="navbar-link" data-nav-link>Gallery</Link>
        </li>
        <li className="navbar-item">
            <Link href="/booking" className="navbar-link" data-nav-link>Appointment</Link>
        </li>
        <li className="navbar-item">
            <Link href="/loginBarber" className="navbar-link" data-nav-link>Start Your Work!</Link>
        </li>
      </ul>
    </nav>
          <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
          <Link href="/loginClient" className="btn has-before">
            <span className="span"> Join Us </span>
            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </Link>
        </div>
      </div>
      <section className="section hero has-before has-bg-image" id="home" aria-label="home"
    style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}>
  <div className="container">
    <h1 className="h1 hero-title">Barbers & Hair Cutting</h1>
    <p className="hero-text">
      Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      suspendisse
      ultrices gravida
    </p>
    <a href="#" className="btn has-before">
      <span className="span">Explore Our Services</span>
      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
    </a>
  </div>
</section>
    </header>
  );
};

export default NavBar;
