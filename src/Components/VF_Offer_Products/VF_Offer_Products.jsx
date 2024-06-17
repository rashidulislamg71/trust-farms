import styles from "./VF_Offer_Products.module.css";
import strawberry from "..//..//assets/Images/VF_Offer_Home-img/strawberry.png";
import vegetables from "..//..//assets/Images/VF_Offer_Home-img/vegetables.png";
const VF_Offer_Products = () => {
  return (
    <section id="VF_Offer_Products">
      <div className={styles.VF_Offer_Products}>
        <div className={styles.vegetables_and_fruits_offer_container}>
          <div className={styles.vegetables_offer_container}>
            <div className={styles.vegetables_offer_inner_content}>
              <div className={styles.text}>
                <h3>FRESH VEGETABLEES</h3>
                <h2>Energize Your Life, <br />Eat Vegetables Every Day!</h2>
                <h5>Get 32% OFF on 98.00$ Shopping!</h5>
                <br />
                <br />
                <a href="#">
                  {" "}
                  <button>Shop Now</button>
                </a>
              </div>
              <div className={styles.image}>
                <img
                  className={styles.vegetables_img}
                  src={vegetables}
                  alt="Vegetables"
                />
              </div>
            </div>
          </div>
          <div className={styles.fruits_offer_container}>
            <div className={styles.fruits_offer_inner_content}>
              <div className={styles.text}>
                <h3>FRESH FRUITS</h3>
                <h2>EAT FRESH FRUIT, <br /> TO LEAD HEALTHY LIFE!</h2>
                <h5>Get 20% OFF on 3.00kg Shopping!</h5>
                <br />
                <br />
                <a href="#">
                  {" "}
                  <button>Shop Now</button>
                </a>
              </div>
              <div className={styles.image}>
                <img
                  className={styles.strawberry_img}
                  src={strawberry}
                  alt="Fruits"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VF_Offer_Products;
