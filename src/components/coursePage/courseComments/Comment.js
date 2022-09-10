import React from "react";
import styles from "./comment.module.css";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

function Comment(props) {
  const comment = props.comment;
  return (
    <>
      <div style={{marginTop:"12px"}}>
        <div style={{ display: "flex" }}>
          <Avatar />
          <div style={{marginLeft:"12px"}}>
            <h6 style={{ margin: "0px" }}>{comment.userName}</h6>
            <div style={{ display: "inline-flex", alignItems: "center" }}>
              <Rating
                name="text-feedback"
                value={comment.userRate}
                readOnly
                precision={0.5}
                size="small"
              />
              <p style={{ fontSize: "12px" }}>{comment.postedTime}</p>
            </div>
          </div>
        </div>
        <p>{comment.comment}</p>
      </div>
    </>
  );
}
export default Comment;
