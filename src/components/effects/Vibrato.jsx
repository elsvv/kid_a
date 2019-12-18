import React from "react";
import _ from "lodash";

import "./Effect.scss";

import ToggleSwitch from "../controls/ToggleSwitch";
import Knob from "../controls/Knob";
import Picker from "../controls/Picker";

export default class Vibrato extends React.Component {
  constructor(props) {
    super(props);

    _.bindAll(this, "handlePicker");
  }

  handlePicker(value) {
    this.props.handler("vibrato", "type", value);
  }

  render() {
    let value = this.props.value;
    return (
      <div className="Effect">
        <h1>Vibrato</h1>

        <ToggleSwitch
          current={this.props.on}
          handleClick={this.props.toggleEffect}
          value="vibrato"
        />

        <Knob
          name="vibrato"
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
              name="vibrato"
              paramName="frequency"
              min={1}
              max={100}
              increment={1}
              initialDeg={-45}
              overDeg={270}
              value={value.wet.value}
              handleValueChange={this.props.handler}
            />
            <Knob
              name="vibrato"
              paramName="depth"
              min={1}
              max={100}
              increment={100}
              initialDeg={-45}
              overDeg={270}
              value={value.wet.value}
              handleValueChange={this.props.handler}
            />
          </div>

          <Picker
            current={value.oversample}
            items={["sine", "triangle", "square", "sawtooth"]}
            names={["sine", "triangle", "square", "sawtooth"]}
            handler={this.handlePicker}
          />
        </div>
      </div>
    );
  }
}
