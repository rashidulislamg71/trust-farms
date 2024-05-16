/* eslint-disable no-unused-vars */

//react icons
import { RiShoppingCartFill } from "react-icons/ri";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";

import styles from "./Fruits_products.module.css";
// Fruits img
import mango from "..//..//assets/Images/Fruits/Mango.png";
import Apricot from "..//..//assets/Images/Fruits/Apricot.png";
import cherry2 from "..//..//assets/Images/Fruits/cherry2.png";
import green_guava from "..//..//assets/Images/Fruits/green-guava.png";
import { useState } from "react";

const Fruits_products = () => {
  const [loveReact, setLoveReact] = useState(false);

  const toggleLoveReaction = () => {
    setLoveReact(!loveReact);
  };

  return (
    <section className={styles.fruits_products_styles}>
      <div className={styles.fruits_products_styles}>
        <div className={styles.fruits_container}>
          <div className={styles.fruits_title}>
            {" "}
            <h1>Our Products</h1>{" "}
          </div>
          <div className={styles.fruits_inner_content}>
            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={mango} alt="Mango" />
                </div>
                <div className={styles.addToCart_like_shear_btn}>
                  <button title="Add To Cart">
                    <RiShoppingCartFill />
                  </button>
                  <button title="Love" onClick={toggleLoveReaction}>
                    {loveReact ? <IoIosHeart /> : <IoIosHeartEmpty />}
                  </button>

                  <button title="Share">
                    <IoShareSocial />
                  </button>
                </div>
              </div>

              <div className={styles.fruits_cart_bottom}>
                <div className={styles.fruit_name}>Mango -- 1kg</div>
                <div className={styles.fruit_price}> $20.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={Apricot} alt="Apricot" />
                </div>
                <div className={styles.addToCart_like_shear_btn}>
                  <button title="Add To Cart">
                    <RiShoppingCartFill />
                  </button>
                  <button title="Love" onClick={toggleLoveReaction}>
                    {loveReact ? <IoIosHeart /> : <IoIosHeartEmpty />}
                  </button>

                  <button title="Share">
                    <IoShareSocial />
                  </button>
                </div>
              </div>

              <div className={styles.fruits_cart_bottom}>
                <div className={styles.fruit_name}>Apricot -- 1kg</div>
                <div className={styles.fruit_price}> $20.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={cherry2} alt="cherry2" />
                </div>
                <div className={styles.addToCart_like_shear_btn}>
                  <button title="Add To Cart">
                    <RiShoppingCartFill />
                  </button>
                  <button title="Love" onClick={toggleLoveReaction}>
                    {loveReact ? <IoIosHeart /> : <IoIosHeartEmpty />}
                  </button>

                  <button title="Share">
                    <IoShareSocial />
                  </button>
                </div>
              </div>

              <div className={styles.fruits_cart_bottom}>
                <div className={styles.fruit_name}>Cherry -- 1kg</div>
                <div className={styles.fruit_price}> $20.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={green_guava} alt="Green Guava" />
                </div>
                <div className={styles.addToCart_like_shear_btn}>
                  <button title="Add To Cart">
                    <RiShoppingCartFill />
                  </button>
                  <button title="Love" onClick={toggleLoveReaction}>
                    {loveReact ? <IoIosHeart /> : <IoIosHeartEmpty />}
                  </button>

                  <button title="Share">
                    <IoShareSocial />
                  </button>
                </div>
              </div>

              <div className={styles.fruits_cart_bottom}>
                <div className={styles.fruit_name}>Green Guava -- 1kg</div>
                <div className={styles.fruit_price}> $10.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fruits_products;
