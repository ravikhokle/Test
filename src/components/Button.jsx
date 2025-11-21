    import React from "react";

const Button = () => {
  const btnStyle = {
    padding: "12px 25px",
    backgroundColor: "#4B6BFB",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  };

  return (
    <button style={btnStyle}>
      Click Me
    </button>
  );
};

export default Button;
