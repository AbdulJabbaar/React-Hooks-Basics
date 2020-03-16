import React from "react";

export default function UserDetail({ SelecteUser }) {
  return (
    <div>
      <h2>{SelecteUser.id}</h2>
      <h3>
        {SelecteUser.first_name} {SelecteUser.last_name}
      </h3>
      <h4>{SelecteUser.email}</h4>
      <img src={SelecteUser.avatar} alt="avatar" />
    </div>
  );
}
