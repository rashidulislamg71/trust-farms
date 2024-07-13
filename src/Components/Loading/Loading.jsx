import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading_wrapper}>
      <div className={styles.loading_spinner}></div>
      <div className={styles.loading_text}>
        <p>Loading...</p>
        <i>Please Wait a Moment!</i>
      </div>
    </div>
  );
};

export default Loading;
