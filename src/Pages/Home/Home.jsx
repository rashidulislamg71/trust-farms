/* eslint-disable no-unused-vars */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import banner_1 from "..//..//assets/Images/Banner img/vegetables.png";
import banner_2 from "..//..//assets/Images/Banner img/Fruits1.png";

function Home() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    waitForAnimate: false,
  };
  return (
    <div className={styles.slider_container}>
      <Slider {...settings}>
        <div className={styles.home_section}>
          <div className={styles.banner_1_container}>
            <div className={styles.content_text}>
              <h1>
                Wellcome to your Trust Farms !
              </h1>

              <div className={styles.title}>
                <h5>100% Genuine Products.</h5>
                <h2>
                  Tasty & Health <br /> Organic Foods.
                  <div className={styles.offer}>
                    <h2>20% OFF!</h2>
                  </div>
                </h2>
                <button>Shop Now</button>
              </div>
            </div>
            <div className={styles.content_img}>
              <img src={banner_1} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.home_section}>
          <div className={styles.banner_1_container}>
            <div className={styles.content_text}>
              <h1>
                Wellcome to your Trust Farms
              </h1>

              <div className={styles.title}>
                <h5>100% Genuine Products.</h5>
                <h2>
                  Tasty & Health <br /> Organic Foods.
                  <div className={styles.offer}>
                    <h2>20% OFF!</h2>
                  </div>
                </h2>
                <button>Shop Now</button>
              </div>
            </div>
            <div className={styles.content_img}>
              <img src={banner_2} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Home;
