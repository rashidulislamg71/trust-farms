


import styles from "./Login.module.css";

const Login = () => {
    return (
        <section id="login_section">
            <div className={styles.login_container}>
                <div className={styles.login_content}>
                    <div className={styles.login_inner_content}>
                        Login in your account
                    </div>
                </div>
            </div>
            Log in your account
        </section>
    );
};

export default Login;