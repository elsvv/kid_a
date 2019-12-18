import React from "react";
import _ from "lodash";

import "./Effect.scss";

import ToggleSwitch from "../controls/ToggleSwitch";
import Knob from "../controls/Knob";
import Picker from "../controls/Picker";

export default class Distortion extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.value.Q)
    _.bindAll(this, "handlerFilter", "handlePicker", "handlerFilterKnob");
  }

  handlePicker(value) {
    this.props.handler("distortion", "oversample", value);
  }

  handlerFilter(value) {
    this.props.subHandler("distortion", "filter", "type", value);
  }
  handlerFilterKnob(name, param, value) {
    this.props.subHandler(name, "filter", param, value);
  }

  render() {
    let value = this.props.value;
    return (
      <div className="Effect">
        <h1>Distortion</h1>

        <ToggleSwitch
          current={this.props.on}
          handleClick={this.props.toggleEffect}
          value="distortion"
        />
        <Knob
          name="distortion"
          paramName="wet"
          min={1}
          max={100}
          increment={100}
          initialDeg={-45}
          overDeg={270}
          value={value.wet.value}
          handleValueChange={this.props.handler}
        />

        <div className="controlsContainer">
          <div className="row">
            <Knob
              name="distortion"
              paramName="distortion"
              min={1}
              max={100}
              increment={1}
              initialDeg={-45}
              overDeg={270}
              value={value.distortion}
              handleValueChange={this.props.handler}
            />
          </div>
          <Picker
            current={value.oversample}
            items={["none", "2x", "4x"]}
            names={["none", "2x", "4x"]}
            handler={this.handlePicker}
          />
        </div>
      </div>
    );
  }
}
