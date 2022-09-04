import React from "react";
import styles from "./header.module.css";

const publicPath = process.env.PUBLIC_URL + "/images/";
function Header() {
  return (
    <div className={styles.headerDiv}>
      <img src={publicPath + "header.jpg"} alt="header banner photo" />
      <div className={styles.headerBox}>
        <h1>New to Udemy? Lucky you.</h1>
        <p>
          Courses start at E199.99. Get your new student offer before it expires
        </p>
      </div>
      <div className={styles.coursesDescription}>
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 204,000 online video courses with new additions published
          every month
        </p>
      </div>
    </div>
  );
}
export default Header;
