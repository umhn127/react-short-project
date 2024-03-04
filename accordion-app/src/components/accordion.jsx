import React from "react";

export default function Accordion({ title, active, setActive }) {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(title)}>click me</span>
        </div>
      </div>

      <div className={(active === title ? "show" : "") + "accordionContent"}>
        <div className="container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ab, sit
            libero quod expedita adipisci obcaecati aut impedit? Asperiores,
            molestiae.
          </p>
        </div>
      </div>
    </div>
  );
}
