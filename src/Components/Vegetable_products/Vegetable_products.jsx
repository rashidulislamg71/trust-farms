/* eslint-disable no-unused-vars */

import { useContext } from "react";
import styles from "../Fruits_products/Fruits_products.module.css";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Vegetable_products = () => {
  const { vegetables, addToCartHandler, toggleLoveHandler2 } =
    useContext(GlobalContext);

  return (
    <div id="c" className={styles.fruits_products_styles}>
      <div className={styles.fruits_products_styles}>
        <div className={styles.fruits_container}>
          <div className={styles.fruits_title}>
            {" "}
            <h2>Fresh Vegetabes</h2>{" "}
          </div>
          <div className={styles.fruits_inner_content}>
            {vegetables.map((product, index) => {
              return (
                <div key={index} className={styles.fruits_cart}>
                  <div className={styles.fruits_cart_top}>
                    {/* <div className={styles.cart_offer}>5% OFF</div> */}
                    <div className={styles.cart_img}>
                      <img src={product.url} alt={product.name} />
                    </div>
                    <div className={styles.addToCart_like_shear_btn}>
                      <button
                        onClick={() => addToCartHandler(product, index)}
                        title="Add To Cart"
                      >
                        <product.cartIcon />
                      </button>
                      <button
                        title="Love"
                        onClick={() => toggleLoveHandler2(index)}
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
                        onClick={() => addToCartHandler(product, index)}
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
    </div>
  );
};

export default Vegetable_products;
