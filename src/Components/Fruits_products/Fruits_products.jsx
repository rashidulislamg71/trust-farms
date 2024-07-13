/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


import styles from "./Fruits_products.module.css";

import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Fruits_products = () => {
  const { products, addToCartHandler, toggleLoveHandler,} = useContext(GlobalContext);


  return (
    <div id="fruits_products" className={styles.fruits_products_styles}>
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
                      <button onClick={()=>addToCartHandler(product, index)} title="Add To Cart">
                        <product.cartIcon />
                      </button>
                      <button title="Love" onClick={()=>toggleLoveHandler(index)}>
                        {product.loved ? <span><product.loveIcon /> </span> : <product.loveIcon2 />}
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
                      <button title="" onClick={() => addToCartHandler(product, index)}>
                        {product.addToCartBtn} 
                        {/* <span><product.cartIcon /></span> */}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fruits_products;
