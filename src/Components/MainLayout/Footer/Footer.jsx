/* eslint-disable no-unused-vars */
import styles from "./Footer.module.css";
import Logo from "./../../Logo/Logo";
import { NavLink } from "react-router-dom";
// social icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

//payment methods
import { RiVisaFill } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import bkash from "..//..//..//assets/Images/Payment/Bkash.png";
import nagad from "..//..//..//assets/Images/Payment/Nagad.png";
import paypal from "..//..//..//assets/Images/Payment/paypal.png";
import visa from "..//..//..//assets/Images/Payment/visa.png";
import masterCard from "..//..//..//assets/Images/Payment/masterCard.png";

// contact info
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.footer_logo}>
          <Logo />
        </div>

        <div className={`${styles.footer_top}`}>
          <div
            className={` ${styles.contact_info} ${styles.footer_content_top}`}
          >
            <ul>
              <h3>CONTACT US</h3>
              <div>
                <span className={styles.email_icon}>
                  <MdEmail />
                </span>
                <a className={styles.email} href="mailto:name@gmail.com">
                  jrashidulislam0103@gmail.com
                </a>
              </div>
              <div>
                <span className={styles.phone_icon}>
                  <FaSquarePhone />
                </span>
                <a className={styles.phone} href="tel:01700000011">
                  01700000011
                </a>
              </div>
              <div>
                <span className={styles.location_icon}>
                  <FaMapLocationDot />
                </span>
                Sirajganj Sadar, 432 Main rd, <br /> Rajshahi, Banglasesh
              </div>
            </ul>
          </div>
          <div
            className={`${styles.company_list} ${styles.footer_content_top}`}
          >
            <ul>
              <h3>COMPANY</h3>
              <NavLink>About</NavLink>
              <NavLink>Blogs</NavLink>
              <NavLink>All Products</NavLink>
              <NavLink>FAQ</NavLink>
              <NavLink>Map</NavLink>
            </ul>
          </div>
          <div
            className={`${styles.services_list} ${styles.footer_content_top}`}
          >
            <ul>
              <h3>CUSTOMER CARE</h3>
              <NavLink>Help Center</NavLink>
              <NavLink>How to Buy</NavLink>
              <NavLink>Returns & Refunds</NavLink>
              <NavLink>Terms & Conditions</NavLink>
              <NavLink>Syestem</NavLink>
            </ul>
          </div>

          <div className={`${styles.earn_with} ${styles.footer_content_top}`}>
            <ul>
              <h3>Earn With Trust Farms</h3>
              <NavLink>Trust Farms</NavLink>
              <NavLink>Shopkeeper</NavLink>
              <NavLink>Sell on Trust Farms</NavLink>
              <NavLink>Delivery Man</NavLink>
              <NavLink>Join Affiliate Program</NavLink>
            </ul>
          </div>
        </div>

        <div className={`${styles.footer_bottom}`}>
          <div
            className={`${styles.social_list} ${styles.footer_content_bottom}`}
          >
            <a title="Facebook" href="#">
              {" "}
              <FaFacebookSquare />{" "}
            </a>
            <a title="Linkein" href="#">
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a title="Twiter" href="#">
              {" "}
              <FaTwitterSquare />{" "}
            </a>
            <a title="Youtube" href="#">
              {" "}
              <FaYoutubeSquare />{" "}
            </a>
            <a title="instagram" href="#">
              {" "}
              <FaInstagramSquare />{" "}
            </a>
            <a title="WhatsApp" href="#">
              {" "}
              <FaSquareWhatsapp />{" "}
            </a>
          </div>
          <div
            className={`${styles.copy_right} ${styles.footer_content_bottom}`}
          >
            <p>&copy;2024 All Right Reserved By Trust Farms Ltd.</p>
          </div>
          <div
            className={`${styles.payment_methods} ${styles.footer_content_bottom}`}
          >
            <a title="Bkash" href="#">
              {" "}
              <img src={bkash} alt="" />{" "}
            </a>
            <a title="Nagad" href="#">
              {" "}
              <img src={nagad} alt="" />{" "}
            </a>
            <a title="Paypal" href="#">
            <img src={paypal} alt="" />
              {/* <FaCcMastercard /> */}
            </a>
            <a title="MasterCard" href="#">
            <img src={masterCard} alt="" />
              {/* <RiVisaFill /> */}
            </a>
            <a title="Visa" href="#">
            <img src={visa} alt="" />
              {/* <FaCcPaypal /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
