import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CoursesDataContext } from "../../contexts/DataContext";
import CourseContent from "./courseContent/CourseContent";
import CourseGoals from "./courseGoals/CourseGoals";
import CoursePageHeader from "./coursePageHeader/coursePageHeader";
import CourseDescription from "./CourseDescription";
import Comment from "./courseComments/Comment";
import Divider from "@mui/material/Divider";

function CoursePage() {
  const { courseId } = useParams();
  const coursesData = useContext(CoursesDataContext);
  const data = coursesData.coursesData;
  let currentCourse = undefined;
  const getCurrentTab = (i) => {
    if (i.id == "1") return i.python;
    else if (i.id == "2") return i.drawing;
    else if (i.id == "3") return i.excel;
    else if (i.id == "4") return i.javascript;
    else if (i.id == "5") return i.webDevelopment;
    else if (i.id == "6") return i.AWSCertification;
    return i.ds;
  };
  data.map((curTab) => {
    getCurrentTab(curTab).courses.map((curCourse) => {
      if (curCourse.id.toString() == courseId) currentCourse = curCourse;
    });
  });
  if (currentCourse == undefined) return <></>;

  return (
    <div>
      <CoursePageHeader course={currentCourse}></CoursePageHeader>
      <div style={{ marginLeft: "10%", marginRight: "40%" }}>
        <CourseGoals course={currentCourse} x></CourseGoals>
        <CourseContent course={currentCourse}></CourseContent>
        <CourseDescription course={currentCourse}></CourseDescription>
        <div>
          <h2>Comments</h2>
          {currentCourse.comments.map((curComment) => {
            return (
              <div>
                <Comment comment={curComment}></Comment>
                <Divider />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default CoursePage;
