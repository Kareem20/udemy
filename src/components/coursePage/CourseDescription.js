import React from "react";
import Instructor from "./Instructor";

function CourseDescription(props) {
  const course = props.course;
  return (
    <>
      <h2>Requirements</h2>
      <ul>
        {course.requirements.map((curReq) => {
          return <li style={{ marginTop: "8px",color:"black" }}>{curReq}</li>;
        })}
      </ul>
      <h2>Description</h2>
      <p> {course.description}</p>
      <h2>Instructors</h2>
      {course.instructors.map((instructor) => {
        return <Instructor instructor={instructor}></Instructor>;
      })}
    </>
  );
}

export default CourseDescription;
