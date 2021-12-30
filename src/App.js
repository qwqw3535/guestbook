import NewGuestBookItem from "./components/newGuestBookItem";
import "./App.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import GuestBookItem from "./components/guestBookItem";
const App = () => {
  const [data, setData] = useState(null);
  const [loaded, setloaded] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };
  const clickHandler = () => {
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
        setsubmitted(!submitted);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  //update the lists as soon as submitted
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3306/lists",
      })
        .then((res) => {
          //console.log("axios is working " + res.data);
          console.log("data type is " + typeof res.data);
          setData(res.data);
          console.log(data);
          setloaded(true);
        })
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });
    };
    fetchData();
  }, [submitted]);

  return !loaded ? (
    <div>loading</div>
  ) : (
    <div
      className="App"
      style={{
        top: "10%",
        left: "10%",
        right: "auto",
        bottom: "auto",
        height: "500px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <NewGuestBookItem
        title={title}
        content={content}
        onTitleChange={onTitleChange}
        onContentChange={onContentChange}
        clickHandler={clickHandler}
        style={{ position: "relative", top: "200px" }}
      ></NewGuestBookItem>
      <div style={{ margin: "20px" }} />
      <div
        style={{
          width: "60%",
          textAlign: "left",
        }}
      >
        {data.map((datum) => (
          <GuestBookItem
            key={datum.id}
            title={datum.title}
            content={datum.content}
            time={datum.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
