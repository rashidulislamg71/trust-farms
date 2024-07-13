/* eslint-disable no-unused-vars */
// Styles CSS
import styles from "./Our_Services.module.css";

// Recat icons
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Our_Services = () => {
  return (
    <div className={styles.our_services_styles}>
      <div className={styles.our_services_container}>
        <div className={styles.our_services_inner_content}>
          <div className={styles.our_service_content}>
            <div className={styles.service_icons}>

              <TbTruckDelivery />
            </div>
            <div className={styles.service_content}>
              <h3>Free home delivery</h3>
              <p>
                Provide free home delivery  for all product over $100
              </p>
            </div>
          </div>
          <div className={styles.our_service_content}>
            <div className={styles.service_icons}>
              <AiOutlineSafetyCertificate />
            </div>
            <div className={styles.service_content}>
              <h3>Quality Products</h3>
              <p>
                We ensure the product quality that is our main goal.
              </p>
            </div>
          </div>
          <div className={styles.our_service_content}>
            <div className={styles.service_icons}>
              <GiReturnArrow />
            </div>
            <div className={styles.service_content}>
              <h3>2 Days Return</h3>
              <p>
                Return product within days for any product you buy
              </p>
            </div>
          </div>
          <div className={styles.our_service_content}>
            <div className={styles.service_icons}>
              <BiSupport />
            </div>
            <div className={styles.service_content}>
              <h3>24/7 Hours Support</h3>
              <p>
                We ensure the product quality that you can trust easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Services;
