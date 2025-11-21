    import React from "react";

const button = () => {
  const btnStyle = {
    padding: "12px 500px",
    backgroundColor: "#4B6BFB",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
    
  };

  return (
    <button style={btnStyle}>
      hit me
    </button>
  );
};

export default button;
