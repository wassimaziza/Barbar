import React from "react";
import Link from "next/link";
import styles from "./styles.css"; 
import { FaCut, FaArrowRight } from "react-icons/fa"; 

const Navbar = () => {
  return (
    <div>
        
    </div>
    // <nav className={`${styles.navbar} ${styles.stickyTop} ${styles.fadeIn}`} data-wow-delay="0.1s">
    //   <a href="#" className={`${styles.navbarBrand} ms-4 ms-lg-0`}>
    //     <h1 className={`${styles.brandText} mb-0 text-primary text-uppercase`}><FaCut className={`${styles.brandIcon} me-3`} />HairCut</h1>
    //   </a>
    //   {/* <button type="button" className={`${styles.navbarToggler} me-4`} data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    //     <span className={`${styles.navbarTogglerIcon} navbar-toggler-icon`}></span>
    //   </button> */}
    //   <div className={`${styles.collapse} ${styles.navbarCollapse}`} id="navbarCollapse">
    //     <div className={`${styles.navbarNav} ms-auto p-4 p-lg-0`}>
    //       <Link href="/" className={`${styles.navLink} ${styles.active}`}>Home</Link>
    //       <Link href="/shop" className={styles.navLink}>Shop</Link>
    //       <Link href="/services" className={styles.navLink}>Services</Link>
    //       <Link href="/contact" className={styles.navLink}>Contact</Link>
    //       <div className={`${styles.navItem} dropdown`}>
    //         <a href="#" className={`${styles.navLink} ${styles.dropdownToggle}`} data-bs-toggle="dropdown">Profile</a>
    //         <div className={`${styles.dropdownMenu} m-0`}>
    //           <a href="price.html" className={`${styles.dropdownItem}`}>Profile</a>
    //           <a href="team.html" className={`${styles.dropdownItem}`}>Liked Barber</a>
    //         </div>
    //       </div>
    //       <Link href="/loginClient" className={styles.navLink}>Join Us</Link>
    //       <Link href="/loginBarber" className={styles.navLink}>Start Your Shop Already!</Link>
    //     </div>
    //     <a href="" className={`${styles.bookButton} btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block`}>
    //       Book an Appointment
    //       <FaArrowRight className={`${styles.bookButtonIcon} ms-3`} />
    //     </a>
    //   </div>
    // </nav>
  );
};

export default Navbar;
