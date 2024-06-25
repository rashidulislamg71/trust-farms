import { RiShoppingCartFill } from "react-icons/ri";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";

import styles from "./Best_Selling_Products.module.css";
// import styles from "./Fruits_products.module.css";

import strawberry from "..//..//assets/Images/Fruits/strawberry.png";
import { useState } from "react";

const Best_Selling_Products = () => {
  const [loveReact, setLoveReact] = useState(false);

  const toggleLoveReaction = () => {
    setLoveReact(!loveReact);
  };

  return (
    <section id="best_selling_products">
      <div className={styles.best_selling_products_container}>
        <div className={styles.best_selling_title}>
          <h1>Best Selling Products</h1>
        </div>
        <div className={styles.best_selling_products_inner_content}>
          <div className={styles.fruits_cart}>
            <div className={styles.fruits_cart_top}>
              {/* <div className={styles.cart_offer}>5% OFF</div> */}
              <div className={styles.cart_img}>
                <img src={strawberry} alt="strawberry" />
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
              <div className={styles.fruit_name}>Strawberry -- 1kg</div>
              <div className={styles.fruit_price}> $10.00</div>
              <div className={styles.comment_btn}>
                <button>Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Best_Selling_Products;
