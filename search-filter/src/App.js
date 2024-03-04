import React, { useState } from "react";
import "./index.css";
import Data from "./data.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container">
      <h1>Türkiye'de Gezmek İsteyeceğiniz Şehirler </h1>
      <div className="inputContainer">
        <input
          className="search"
          type="text"
          placeholder="Şehir adı giriniz..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="dataContainer">
        {Data.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.title
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((val) => {
          return (
            <div className="data" key={val.id}>
              <img src={val.image} alt="" />
              <h3>{val.title}</h3>
              <p>{val.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
