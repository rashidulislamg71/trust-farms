import styles from "./SearchAndCart.module.css";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountBox } from "react-icons/md";

const SearchAndCart = () => {
  return (
    <section className={styles.searchAndCart}>
      <div title="Search" className={styles.search}>
        <span className={styles.searchIcon}>
          <IoSearch />
        </span>
        <input
          className={styles.searchBox}
          type="search"
          placeholder="Search Product"
        />
      </div>

      <div className={styles.cartAndAccount}>
        <div className={styles.account}>
          <MdAccountBox />
        </div>

        <div className={styles.addToCart}>
          <p>
            {/* <span className={styles.cartTitle}>Cart</span> */}
            <FiShoppingCart /> <b>0</b>
          </p>
        </div>

      </div>
    </section>
  );
};

export default SearchAndCart;
