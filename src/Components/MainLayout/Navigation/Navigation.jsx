import { useState, useRef } from "react";
import styles from "./Navigation.module.css";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountBox } from "react-icons/md";

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
    <section id="navigation">
      <div className={styles.Navigation_Styles}>
        <div className={styles.navBar}>
          <Logo />
          <nav
            ref={navRef}
            className={`${styles.menu} ${
              showMenu ? styles.responsive_nav : ""
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/all_products"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMenu}
            >
              All Products
            </NavLink>
            <NavLink
              to="/vegetables"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMenu}
            >
              Vegetables
            </NavLink>
            <NavLink
              to="/fruits"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMenu}
            >
              Fruits
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </nav>

          <div className={styles.cartAndAccount}>
              <div className={styles.account_container}>
                <div className={styles.account}>Account</div>
                <div className={styles.account_inner_content}>
                  <div className={styles.account_dropdown}>
                    <a href="#">My Account</a>
                  </div>
                  <div className={styles.account_dropdown}>
                    <a href="#">Login</a>
                  </div>
                </div>
              </div>
            <div className={styles.addToCart}>
              <p>
                <FiShoppingCart /> <b>0</b>
              </p>
            </div>
          </div>

          <button className={styles.navBtn} onClick={showNavBar}>
            {showMenu ? <FiX /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
