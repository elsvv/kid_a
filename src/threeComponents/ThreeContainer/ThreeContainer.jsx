import React, { Component } from "react";
import "./ThreeContainer.scss";

import Drops from "../Drops/Drops";

class ThreeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    return (
      <div className="ThreeContainer">
        <Drops />
      </div>
    );
  }
}

export default ThreeContainer;
