import React from "react";

import ToggleSwitch from "../controls/ToggleSwitch";
import Knob from "../controls/Knob";
import Picker from "../controls/Picker";

export default ({ handler, value, on, toggleEffect }) => {
  const handlePicker = (value) => {
    handler("vibrato", "type", value);
  };
  return (
    <div className="Effect">
      <h1>Vibrato</h1>

      <ToggleSwitch current={on} handleClick={toggleEffect} value="vibrato" />

      <div className="controlsContainer">
        <div className="row">
          <Knob
            name="vibrato"
            paramName="wet"
            min={1}
            max={100}
            increment={100}
            initialDeg={-45}
            overDeg={270}
            value={value.wet.value}
            handleValueChange={handler}
          />
          <Knob
            name="vibrato"
            paramName="frequency"
            min={1}
            max={100}
            increment={1}
            initialDeg={-45}
            overDeg={270}
            value={value.wet.value}
            handleValueChange={handler}
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
            handleValueChange={handler}
          />
        </div>

        <Picker
          current={value.type}
          items={["sine", "triangle", "square", "sawtooth"]}
          names={["sine", "triangle", "square", "sawtooth"]}
          handler={handlePicker}
        />
      </div>
    </div>
  );
};
