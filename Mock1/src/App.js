import React from "react";
import DropDown from "./Components/DropDown";
import ListBox from "./Components/ListBox";
import TextBox from "./Components/TextBox";
import { array } from "./Components/utilities";
import "./App.css";

function App() {
  // const arrayValues = [...array];
  // style={{display: "flex", justifyContent: "space-between"}}
  // const arrayValues = ["Huyen", "Thanh", "An", "Ngoc Anh"];
  return (
    <div className="container">
      <div className="box">
        <h1>Project 1 - TanPN1</h1>
        <div>
          <div className='filters'>
            <TextBox />

            <DropDown options={array} />
          </div>
          <div>
            <ListBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
