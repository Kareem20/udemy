import React from "react";
import styles from "./courseGoal.module.css";
function CourseGoals(props) {
  const course = props.course;
  return (
    <div className={styles.goalsDiv}>
      <h2>What you'll learn</h2>
      {course.courseGoals.map((cur) => {
        return <p className={styles.goal}>- {cur}</p>;
      })}
    </div>
  );
}
export default CourseGoals;
