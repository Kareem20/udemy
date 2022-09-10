import React, { useContext, useState } from "react";
import styles from "./navBar.module.css";
import ClickableText from "../utiliesComponent/ClickableText";
import { SetSearchTermContext } from "../../App";
import { Link, NavLink } from "react-router-dom";
import HomePage from "../HomePage";

const publicPath = process.env.PUBLIC_URL + "/images/";
function NavBar() {
  const setSearchData = useContext(SetSearchTermContext);
  const [barValue, setBarValue] = useState("");

  const update = (e) => {
    setBarValue(e.target.value);
    e.preventDefault();
  };
  const setSearch = (barValue) => {
    setSearchData(barValue);
    let path = window.location.pathname;
    // if (path.startsWith("/courses")) <NavLink to="/" />;
  };

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img className={styles.logoUdemy} src={publicPath + "logoUdemy.png"} />
      </Link>
      <div className={styles.navList}>
        <ClickableText name="Categories" />
        <input
          className={styles.searchBar}
          type="search"
          placeholder="Search of anything.."
          onChange={update}
        />
        {/* TODO:onClick */}
        <button
          className={styles.searchButton}
          type="submit"
          onClick={() => setSearch(barValue)}
        >
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
