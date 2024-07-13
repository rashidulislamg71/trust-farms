/* eslint-disable react/no-unescaped-entities */
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div id="contact_us">
      <div className={styles.contact_us_container}>
        <div className={styles.contact_us_inner_content}>
          <div className={styles.contact_us_banner}>
            <h1>CONTACT US</h1>
            <h2>We are always at your service.</h2>
            <h4>HOW CAN I HEPL YOU . . . . . ?</h4>
          </div>
          <div className={styles.contact_us_title}>
                <h3>Let's Star a Conversation.</h3>
                <p>We are love to hear from you!</p>
              </div>
          <div className={styles.contact_form_container}>
            <div className={styles.contact_form_inner_content}>
              
              <div className={styles.contact_form}>
                <form className="contact-form" id="contact_form">
                  <label htmlFor="reason">Reason of Contact:</label>
                  <select id="reason" name="reason">
                    <option value="Please Select">Please Select</option>
                    <option value="complain">Complain</option>
                    <option value="question">Question</option>
                    <option value="support">Support</option>
                    <option value="Suggestion">Suggestion</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Order">Order</option>
                    <option value="Delivery ">Delivery</option>
                    <option value="Others ">Others</option>
                  </select>
             
             
                  <label htmlFor="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                  <label htmlFor="firstName">Last Name:</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
               

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" placeholder="exaple@gmail.com" required />
            

                  <label htmlFor="phone">Phone:</label>
                  <input type="Number" id="phone" name="phone" placeholder="01752***233" required />
               

                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Say your massage hear."
                    required
                  ></textarea>
                <br />

                  <button type="submit">Send IT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
