import React from "react";
import styles from "./footer.module.css";
const publicPath = process.env.PUBLIC_URL + "/images/";

function Footer() {
  return (
    <>
      <div className={styles.FooterDiv}>
        <div className={styles.title}>
          Top companies choose Udemy Business to build in-demand career skills.
        </div>
        <hr></hr>
        <div style={{ display: "inline-flex" }}>
          <ul>
            <li>Udemy Business</li>
            <li>Teach on Udemy</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Udemy Business</li>
            <li>Teach on Udemy</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Udemy Business</li>
            <li>Teach on Udemy</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;
