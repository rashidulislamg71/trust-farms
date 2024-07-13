/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
import styles from "./SingUp.module.css";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.Config";
import { useState } from "react";
import Swal from "sweetalert2";
import SignUpWithSocial from "../../../Components/SignUpWithSocial/SignUpWithSoical";
import Loaging from "../../../Components/Loading/Loaging";

const SignUp = () => {

  const navigate = useNavigate();
  // Creating user with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true
    });

  // Updating profile
  const [updateProfile, updating] = useUpdateProfile(auth);

  if (loading) {
    return <Loaging />;
  }

  console.log(user)
  
  const signUpWithEmailPassword = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!username || !email || !password || !confirmPassword) {
      console.log(`empty`);
    } else if (password !== confirmPassword) {
      console.log("Password doesn't match!");
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: username });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Sign Up Successfuly!",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/");
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
          <SignUpWithSocial/>
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