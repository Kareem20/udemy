import React from "react";
import styles from "./navBar.module.css";
import ClickableText from "../utiliesComponent/ClickableText";

const publicPath = process.env.PUBLIC_URL + "/images/";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <a href="#">
        <img className={styles.logoUdemy} src={publicPath + "logoUdemy.png"} />
      </a>
      <div className={styles.navList}>
        <ClickableText name="Categories" />
        <input
          className={styles.searchBar}
          type="search"
          placeholder="Search of anything.."
        />
        {/* TODO:onClick */}
        <button className={styles.searchButton} type="submit">
          Search
        </button>
        <ClickableText name="Udemy Business" />
        <ClickableText name="Teach on Udemy" />
        <button className={styles.searchButton} type="submit">
          Login
        </button>
      </div>
      <a href="#">
        <img className={styles.menuIcon} src={publicPath + "menuIcon.png"} />
      </a>
    </nav>
  );
}
export default NavBar;
