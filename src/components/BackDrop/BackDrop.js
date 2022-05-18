import React from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import "./BackDrop.css";

const BackDrop = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.handleCloseModal}></div>
      <Card className="card modal">
        <header>
          <h3>{props.isError.title}</h3>
        </header>
        <div className="body">
          <p>{props.isError.text}</p>
          <Button
            type="button"
            className="btn btn-primary"
            text="Okay"
            onClick={props.handleCloseModal}
          />
        </div>
      </Card>
    </>
  );
};

export default BackDrop;
