import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import styles from "./contentItem.module.css";

function ContentItem(props) {
  const [drop, setDrop] = useState(false);

  const onDropdownClicked = () => {
    setDrop(!drop);
  };

  return (
    <div className={styles.accordionContainerLight} onClick={onDropdownClicked}>
      <div className={styles.headerBarLight}>
        <h5 className={styles.openAccordionToggleLight}>{props.title}</h5>
        <h5 className={styles.openAccordionToggleLight}>
          {drop ? "-" : "+"}
        </h5>
      </div>
      <Collapse in={drop}>
        <div className={styles.displayText}>{props.children}</div>
      </Collapse>
    </div>
  );
}

export default ContentItem;
