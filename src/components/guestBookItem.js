import { React, useState } from "react";
import axios from "axios";
const GuestBookItem = ({ title, content }) => {
  return (
    <div style={{ width: "60%" }}>
      <span style={{ width: "100%", margin: "5px", marginTop: "20px" }}>
        {title}
      </span>
      <div style={{ width: "100%", height: "100px", margin: "5px" }}>
        {content}
      </div>
    </div>
  );
};

export default GuestBookItem;
