import React from "react";
import styles from "./cardStyle.module.css";

function Card(course) {
  console.log("currentCourse: ", course);
  const curCourse = course.course;
  return (
    <div className={styles.cardElement}>
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
  );
}
export default Card;
