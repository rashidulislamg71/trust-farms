// import styles from "./SignUpWithSocial.module.css";
// import { FaFacebook } from "react-icons/fa";
// import { AiFillGoogleCircle } from "react-icons/ai";

// const SignUpWithSocial = () => {
//   return (
//     <div id={styles.signup_social}>
//       <div className={styles.signup_container}>
//         <div className={`${styles.flex} ${styles.social_inner_content}`}>

   
//         <div className={`${styles.facebook} ${styles.flex}`}>
//           <button className={`${styles.flex}`}>
//            <span><FaFacebook /></span> Facebook
//           </button>
//         </div>
//         <div className={`${styles.google} ${styles.flex}`}>
//           <button className={`${styles.flex}`}><span><AiFillGoogleCircle /></span> Google</button>
//         </div>

//         </div>
//         <div className={`${styles.flex} ${styles.or}`}>
//            ---------- OR ----------
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpWithSocial;



import { FaFacebook } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import styles from './SignUpWithSocial.module.css';

const SignUpWithSocial = () => {
  

  return (
    <div id={styles.signup_social}>
      <div className={styles.signup_container}>
        <div className={`${styles.flex} ${styles.social_inner_content}`}>
          <div className={`${styles.google} ${styles.flex}`}>
            <button className={`${styles.flex}`} >
              <span><AiFillGoogleCircle /></span> Google
            </button>
          </div>
          <div className={`${styles.facebook} ${styles.flex}`}>
            <button className={`${styles.flex}`}>
              <span><FaFacebook /></span> Facebook
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





