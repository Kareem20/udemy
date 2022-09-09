import React, { useContext } from "react";
import Card from "../cardComponent/Card";
import styles from "./contentStyle.module.css";
import { Link } from "react-router-dom";
import { CoursesDataContext } from "../../contexts/DataContext";
import { SearchDataContext } from "../../contexts/SearchData";
function Content(props) {
  const coursesData = useContext(CoursesDataContext);
  const searchData = useContext(SearchDataContext).toLowerCase();
  searchData.replace(/\s+/g, "");

  let data = coursesData.coursesData[props.id - 1];
  if (data == undefined) return <></>;

  const getListOfCourses = (listOfCourses) =>
    listOfCourses.map((cur) => {
      let path = "/courses/" + cur.id;
      let currentHeadline = cur.headline.toLowerCase();
      currentHeadline.replace(/\s+/g, "");
      if (currentHeadline.includes(searchData)) {
        return (
          <Link to={path}>
            <Card course={cur}></Card>
          </Link>
        );
      }
    });

  const renderContent = (cur) => {
    if (cur == undefined) return <></>;
    return (
      <div className={styles.container}>
        <h1>{cur.header}</h1>
        <p className={styles.description}>{cur.description}</p>
        <button className={styles.explorCourse}>{cur.title}</button>
        <div className={styles.coursesList}>
          {getListOfCourses(cur.courses)}
        </div>
      </div>
    );
  };

  const getCurrentTab = (id) => {
    if (id == "1") return data.python;
    else if (id == "2") return data.drawing;
    else if (id == "3") return data.excel;
    else if (id == "4") return data.javascript;
    else if (id == "5") return data.webDevelopment;
    else if (id == "6") return data.AWSCertification;
    return data.ds;
  };
  return (
    <>
      <div>{renderContent(getCurrentTab(data.id))}</div>
    </>
  );
}
export default Content;
