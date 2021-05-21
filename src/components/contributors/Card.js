import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        backgroundColor:"#191919",
        boxShadow: "0px 8px 16px 0px rgba(72, 127, 255, 0.1), 0px -8px 16px 0px rgba(72, 127, 255, 0.1)",
        display: "flex",
        width: "800px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
      }}
    >
      👑 {props.name}
    </div>
  );
};

export default Card;
