import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
function PopoverCard(props) {
  const course = props.course;
  console.log(course);
  return (
    <div style={{ width: "300px", margin: "24px" }}>
      <h3>{course.title}</h3>
      <p>{course.headline}</p>
      <div>
        <h4 style={{ marginBottom: "0px" }}>Requirements</h4>
        {course.requirements.map((cur) => {
          return (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "8px",
              }}
            >
              <CheckOutlinedIcon
                style={{ marginRight: "8px" }}
              ></CheckOutlinedIcon>
              <p style={{ margin: "0px" }}>{cur}</p>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center",margin:"8px" }}>
        <button
          style={{
            bordor: "0px",
            width: "70%",
            padding: "8px",
            background: "#8710d8",
            color: "white",
            fontSize: "18px",
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default PopoverCard;
