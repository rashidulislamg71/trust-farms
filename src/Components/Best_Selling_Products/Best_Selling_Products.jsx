/* eslint-disable no-unused-vars */
import { RiShoppingCartFill } from "react-icons/ri";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";

import styles from "./Best_Selling_Products.module.css";

import Dates from "..//..//assets/Images/Fruits/Dates.png";
import Beets from "..//..//assets/Images/Vegetabes img/Beets.png";
import cherry from "..//..//assets/Images/Fruits/cherry.png";
import Capsicum from "..//..//assets/Images/Vegetabes img/Capsicum.png";

import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { Link } from "react-router-dom";

const Best_Selling_Products = () => {
  const [loveReact, setLoveReact] = useState(false);

  const { cart } = useContext(GlobalContext);

  const toggleLoveReaction = () => {
    setLoveReact(!loveReact);
  };

  return (
    <div id="best_selling_products">
      <div className={styles.best_selling_products_container}>
        <div className={styles.best_selling_title}>
          <h2>Best Selling Products</h2>
        </div>
        <div className={styles.best_selling_products_inner_content}>
          <div className={styles.fruits_cart}>
            <div className={styles.fruits_cart_top}>
              {/* <div className={styles.cart_offer}>5% OFF</div> */}
              <div className={styles.cart_img}>
                <img src={Dates} alt="Dates" />
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
              <div className={styles.fruit_name}>Dates -- 1kg</div>
              <div className={styles.fruit_price}> 1000 TK</div>
              <div className={styles.comment_btn}>
                <Link to="/all_products">
                  <button>Go to Shopping</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.fruits_cart}>
            <div className={styles.fruits_cart_top}>
              {/* <div className={styles.cart_offer}>5% OFF</div> */}
              <div className={styles.cart_img}>
                <img src={Beets} alt="Beets" />
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
              <div className={styles.fruit_name}>Beetroot -- 1kg</div>
              <div className={styles.fruit_price}> 230 TK</div>
              <div className={styles.comment_btn}>
                <Link to="/all_products">
                  <button>Go to Shopping</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.fruits_cart}>
            <div className={styles.fruits_cart_top}>
              {/* <div className={styles.cart_offer}>5% OFF</div> */}
              <div className={styles.cart_img}>
                <img src={cherry} alt="cherry" />
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
              <div className={styles.fruit_price}>500 TK</div>
              <div className={styles.comment_btn}>
                <Link to="/all_products">
                  <button>Go to Shopping</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.fruits_cart}>
            <div className={styles.fruits_cart_top}>
              {/* <div className={styles.cart_offer}>5% OFF</div> */}
              <div className={styles.cart_img}>
                <img src={Capsicum} alt="Capsicum" />
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
              <div className={styles.fruit_name}>Capsicum -- 1kg</div>
              <div className={styles.fruit_price}> 160 TK</div>
              <div className={styles.comment_btn}>
                <Link to="/all_products">
                  <button>Go to Shopping</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best_Selling_Products;
