import React from "react";
import styles from "./helper.module.css";

function ClickableText(props) {
  return (
    <a href="#" className={styles.textStyle}>
      {props.name}
    </a>
  );
}
export default ClickableText;
