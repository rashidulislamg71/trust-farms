/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import banner_1 from "..//..//assets/Images/Banner img/vegetables.png";
import banner_2 from "..//..//assets/Images/Banner img/banner2.png";
import Fruits_products from "../../Components/Fruits_products/Fruits_products";
import VF_Offer_Products from "../../Components/VF_Offer_Products/VF_Offer_Products";
import Best_Selling_Products from "../../Components/Best_Selling_Products/Best_Selling_Products";

import Shops from "../../Components/Shops/Shops";
import { Link } from "react-router-dom";




function Home() {
 
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  // };
  return (
    <div className={styles.slider_container}>
      <div className={styles.home_section}>
        {/* <Slider {...settings}> */}
          <div className={styles.hero_banner}>
            <div className={styles.banner_1_container}>
              <div className={styles.content_text}>
                <h3>Wellcome to your Trust Farms !</h3>

                <div className={styles.title}>
                  <h5>100% Genuine Products.</h5>
                  <h1>
                    Tasty & Health  Organic <br />Foods.
                    <div className={styles.offer}>
                      {/* <h2>20% OFF!</h2> */}
                    </div>
                  </h1>
                  <Link to="/vegetables">  <button>Shop Now</button></Link>
                </div>
              </div>
              <div className={styles.banner_img}>
                <img src={banner_1} alt="" />
              </div>
            </div>
          </div>


          {/* <div className={styles.hero_banner}>
            <div className={styles.banner_1_container}>
              <div className={styles.banner_img}>
                <img src={banner_2} alt="" />
              </div>
              <div className={`${styles.content_text} ${styles.content_text2}`}>
                <div className={`${styles.title} ${styles.title2}`}>
                  <h5>100% Natural Products.</h5>
                  <h2>
                    Our Garden's Most <br /> Favorite Foods
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta <br /> numquam sequi maiores blanditiis ex autem
                  </p>
                  <button>Explore Products</button>
                </div>
              </div>
            </div>
          </div> */}
        {/* </Slider> */}

        <VF_Offer_Products />
        <Best_Selling_Products />
        <Shops />
      </div>
    </div>
  );
}

export default Home;
