/* eslint-disable no-unused-vars */

import styles from "./AboutUs.module.css";
import Vegetabes_filed from "..//..//assets/Images/About img/filed vegetabes.png";
import Vegetabes_filed2 from "..//..//assets/Images/About img/Farmer&filed.jpg";
import fruits_filed from "..//..//..//public/fruits filed.png";

import featureImg_1 from "..//..//assets/Images/icons/Natural.png";
import featureImg_2 from "..//..//assets/Images/icons/Delevery.png";
import featureImg_3 from "..//..//assets/Images/icons/Good Pakeging.png";

// Team Members img
import funder from "..//..//assets/Images/Team_members/Funder.png";
import funder2 from "..//..//assets/Images/Team_members/Funder2.png";
import CEO from "..//..//assets/Images/Team_members/CEO.png";
import manager from "..//..//assets/Images/Team_members/Manager.png";

// Team members socials
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import CustomerFeedback from "../../Components/CustomerFeedback/CustomerFeedback";
// import ShopBtn from "../../Components/ShopBtn/ShopBtn";


const AboutUs = () => {
  return (
    <div className={styles.aboutUs_section}>
      <div className={styles.about_container}>
        <div className={styles.about_banner}></div>
        <div className={`${styles.about_content} ${styles.aboutus_textAndimg}`}>
          <div className={styles.about_img_container}>
            <div className={`${styles.img_inner_content}`}>
              <img
                className={`${styles.about_img1}`}
                src={fruits_filed}
                alt=""
              />
            </div>
            <div className={`${styles.img_inner_content} `}>
              <img
                className={`${styles.about_img2}`}
                src={Vegetabes_filed}
                alt=""
              />
            </div>
            <div className={`${styles.img_inner_content} `}>
              <img
                className={`${styles.about_img3}`}
                src={Vegetabes_filed2}
                alt=""
              />
            </div>
          </div>{" "}
          <div className={styles.about_inner_text}>
            <h1>ABOUT US</h1>
            <b>Know more about our shops & foods</b>
            <h2>
              Trusted organic <br /> Foods Store
            </h2>
            <p className={styles.styles_p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste
              reprehenderit cumque quos rem, molestiae aperiam officiis velit?
              Odit, soluta.
            </p>

            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              labore voluptas corrupti quos aut impedit numquam ipsum doloribus
              quasi eos dolores odit id, delectus modi quo animi temporibus
              deserunt saepe nostrum aspernatur officia. Sapiente aspernatur
              alias dolores iste consectetur voluptates rerum. Aut laborum nobis
              recusandae eaque maiores beatae fugit accusamus incidunt,
              explicabo tempora rerum illo vero quae commodi error! Repellat
              deserunt tempora veniam velit tenetur necessitatibus voluptatem
              adipisci porro est.
            </p>
          </div>
        </div>

        
        <div className={`${styles.about_content} ${styles.why_choose_us}`}>
          <div className={styles.title}>
            <p>|| FEATURES ||</p>
            <h1>
              Why Choose Us<span>!</span>
            </h1>
          </div>
          <div className={styles.why_choose_us_inner}>
            <div className={styles.features_container}>
              <div className={styles.icon_title}>
                <img src={featureImg_1} alt="" />
                <h3>100% Natural Products</h3>
              </div>
              <div className={styles.feature_text}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus, odit quibusdam culpa mollitia distinctio suscipit
                  blanditiis repellendus porro vitae fugit.
                </p>
              </div>
            </div>
            <div className={styles.features_container}>
              <div className={styles.icon_title}>
                <img src={featureImg_2} alt="" />
                <h3>Fast Delevery & Return</h3>
              </div>
              <div className={styles.feature_text}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus, odit quibusdam culpa mollitia distinctio suscipit
                  blanditiis repellendus porro vitae fugit.
                </p>
              </div>
            </div>
            <div className={styles.features_container}>
              <div className={styles.icon_title}>
                <img src={featureImg_3} alt="" />
                <h3>Eco-Conscious Packaging</h3>
              </div>
              <div className={styles.feature_text}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus, odit quibusdam culpa mollitia distinctio suscipit
                  blanditiis repellendus porro vitae fugit.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className={`${styles.about_content} ${styles.team_members}`}>
          <div className={styles.team_member_title}>
            <h1>Team Members</h1>
          </div>
          <div className={styles.team_members_container}>
            <div className={styles.team_member_inner_content}>
              <div className={styles.team_memeber_front}>
                <div className={styles.team_member_img}>
                  <img src={funder} alt="Funder" />
                </div>
                <div className={styles.team_member_identity}>
                  <h4>FUNDER</h4>
                  <h3>KAMRUL KOLI</h3>
                </div>
              </div>

              <div className={styles.team_member_hover}>
                <div className={styles.team_members_socials}>
                  <span>
                    <IoLogoFacebook />
                  </span>
                  <span>
                    <IoLogoLinkedin />
                  </span>
                  <span>
                    <AiFillInstagram />
                  </span>
                  <span>
                    <IoLogoTwitter />
                  </span>
                  <span>
                    <AiOutlineMail />
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.team_member_inner_content}>
              <div className={styles.team_memeber_front}>
                <div className={styles.team_member_img}>
                  <img src={funder2} alt="Funder" />
                </div>
                <div className={styles.team_member_identity}>
                  <h4>FUNDER</h4>
                  <h3>JARIR RASHED</h3>
                </div>
              </div>

              <div className={styles.team_member_hover}>
                <div className={styles.team_members_socials}>
                  <span>
                    <IoLogoFacebook />
                  </span>
                  <span>
                    <IoLogoLinkedin />
                  </span>
                  <span>
                    <AiFillInstagram />
                  </span>
                  <span>
                    <IoLogoTwitter />
                  </span>
                  <span>
                    <AiOutlineMail />
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.team_member_inner_content}>
              <div className={styles.team_memeber_front}>
                <div className={styles.team_member_img}>
                  <img src={CEO} alt="Funder" />
                </div>
                <div className={styles.team_member_identity}>
                  <h4>CEO</h4>
                  <h3>JKARIYA KOBIR</h3>
                </div>
              </div>

              <div className={styles.team_member_hover}>
                <div className={styles.team_members_socials}>
                  <span>
                    <IoLogoFacebook />
                  </span>
                  <span>
                    <IoLogoLinkedin />
                  </span>
                  <span>
                    <AiFillInstagram />
                  </span>
                  <span>
                    <IoLogoTwitter />
                  </span>
                  <span>
                    <AiOutlineMail />
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.team_member_inner_content}>
              <div className={styles.team_memeber_front}>
                <div className={styles.team_member_img}>
                  <img src={manager} alt="Funder" />
                </div>
                <div className={styles.team_member_identity}>
                  <h4>MANAGER</h4>
                  <h3>JABIR IBNE HAYYAN</h3>
                </div>
              </div>

              <div className={styles.team_member_hover}>
                <div className={styles.team_members_socials}>
                  <span>
                    <IoLogoFacebook />
                  </span>
                  <span>
                    <IoLogoLinkedin />
                  </span>
                  <span>
                    <AiFillInstagram />
                  </span>
                  <span>
                    <IoLogoTwitter />
                  </span>
                  <span>
                    <AiOutlineMail />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
