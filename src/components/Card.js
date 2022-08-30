import React from "react";

function Card(course) {
  const curCourse = course.course;
  console.log(curCourse);
  return (
    <div className="cardElement">
      <img src={curCourse.image} className="course-img"></img>
      <h4 className="course-title">{curCourse.title}</h4>
      <p className="author">{curCourse.author}</p>
      <span className="fa fa-star rated"></span>
      <span className="fa fa-star rated"></span>
      <span className="fa fa-star unRated"></span>
      <span className="fa fa-star"></span>
      <span className="fa fa-star"></span>
      <p className="price">{curCourse.price}</p>
    </div>
  );
}
export default Card;
