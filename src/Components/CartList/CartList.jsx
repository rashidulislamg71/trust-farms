/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import styles from "./CartList.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { PiGiftDuotone } from "react-icons/pi";
import { RiUnderline, RiUserLocationFill } from "react-icons/ri";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CartList = () => {
  const {
    cart,
    totalPrice,
    payableTotalPrice,
    deliveryCharge,
    totalQuantity,
    Increment,
    Decrement,
    deleteCartItem,
    clearCart,
    user,
  } = useContext(GlobalContext);

  // Delete and Alart box function
  const deletAlartHandler = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCartItem(index);
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  const clearCartHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear it!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Cleared!", "All items have been deleted.", "success");
       
      }
    });
  };

  return (
    <div id="CartList">
      <div className={styles.ShoppingCart_container}>
        <div className={`${styles.flex} ${styles.ShoppingCart_inner_content}`}>
          <div className={` ${styles.flex} ${styles.all_shopping_contaniner}`}>
            <div
              className={`${styles.flex} ${styles.all_shopping_inner_content}`}
            >
              <div
                className={`${styles.flex} ${styles.select_item_and_total_price}`}
              >
                <p>
                  Selected <b>({cart.length} Item)</b>
                </p>
                <p>
                  Total Weight: <b>{totalQuantity} KG</b>
                </p>
                <p>
                  Your total:<b>{totalPrice} TK</b>
                </p>
              </div>
              {user ? (
                cart.length ? (
                  cart.map((cartItem, index) => {
                    return (
                      <div
                        key={index}
                        className={`${styles.flex} ${styles.single_shoppingCart_details}`}
                      >
                        <img src={cartItem.url} alt={cartItem.name} />
                        <b>{cartItem.name}</b>
                        <div
                          className={`${styles.flex} ${styles.quantity_btn}`}
                        >
                          <button onClick={() => Decrement(index)}>-</button>
                          <p>
                            {cartItem.quantity} {cartItem.weight}
                          </p>
                          <button onClick={() => Increment(index)}>+</button>
                        </div>
                        <b>{cartItem.price} TK.</b>
                        <button
                          title="Remove Item"
                          className={`${styles.flex} ${styles.remove_btn}`}
                          onClick={() => deletAlartHandler(index)}
                        >
                          <MdDeleteOutline />
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <>
                
                  <p
                    className={`${styles.no_cart_item} ${styles.single_shoppingCart_details}`}
                  >
                    {" "}
                    No cart item was found{" "}
                    <Link to="/fruits">
                      <button>Go to Shopping</button>
                    </Link>
                  </p>
                  </>
                )
              ) : (
                <>
                  <p
                    className={`${styles.no_cart_item} ${styles.single_shoppingCart_details}`}
                  >
                    {" "}
                    No cart item was found{" "}
                    <Link to="/fruits">
                      <button>Go to Shopping</button>
                    </Link>
                  </p>
                </>
              )}

              <div className={`${styles.flex} ${styles.loved_ones_gift_text}`}>
                <span>
                  <PiGiftDuotone />
                </span>
                Click the <q>Order as a Gift</q> button to gift to your loved
                ones
              </div>

              <div
                className={`${styles.flex} ${styles.cart_DeleteAll_and_order_now_btn}`}
              >
                <div className={`${styles.flex} ${styles.deleteAll_btn}`}>
                  <button onClick={clearCartHandler}>Delete All</button>
                </div>
                <div className={`${styles.flex} ${styles.order_now_btns}`}>
                  <button
                    className={`${styles.flex} ${styles.order_as_gift_btn}`}
                  >
                    Order as a Gift
                  </button>
                  <button className={`${styles.flex} ${styles.order_btn}`}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.payment_and_price_container}>
            <div className={styles.payment_and_price_inner_content}>
              <div className={styles.price_container}>
                <h3>Checkout Summary</h3>
                <div className={styles.products_price}>
                  <p>Products Price</p>

                  <b>{totalPrice} TK</b>
                </div>
                <div className={styles.delivery_charge}>
                  <p>Delivery Charge</p>
                  <b>{deliveryCharge} TK</b>
                </div>
                <div className={styles.total_price}>
                  <p>Total</p>
                  <b>{payableTotalPrice} TK</b>
                </div>
                <div className={styles.payable_price}>
                  <p>Payable Total</p>
                  <b>{payableTotalPrice} TK</b>
                </div>
              </div>

              <div className={styles.payment_container}>
                <h3> Payment</h3>
                <div className={styles.payment_inner_content}>
                  <div className={styles.payment_mobile_banking_btns}>
                    <button
                      className={`${styles.mobile_banking} ${styles.bkash}`}
                    >
                      Bkash
                    </button>
                    <button
                      className={`${styles.mobile_banking} ${styles.nagod}`}
                    >
                      Nagod
                    </button>
                    <button
                      className={`${styles.mobile_banking} ${styles.upay}`}
                    >
                      Upay
                    </button>
                  </div>
                  <div className={styles.cashOnDelevery_Btn}>
                    <button
                      className={`${styles.mobile_banking} ${styles.cashOnDelevery}`}
                    >
                      Cash On Delevery
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.Your_address_btn}>
                <button className={styles.flex}>
                  {" "}
                  <span>
                    {" "}
                    <RiUserLocationFill />
                  </span>
                  Your Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
