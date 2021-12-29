import { React, useState } from "react";
import axios from "axios";
const NewGuestBookItem = ({
  title,
  content,
  onTitleChange,
  onContentChange,
  clickHandler,
}) => {
  console.log(title);
  console.log(content);
  console.log(onTitleChange);
  console.log(onContentChange);
  console.log(clickHandler);

  return (
    <div style={{ width: "60%" }}>
      <input
        value={title}
        onChange={onTitleChange}
        placeholder="Title"
        style={{ width: "100%", margin: "5px", marginTop: "20px" }}
      />
      <div />
      <textarea
        value={content}
        onChange={onContentChange}
        placeholder="Content"
        style={{ width: "100%", height: "100px", margin: "5px" }}
      />
      <div />
      <button
        onClick={() => clickHandler()}
        style={{ float: "right", width: "15%", height: "20%" }}
      >
        Write
      </button>
    </div>
  );
};

export default NewGuestBookItem;
