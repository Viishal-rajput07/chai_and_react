import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <h1 className="text-center text-4xl text-white bg-green-500 rounded-xl w-96 m-auto p-2 my-10">
        Hello Chai Lovers
      </h1>
      <div className="flex items-center justify-center gap-16 flex-wrap">
        <Card heading={"Macbook"}  btn={"read"}/>
        <Card heading={"Windows"} btn={"explore"}/>
        <Card heading={"Linux"} btn={"learn"}/>
      </div>
    </>
  );
}

export default App;
