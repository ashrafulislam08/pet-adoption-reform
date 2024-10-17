import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-teal-600 text-white rounded-md py-2 px-3 font-bold">
      {text}
    </button>
  );
};

export default Button;
