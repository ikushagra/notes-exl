import React from "react";

export default function User(props) {
  return (
    <div className="user-wrapper">
      <h1>Email</h1>
      {props.userData.map((val, index) => (
        <div>
          <li key={index}>{val.email}</li>
        </div>
      ))}
    </div>
  );
}
