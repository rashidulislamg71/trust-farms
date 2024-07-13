

import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "..//..//..//public/Trust farm logo.png";

const Logo = () => {
    return (
        <div>
             <div className={styles.logo}>
        <Link to="/">
          <p>
         Trust  <img src={logo} alt="Logo"/> <span>Farms</span> 
          </p>
        </Link>
      </div>
        </div>
    );
};

export default Logo;