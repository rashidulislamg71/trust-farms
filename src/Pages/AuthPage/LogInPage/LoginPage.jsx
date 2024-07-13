/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// /* eslint-disable no-undef */

import { Link, useNavigate } from "react-router-dom";

import styles from "./LoginPage.module.css";
import SignUpWithSocial from "../../../Components/SignUpWithSocial/SignUpWithSoical";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.Config";
import Loading from "../../../Components/Loading/Loading";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    useEffect(()=>{
      if (user) {
        navigate("/");
      }
    },[user, navigate] );

  if (loading) {
    return <Loading />;
  }

  const signInHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      return alert("email or password doesn't match!");
    } else {
      await signInWithEmailAndPassword(email, password);
    }
  };

  return (
    <div>
      <div className={styles.signInPageParent}>
        <div className={styles.signInPageInfo}>
          <div className="motivation">
            <div className="LogInImage">
              {/* <img src={loginImage} alt="" /> */}
            </div>
          </div>
          <div className={styles.signInForm}>
            <div className={styles.title}>
              <h1>Log In</h1>
              <hr />
              <div className={styles.haveAccountLogIn}>
                <p>
                  Create a New Free Account?
                  <Link to="/signup">
                    <span>Sign Up</span>
                  </Link>
                </p>
              </div>
            </div>

            <SignUpWithSocial />

            <div className={styles.formInfo}>
              <form onSubmit={signInHandler}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id={styles.emailLogIn}
                  autoFocus
                  required
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id={styles.passwordLogIn}
                  required
                />{" "}
                <br />
                {error ? (
                  <p style={{ color: "red" }}>Email or Password does not match!
                  </p>
                ) : (
                  ""
                )}
                <div className={styles.submitBtnLogIn}>
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
            {/* <SocialSignUp /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
