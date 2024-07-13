import styles from "./SearchAndCart.module.css";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountBox } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SearchAndCart = () => {
  return (
    <div id="search_account_cart">
      <div className={styles.search_account_cart_content}>
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
          <div className={styles.account_section}>
            <div className={styles.account}>
              <MdAccountBox />
            </div>

            <div className={styles.dropdown_menu_container}>
              <div className={styles.dropdown_menu_inner_content}>
                <NavLink to=""> My Account</NavLink>
                <NavLink to="/login"> LogIn</NavLink>
              </div>
            </div>
          </div>

          <div className={styles.addToCart}>
            <p>
              <span className={styles.cartTitle}>Cart</span>
              <FiShoppingCart /> <b>0</b>
            </p>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default SearchAndCart;
