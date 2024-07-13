/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
import styles from "./SingUp.module.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.Config";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SignUpWithSocial from "../../../Components/SignUpWithSocial/SignUpWithSoical";

import Loading from "./../../../Components/Loading/Loading";

const SignUp = () => {
  const navigate = useNavigate();
  const [empty, setEmpty] = useState("");
  // Creating user with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });

  // Updating profile
  const [updateProfile, updating] = useUpdateProfile(auth);

  useEffect(() => {
    if (user) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Sign Up Successfuly!",
        showConfirmButton: false,
        width: 300,
        timer: 1500,
      });
      navigate("/");
    }
  }, [user, navigate]);

  if (loading) {
    return <Loading />;
  }

  const signUpWithEmailPassword = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const passwordValidation = (password) => {
      const minLength = 6; // Minmub 6 characters
      const hasUpperCase = /[A-Z]/.test(password); // An Uppercase Letter
      const hasLowerCase = /[a-z]/.test(password); // A Lowercase Letter
      const hasNumber = /\d/.test(password); // A Number
      const hasSpecialChar = /[!@#$%^&*]/.test(password); // A special character

      if (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar
      ) {
        return true;
      }
      return false;
    };

    if (!username || !email || !password || !confirmPassword) {
      alert("Empty Filed");
    } else if (password !== confirmPassword) {
      setEmpty("Password doesn't match!");
    } else if (!passwordValidation(password)) {
      setEmpty(
        "Password must be 6 characters, and uppercase letter, a lowercase letter, a number, and a special character!"
      );
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: username });
    }
  };

  return (
    <div className={styles.signUpPageParent}>
      <div className={`${styles.signUpPageInfo} ${styles.flex}`}>
        <div className={styles.SigUpImage}>
          {/* <img src={signUpImage} alt="" /> */}
        </div>
        <div className={styles.signUpForm}>
          <div className={styles.title}>
            <h1>Registration</h1>
            <hr />
            <div className={styles.haveAccount}>
              <p>
                Already Have An Account?
                <Link to="/login">
                  <span>Login</span>{" "}
                </Link>
              </p>
            </div>
          </div>
          <SignUpWithSocial />
          <div className={styles.formInfo}>
            <form onSubmit={signUpWithEmailPassword}>
              <input
                className={styles.signUpInput}
                type="text"
                placeholder="Full Name"
                required
                name="username"
                id={styles.fullName}
                autoFocus
              />

              <br />
              <input
                className={styles.signUpInput}
                type="email"
                placeholder="Email"
                required
                name="email"
                id={styles.email}
              />
              <br />
              <input
                className={styles.signUpInput}
                type="password"
                placeholder="Password"
                required
                name="password"
                id={styles.password}
              />
              <br />
              <input
                className={styles.signUpInput}
                type="password"
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                id={styles.confirmPassword}
              />
              <br />

              <p style={{ color: "red" }}>{empty}</p>
              <div className={styles.submitBtn}>
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
