import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import tune0 from "../tunes/tune0";
import tune1 from "../tunes/tune1";
import tune2 from "../tunes/tune2";

const Hello = props => {
  return (
    <div>
      <div onClick={tune0}>tune 0</div>
      <div onClick={tune1}>tune 1</div>
      <div onClick={tune2}>tune 2</div>
      <h1 onMouseDown={handleDown}>Test</h1>
    </div>
  );
};

Hello.defaultProps = {
  name: "David"
};

Hello.propTypes = {
  name: PropTypes.string
};

const handleDown = () => {
  console.log("down");
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement("div"))
  );
});
