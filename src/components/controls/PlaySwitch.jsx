import classnames from "classnames";
import React from "react";

export default ({ name, value, handleToggleClick }) => {
  const classes = classnames({
    PlaySwitch: true,
    [`${name}`]: true,
    switchOn: !value,
    switchOff: value,
  });

  return <div className={classes} onClick={handleToggleClick} />;
};
