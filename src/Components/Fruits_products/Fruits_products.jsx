/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import styles from "./Fruits_products.module.css";

import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Loading from "./../Loading/Loading";

const Fruits_products = () => {
  const {
    products,
    toggleLoveHandlerWithCondation,
    addToCartWithCondition,
    loading,
  } = useContext(GlobalContext);


  return (
    <div id="fruits_products" className={styles.fruits_products_styles}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.fruits_products_styles}>
            <div className={styles.fruits_container}>
              <div className={styles.fruits_title}>
                {" "}
                <h2>Fresh Fruits</h2>{" "}
              </div>
              <div className={styles.fruits_inner_content}>
                {products.map((product, index) => {
                  return (
                    <div key={index} className={styles.fruits_cart}>
                      <div className={styles.fruits_cart_top}>
                        {/* <div className={styles.cart_offer}>5% OFF</div> */}
                        <div className={styles.cart_img}>
                          <img src={product.url} alt={product.name} />
                        </div>

                        <div className={styles.addToCart_like_shear_btn}>
                          <button
                            onClick={() =>
                              addToCartWithCondition(product, index)
                            }
                            title="Add To Cart"
                          >
                            <product.cartIcon />
                          </button>
                          <button
                            title="Love"
                            onClick={() => toggleLoveHandlerWithCondation(index)}
                          >
                            {product.loved ? (
                              <span>
                                <product.loveIcon />{" "}
                              </span>
                            ) : (
                              <product.loveIcon2 />
                            )}
                          </button>

                          <button title="Share">
                            <product.shearIcon />
                          </button>
                        </div>
                      </div>

                      <div className={styles.fruits_cart_bottom}>
                        <div className={styles.fruit_name}>
                          {product.name} --{product.quantity} {product.weight}
                        </div>
                        <div className={styles.fruit_price}>
                          {" "}
                          TK - {product.price}
                        </div>
                        <div className={styles.comment_btn}>
                          <button
                            title=""
                            onClick={() =>
                              addToCartWithCondition(product, index)
                            }
                          >
                            {product.addToCartBtn}
                            {/* <span><product.cartIcon /></span> */}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Fruits_products;
