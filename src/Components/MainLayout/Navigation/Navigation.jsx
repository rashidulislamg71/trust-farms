/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useRef, useContext } from "react";
import styles from "./Navigation.module.css";
import CartList from "../../CartList/CartList";
import Logo from "../../Logo/Logo";

import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdAccountBox } from "react-icons/md";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
// import {useTheme} from "../../GlobalContext/GlobalContext";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "./../../../Firebase/Firebase.Config";
import Swal from "sweetalert2";

const Navigation = () => {
  const { count } = useContext(GlobalContext);
  // Sign up user
  const [user] = useAuthState(auth);

  //Logout Function
  const logOut = () => {
    signOut(auth);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "LogOut Successfuly",
      showConfirmButton: false,
      width: 300,
      timer: 1500
    });
  };

  const navRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const showNavBar = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  // const { theme, toggleTheme } = useTheme();

  return (
    <div id="navigation">
      <div className={styles.Navigation_Styles}>
        <div className={styles.navBar}>
          <Logo />
          {/* <button onClick={toggleTheme}>
          {theme ? 'light' : 'Dark'}
        </button> */}
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
                {user ? (
                  <>
                    <div
                      className={styles.account_dropdown}
                      // style={{
                      //   cursor: "pointer",
                      //   textTransform: "uppercase",
                      //   color: "rgb(254, 94, 1)",
                      // }}
                    >
                      <Link> {user?.displayName} </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.account_dropdown}>
                      <Link to="/signup">Sign Up</Link>
                    </div>
                  </>
                )}

                {user ? (
                  <div onClick={logOut} className={styles.account_dropdown}>
                    <Link>LogOut</Link>
                  </div>
                ) : (
                  <>
                    <div className={styles.account_dropdown}>
                      <Link to="/login">Login</Link>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div title="Add to Cart" className={styles.addToCart}>
              <NavLink to="/cartList">
                <p>
                  <RiShoppingCartFill />

                  <sup>{user ? count() : 0}</sup>
                </p>
              </NavLink>
            </div>
          </div>

          <button title="menu" className={styles.navBtn} onClick={showNavBar}>
            {showMenu ? <FiX /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
