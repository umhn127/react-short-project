import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} />
        <div className="about">
          <h2 className="cardTitle">{props.title}</h2>
          <p className="cardDescription">{props.description}</p>
        </div>
        <button>See The detailes</button>
      </div>
    </div>
  );
}
