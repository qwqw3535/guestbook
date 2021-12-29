import { React, useState } from "react";
import axios from "axios";
const GuestBookItem = ({ title, content, time }) => {
  console.log(time);

  return (
    <div style={{ marginTop: "5px" }}>
      <span style={{ margin: "5px", marginTop: "30px" }}>{title}</span>
      <span style={{ float: "right" }}>{time}</span>
      <div
        style={{
          width: "100%",
          height: "100px",
          padding: "2px",
          border: "1px solid",
          margin: "2px",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default GuestBookItem;
