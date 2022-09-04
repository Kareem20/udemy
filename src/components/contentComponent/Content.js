import React from "react";
import Card from "../cardComponent/Card";
import styles from "./contentStyle.module.css";
const coursesList = {
  title: "Top courses in Python",
  header: "Expand your career opportunities with Python",
  description:
    "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.",
  explore: "Explore Pyton",
  courses: [
    {
      id: 1,
      title: "Learn Python: The Complete Python Programming Course",
      author: "Avinash Jain",
      image:
        "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
      price: "E£679.99",
    },
    {
      id: 2,
      title: "Learning Python for Data Analysis and Visualization",
      author: "Jose Portilla",
      image:
        "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
      price: "E£1,599.99",
    },
    {
      id: 3,
      title: "Python for Beginners - Learn Programming from scratch",
      author: "Edwin Diaz",
      image:
        "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
      price: "E£679.99",
    },
    {
      id: 4,
      title: "Learn Python: Python for Beginners",
      author: "Abrar Hussain",
      image:
        "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
      price: "E£319.99",
    },
    {
      id: 5,
      title: "Python Beyond the Basics - Object-Oriented Programming",
      author: "Infinite Skills",
      image:
        "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
      price: "E£519.99",
    },
  ],
};

let getListOfCourses = () =>
  coursesList.courses.map((cur) => {
    return <Card course={cur}></Card>;
  });

function Content() {
  return (
    <div className={styles.container}>
      <h1>{coursesList.header}</h1>
      <p className={styles.description}>{coursesList.description}</p>
      <button className={styles.explorCourse}>{coursesList.explore}</button>
      <div className={styles.coursesList}> {getListOfCourses()}</div>
    </div>
  );
}
export default Content;
