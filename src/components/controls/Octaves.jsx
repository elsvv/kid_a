import React from "react";

export default ({ value, min, max, changeOct }) => {
  return (
    <input
      type="number"
      min={min}
      max={max}
      value={value}
      onChange={changeOct}
    />
  );
};
