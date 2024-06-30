/* eslint-disable no-unused-vars */

//react icons
import { RiShoppingCartFill } from "react-icons/ri";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";

import styles from "./Fruits_products.module.css";
// Fruits img
import Apricot from "..//..//assets/Images/Fruits/Apricot.png";
import Apple from "..//..//assets/Images/Fruits/Apple.png";
import Blackberry from "..//..//assets/Images/Fruits/Blackberry.png";
import Boysenberry from "..//..//assets/Images/Fruits/Boysenberry.png";
import cherry2 from "..//..//assets/Images/Fruits/cherry2.png";
import Dates from "..//..//assets/Images/Fruits/Dates.png";
import green_guava from "..//..//assets/Images/Fruits/green-guava.png";
import mango from "..//..//assets/Images/Fruits/Mango.png";
import Oranges from "..//..//assets/Images/Fruits/Oranges.png";
import Pears from "..//..//assets/Images/Fruits/Pears.png";
import Pomegranate from "..//..//assets/Images/Fruits/Pomegranate.png";
import red_guava from "..//..//assets/Images/Fruits/red_guava.png";
import strawberry from "..//..//assets/Images/Fruits/strawberry.png";

import { useState } from "react";

const Fruits_products = () => {
  const [loveReact, setLoveReact] = useState(false);

  const toggleLoveReaction = () => {
    setLoveReact(!loveReact);
  };

  return (
    <section id="fruits_products" className={styles.fruits_products_styles}>
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
            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={Apple} alt="Apple" />
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
                <div className={styles.fruit_name}>Apple -- 1kg</div>
                <div className={styles.fruit_price}> $24.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={Pomegranate} alt="Pomegranate" />
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
                <div className={styles.fruit_name}>Pomegranate -- 1kg</div>
                <div className={styles.fruit_price}> $30.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={red_guava} alt="red_guava" />
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
                <div className={styles.fruit_name}>Red Guava -- 1kg</div>
                <div className={styles.fruit_price}> $8.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
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

            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={Pears} alt="Pears" />
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
                <div className={styles.fruit_name}>Pears -- 1kg</div>
                <div className={styles.fruit_price}> $23.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={Oranges} alt="Oranges" />
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
                <div className={styles.fruit_name}>Oranges -- 1kg</div>
                <div className={styles.fruit_price}> $29.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
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
                <div className={styles.fruit_price}> $50.00</div>
                <div className={styles.comment_btn}>
                  <button>Comment</button>
                </div>
              </div>
            </div>
            <div className={styles.fruits_cart}>
              <div className={styles.fruits_cart_top}>
                {/* <div className={styles.cart_offer}>5% OFF</div> */}
                <div className={styles.cart_img}>
                  <img src={Blackberry} alt="Blackberry" />
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
                <div className={styles.fruit_name}>Blackberry -- 1kg</div>
                <div className={styles.fruit_price}> $9.00</div>
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
