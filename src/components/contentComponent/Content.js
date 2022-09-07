import React, { useState, useEffect } from "react";
import Card from "../cardComponent/Card";
import styles from "./contentStyle.module.css";

function Content(props) {
  const [Post, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "http://localhost:3000/content/" + props.id;
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("post :>> ", json);
        setPosts(json);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [props.id]);

  const getListOfCourses = (listOfCourses) =>
    listOfCourses.map((cur) => {
      return <Card course={cur}></Card>;
    });

  const renderContent = (cur) => {
    console.log(cur);
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
    if (id == "1") return Post.python;
    else if (id == "2") return Post.drawing;
    else if (id == "3") return Post.excel;
    else if (id == "4") return Post.javascript;
    else if (id == "5") return Post.webDevelopment;
    else if (id == "6") return Post.AWSCertification;
    return Post.ds;
  };

  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>{renderContent(getCurrentTab(Post.id))}</div>
      )}
    </>
  );
}
export default Content;
