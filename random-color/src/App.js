import React, { useState } from "react";
import "./index.css";

function App() {
  const [hex, setHex] = useState("#ffffff");

  function randomHex() {
    const randomhex = "#" + Math.floor(Math.random() * 16777721).toString(16);
    setHex(randomhex);
  }

  return (
    <div className="App" style={{ backgroundColor: `${hex}` }}>
      <h1>{hex}</h1>
      <button onClick={randomHex}>yeni arka plan için tıklayınız</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>
        kopyala
      </button>
    </div>
  );
}
export default App;
