import GuestBookItem from "./components/guestBookItem";
import "./App.css";
import { React } from "react";
const App = () => {
  return (
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
      <GuestBookItem
        style={{ position: "relative", top: "200px" }}
      ></GuestBookItem>
    </div>
  );
};

export default App;
