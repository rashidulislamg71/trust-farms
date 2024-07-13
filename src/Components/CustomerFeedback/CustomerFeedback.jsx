/* eslint-disable no-unused-vars */
import React from "react";
// import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./CustomerFeedback.module.css";

// CustomerFeedback img
import customer1 from "..//..//assets/Images/customer_feedback_img/customer1.jpg";
import customer2 from "..//..//assets/Images/customer_feedback_img/customer2.jpg";
import customer3 from "..//..//assets/Images/customer_feedback_img/customer3.jpg";
import customer4 from "..//..//assets/Images/customer_feedback_img/customer4.jpg";
import customer5 from "..//..//assets/Images/customer_feedback_img/customer5.jpg";
import customer6 from "..//..//assets/Images/customer_feedback_img/customer6.jpg";
import customer7 from "..//..//assets/Images/customer_feedback_img/customer7.jpg";
import { FaSquarePhone } from "react-icons/fa6";

const CustomerFeedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.customer_feedback_styles}>
      <div className={styles.feedback_title}>
        <p>TESTIMONIAL</p>
        <h1>Customer Feedback</h1>
      </div>
      <div className={styles.feedback_slider}>
        <Slider {...settings}>
         <div className={styles.inner}>
         <img src={customer1} alt="Customer 1" />
            <h3>RASHED HASSAN</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              porro deleniti ut nulla cupiditate corrupti debitis! Quos placeat
              accusantium officiis.
            </p>
            <b>Date: 10/04/2024</b>
         </div>
          
    
        </Slider>
      </div>
    </section>
  );
};

export default CustomerFeedback;
