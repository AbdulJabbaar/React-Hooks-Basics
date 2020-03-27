import React from "react";

export default function UserDetail(props) {
  return (
    <div>
      <button onClick={() => props.backToList(null)}>
        <h4>Back to list</h4>
      </button>
      <h2>{props.SelecteUser.id}</h2>
      <h3>
        {props.SelecteUser.first_name} {props.SelecteUser.last_name}
      </h3>
      <h4>{props.SelecteUser.email}</h4>
      <img src={props.SelecteUser.avatar} alt="avatar" />
    </div>
  );
}
