/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import styles from "./SignUpWithSocial.module.css";
import auth from "./../../Firebase/Firebase.Config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "./../Loading/Loading";
import { useEffect } from "react";

const SignUpWithSocial = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth, { sendEmailVerification: true });

  useEffect(() => {
    // loading
    if (googleLoading) {
      <Loading />;
    }

    // Error logic
    if (googleError) {
      console.error("Error:", googleError?.message);
    }

    // Login logic
    if (googleUser) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfuly!",
        showConfirmButton: false,
        timer: 1500,
        width: 300,
      });
      navigate(`/`);
    }
  }, [googleLoading, googleError, googleUser, navigate]);

  return (
    <div id={styles.signup_social}>
      <div className={styles.signup_container}>
        <div className={`${styles.flex} ${styles.social_inner_content}`}>
          <div className={`${styles.google} ${styles.flex}`}>
            <button
              onClick={() => signInWithGoogle()}
              className={`${styles.flex}`}
            >
              <span>
                <AiFillGoogleCircle />
              </span>{" "}
              Google
            </button>
          </div>
          <div className={`${styles.facebook} ${styles.flex}`}>
            <button className={`${styles.flex}`}>
              <span>
                <FaFacebook />
              </span>{" "}
              Facebook
            </button>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.or}`}>
          ---------- OR ----------
        </div>
      </div>
    </div>
  );
};

export default SignUpWithSocial;
