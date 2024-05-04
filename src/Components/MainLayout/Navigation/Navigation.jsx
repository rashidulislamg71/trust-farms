/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import styles from "./Navigation.module.css";

import {  FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const Navigation = () => {
  const navRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
    setShowMenu(!showMenu);
  };

  return (
    <section className={styles.Navigation_Styles}>
      <Logo />
      <nav ref={navRef} className={styles.menu}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Products</NavLink>
        <NavLink to="/products">Vegetables</NavLink>
        <NavLink to="/products">Fruits</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/contactus">Contact Us</NavLink>
        {/* <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink> */}
      </nav>

      

      {showMenu ? (
          <button className={`${styles.navBtn} ${styles.openMenu}`} onClick={showNavBar}>
            <RxHamburgerMenu />
          </button>
        ) : (
          <button className={`${styles.navBtn} ${styles.clossMenu}`} onClick={showNavBar}>
            <FiX />
          </button>
        )}
    </section>
  );
};

export default Navigation;


