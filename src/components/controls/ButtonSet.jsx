import React from "react";

import Button from "./Button";

export default ({ name, property, set, value, handleValueChange }) => {
  const buttons = set.map((option, i) => (
    <Button
      name={name}
      property={property}
      option={option}
      current={value}
      handleClick={handleValueChange}
      key={i}
    />
  ));

  return <div className="ButtonSet">{buttons}</div>;
};
