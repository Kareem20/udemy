import React from "react";
import styles from "./coursePageHeader.module.css";
import Rating from "@mui/material/Rating";

function CoursePageHeader(props) {
  const course = props.course;
  return (
    <>
      <div className={styles.header}>
        <div className={styles.insideDiv}>
          <h1 className={styles.title}> {course.title}</h1>
          <p className={styles.headline}>{course.headline}</p>
          <div className={styles.ratingDiv}>
            <div className={styles.rating}>{course.rating.toFixed(1)}</div>
            <Rating
              name="text-feedback"
              value={course.rating}
              readOnly
              precision={0.5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursePageHeader;
