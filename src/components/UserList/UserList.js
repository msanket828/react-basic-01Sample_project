import React from "react";
import Card from "../../UI/Card";
import "./UserList.css";

const UserList = (props) => {
  return (
    <Card className="card">
      <ul className="userlist">
        {props.userList.map((user) => {
          return (
            <li key={user.id}>
              <p>
                {user.name} ({user.age} years old)
              </p>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
