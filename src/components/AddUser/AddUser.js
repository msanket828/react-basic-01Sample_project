import React, { useState } from "react";
import Card from "../../UI/Card";
import "./AddUser.css";
import Button from "../../UI/Button";
import BackDrop from "../BackDrop/BackDrop";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleAddUserSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length < 1 || age.trim().length < 1) {
      setIsError({
        title: "Invalid Input",
        text: "Name and Age should not be blank",
      });
      return;
    } else if (age.trim() < 1 || name.trim().length < 1) {
      setIsError({
        title: "Invalid Input",
        text: "Age should be greater than 0",
      });
      return;
    }
    const userData = {
      id: Math.random().toString(),
      name,
      age,
    };
    props.onAddUserData(userData);
    setName("");
    setAge("");
  };
  const handleCloseModal = () => {
    setIsError("");
  };

  return (
    <>
      {isError && (
        <BackDrop isError={isError} handleCloseModal={handleCloseModal} />
      )}
      <Card className="card">
        <form onSubmit={handleAddUserSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name..."
              id="name"
              onChange={handleName}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              placeholder="Enter Age..."
              id="age"
              onChange={handleAge}
              value={age}
            />
          </div>
          <Button
            type="submit"
            className="btn btn-primary"
            text="Submit"
          ></Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
