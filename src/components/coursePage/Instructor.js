import React from "react";
import Avatar from "@mui/material/Avatar";

function Instructor(props) {
  const instructor = props.instructor;
  return (
    <>
      <div style={{ display: "inline-flex", marginBottom: "12px" }}>
        <div style={{ alignSelf: "center" }}>
          <Avatar
            sx={{ width: 72, height: 72 }}
            alt={instructor.name}
            src={instructor.image}
          />
        </div>
        <div style={{ marginLeft: "12px" }}>
          <h3>{instructor.name}</h3>
          <p>{instructor.job}</p>
        </div>
      </div>
    </>
  );
}

export default Instructor;
