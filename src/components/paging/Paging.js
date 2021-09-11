import React from "react";
import "./Paging.css";

export default function Paging(props) {
  return (
    <div className="paging-wrapper">
      <button onClick={() => props.decremnent()}>Previos</button>
      <p>{props.page}</p>
      <button onClick={() => props.incremnent()}>Next</button>
    </div>
  );
}
