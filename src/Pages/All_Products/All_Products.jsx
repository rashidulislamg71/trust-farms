import Fruits_products from "../../Components/Fruits_products/Fruits_products";
import Vegetable_products from "./../../Components/Vegetable_products/Vegetable_products";
import styles from "./All.Products.module.css";
const All_Products = () => {
  return (
    <div id="all_products">
      <div className={styles.All_Products}>
        <div className={styles.fruits}>
          <Fruits_products />
        </div>
        <div className={styles.vegetable}>
          <Vegetable_products />
        </div>
      </div>
    </div>
  );
};

export default All_Products;
