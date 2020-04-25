import React from "react";
import classnames from "classnames";

export default ({ name, viewSet }) => {
  const classes = classnames({
    Button: true,
    ToggleView: true,
    on: name === viewSet,
  });
  return <div className={classes}>Toggle {name} Pedalboard</div>;
};
