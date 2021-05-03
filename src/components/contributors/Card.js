import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 5px 0px rgba(0,0,0,0.75)",
        display: "flex",
        width: "800px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
      }}
    >
      {props.name}
    </div>
  );
};

export default Card;
