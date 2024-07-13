import styles from "./Loading.module.css";

const Loaging = () => {
  return (
    <div className={styles.loading_wrapper}>
      <div className={styles.loading_spinner}>
      </div>
        <p>Loading...</p>
    </div>
  );
};

export default Loaging;
