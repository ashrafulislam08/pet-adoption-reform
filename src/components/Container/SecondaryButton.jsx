import React from "react";

export const SecondaryButton = ({ btnText }) => {
  return (
    <button className="border px-3 py-2 rounded-lg font-semibold text-teal-600">
      {btnText}
    </button>
  );
};
