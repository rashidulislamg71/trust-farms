import React from 'react';
import styles from "./Offer_products.module.css";
import { Link } from 'react-router-dom';

// Images 
import huney_bee from "../../assets/Images/Home-img/Honey-bee.png";
import Almonds from "../../assets/Images/Home-img/Almonds.png";
import mangos from "../../assets/Images/Home-img/mangos.png";

const Offer_products = () => {
  return (
    <div className={styles.offer_products_styles}>
      <div className={styles.offer_products_container}>
        <div className={styles.offer_products_inner_content}>
          <div className={styles.offer_products_content}>
            <Link to="#">
              <div className={styles.left_offer_product}>
                <div className={styles.left_offer_product_content}>
                  <div>
                    <h2>100% Natural Organic Honey <span>45% OFF!</span></h2>
                    <h3>Honey is the best food for your healthy life.</h3>
                    <h4>NEVER MISS OFFER!</h4>
                    <button>Shop Now</button>
                  </div>
                  <div>
                    <img src={huney_bee} alt="huney_bee" />
                  </div>
                </div>
              </div>
            </Link>
            <div className={styles.right_offer_product}>
              <Link to="#">
                <div className={styles.right_offer_product_content}>
                  <img src={Almonds} alt="Almonds" />
                  <h3>Up to 20% off Fresh <br /> Almond Seeds</h3>
                </div>
              </Link>
              <Link to="#">
                <div className={styles.right_offer_product_content}>
                  <h3>Up to 30% off Fresh <br /> Mangoes</h3>
                  <img src={mangos} alt="Mangos" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer_products;