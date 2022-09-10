import { React, useState } from "react";
import styles from "./cardStyle.module.css";
import PopoverCard from "../popoverCard/PopoverCard";
import { Popover, Typography } from "@mui/material";
function Card(course) {
  const curCourse = course.course;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        onMouseEnter={openPopover}
        onMouseLeave={closePopover}
        className={styles.cardElement}
      >
        <img src={curCourse.image} className={styles.courseImg}></img>
        <h4 className={styles.courseTitle}>{curCourse.title}</h4>
        <div>
          {curCourse.instructors.map((cur) => {
            return <span className={styles.author}>{cur.name},</span>;
          })}
        </div>
        <span className={["fa fa-star", styles.rated].join(" ")}></span>
        <span className={["fa fa-star", styles.rated].join(" ")}></span>
        <span className={["fa fa-star", styles.unRated].join(" ")}></span>
        <span className={["fa fa-star", styles.unRated].join(" ")}></span>
        <span className={["fa fa-star", styles.unRated].join(" ")}></span>
        <p className={styles.price}>E£{curCourse.price}</p>
      </div>
      <Popover
        style={{ zIndex: 50000 }}
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        // onMouseLeave={closePopover}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        sx={{
          pointerEvents: "none",
        }}
        PaperProps={{
          onMouseEnter: openPopover,
          onMouseLeave: closePopover,
          sx: {
            pointerEvents: "auto",
          },
        }}
        disableRestoreFocus
        disableScrollLock
        // canAutoPosition='false'
      >
        <PopoverCard course={curCourse}></PopoverCard>
      </Popover>
    </>
  );
}
export default Card;
