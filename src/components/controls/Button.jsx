import classnames from "classnames";
import React from "react";

export default ({ name, property, option, current, handleClick }) => {
  const classes = classnames({
    Button: true,
    on: option === current,
  });

  return (
    <div className={classes} onClick={() => handleClick(option)}>
      {option}
    </div>
  );
};
