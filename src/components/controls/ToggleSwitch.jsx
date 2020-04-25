import React from "react";
import classnames from "classnames";

export default ({ current, value, handleClick }) => {
  const classes = classnames({
    ToggleSwitch: true,
    on: current,
    [`${value}`]: true,
  });

  return (
    <div className="toggleContainer">
      <div className={classes} onClick={() => handleClick(value)}>
        <div className="toggleSwitchStroke"></div>
      </div>
    </div>
  );
};
