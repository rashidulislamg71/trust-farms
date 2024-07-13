/* eslint-disable no-unused-vars */
import styles from "./Shops.module.css";

// import bg from "..//..//assets/Images/Shop_img/shop bg.png";
import shop_1 from "..//..//assets/Images/Shop_img/Shop 1.png";
import shop_2 from "..//..//assets/Images/Shop_img/Shop_2.png";
import shop_3 from "..//..//assets/Images/Shop_img/Shop_3.png";
import shop_4 from "..//..//assets/Images/Shop_img/Shop_4.png";

const Shops = () => {
  return (
    <div id="shops">
      <div className={styles.shops_container}>
        <div className={styles.shops_title}>
          <h1>Visit Our Shops And Shop With More Happiness.</h1>
          <h2>We Hope You Will Like Our Shop</h2>
        </div>
        <div className={styles.shops_inner_content}>
          <div className={styles.shop_img}>
            <img src={shop_2} alt="Mirpur 10, Dhaka" />
            <h3>Location: Sirajganj Sadar, Road 19</h3>
            <button>Shop Details</button>
          </div>
          <div className={styles.shop_img}>
            <img src={shop_3} alt="Mirpur 10, Dhaka" />
            <h3>Location: Mirpur 10, Dhaka</h3>
            <button>Shop Details</button>
          </div>
          <div className={styles.shop_img}>
            <img src={shop_4} alt="Mirpur 10, Dhaka" />
            <h3>Location:Rajshahi Road 10 </h3>
            <button>Shop Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
