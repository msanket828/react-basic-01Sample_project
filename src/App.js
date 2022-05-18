import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [userList, setUserList] = useState("");

  const addUserData = (userData) => {
    setUserList((prevState) => {
      return [...prevState, userData];
    });
  };

  return (
    <div className="app">
      <AddUser onAddUserData={addUserData} />
      {userList && <UserList userList={userList} />}
    </div>
  );
}

export default App;
