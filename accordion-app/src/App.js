import React, { useState } from "react";
import "./index.css";
import Accordion from "./components/accordion";

function App() {
  const [active, setActive] = useState("");

  return (
    <div className="App">
      <h1>THEUMA</h1>
      <Accordion title="question1" active={active} setActive={setActive} />
      <Accordion title="question2" active={active} setActive={setActive} />
      <Accordion title="question3" active={active} setActive={setActive} />
      <Accordion title="question4" active={active} setActive={setActive} />
      <Accordion title="question5" active={active} setActive={setActive} />
    </div>
  );
}

export default App;
