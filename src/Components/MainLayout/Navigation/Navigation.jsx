import React, { useState, useRef } from "react";
import styles from "./Navigation.module.css";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const Navigation = () => {
  const navRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const showNavBar = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <section className={styles.Navigation_Styles}>
      <div className={styles.navBar}>
        <Logo />
        <nav ref={navRef} className={`${styles.menu} ${showMenu ? styles.responsive_nav : ''}`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/all_products" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>All Products</NavLink>
          <NavLink to="/vegetables" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>Vegetables</NavLink>
          <NavLink to="/fruits" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>Fruits</NavLink>
          <NavLink to="/aboutus" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>About Us</NavLink>
          <NavLink to="/contactus" className={({ isActive }) => (isActive ? styles.active : "")} onClick={closeMenu}>Contact Us</NavLink>
        </nav>

        <button
          className={styles.navBtn}
          onClick={showNavBar}
        >
          {showMenu ? <FiX /> : <RxHamburgerMenu />}
        </button>
      </div>
    </section>
  );
};

export default Navigation;