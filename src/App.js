import NewGuestBookItem from "./components/newGuestBookItem";
import "./App.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import GuestBookItem from "./components/guestBookItem";
const App = () => {
  const [data, setData] = useState(null);
  const [loaded, setloaded] = useState(false);

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
  }, []);
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
        style={{ position: "relative", top: "200px" }}
      ></NewGuestBookItem>
      <div>
        {data.map((datum) => (
          <GuestBookItem
            key={datum.id}
            title={datum.title}
            content={datum.content}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
