import React from "react";
import "./Card.css";

export function Card(props) {
  return <div className="card">
    <p className="card-title">{props.title}</p>
  </div>;
}