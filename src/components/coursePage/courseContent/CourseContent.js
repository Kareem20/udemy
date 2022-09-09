import React from "react";
import ContentItem from "./ContentItem";

function CourseContent(props) {
  const course = props.course;
  return (
    <>
      <h2>Course content</h2>
      {course.courseContent.map((cur) => {
        return (
          <ContentItem title={cur.secntionTitle} theme="dark">
            <div>
              {cur.contentList.map((lectureTitle) => {
                return <p>{lectureTitle}</p>;
              })}
            </div>
          </ContentItem>
        );
      })}
    </>
  );
}

export default CourseContent;
