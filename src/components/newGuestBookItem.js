import { React, useState } from "react";
import axios from "axios";
const NewGuestBookItem = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const contentChange = (e) => {
    setContent(e.target.value);
  };
  const onClick = () => {
    submit();

    setTitle("");
    setContent("");
  };

  const submit = () => {
    const post = {
      title: title,
      content: content,
    };
    console.log("submitted");
    axios({
      method: "POST",
      url: "http://localhost:3306/lists",
      data: post,
    })
      .then((res) => {
        console.log("axios is working " + res.data.title);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
    axios({
      method: "GET",
      url: "http://localhost:3306/lists",
    })
      .then((res) => {
        console.log("axios is working " + res.data);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };
  return (
    <div style={{ width: "60%" }}>
      <input
        value={title}
        onChange={titleChange}
        placeholder="Title"
        style={{ width: "100%", margin: "5px", marginTop: "20px" }}
      />
      <div />
      <textarea
        value={content}
        onChange={contentChange}
        placeholder="Content"
        style={{ width: "100%", height: "100px", margin: "5px" }}
      />
      <div />
      <button
        onClick={() => onClick()}
        style={{ float: "right", width: "15%", height: "20%" }}
      >
        Write
      </button>
    </div>
  );
};

export default NewGuestBookItem;
