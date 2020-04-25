import React from "react";

import ToggleSwitch from "../controls/ToggleSwitch";
import Knob from "../controls/Knob";
import Picker from "../controls/Picker";

export default ({ value, handler, toggleEffect, on }) => {
  const handlePicker = (value) => {
    handler("distortion", "oversample", value);
  };

  return (
    <div className="Effect">
      <h1>Distortion</h1>

      <ToggleSwitch
        current={on}
        handleClick={toggleEffect}
        value="distortion"
      />

      <div className="controlsContainer">
        <div className="row">
          <Knob
            name="distortion"
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
            name="distortion"
            paramName="distortion"
            min={1}
            max={100}
            increment={1}
            initialDeg={-45}
            overDeg={270}
            value={value.distortion}
            handleValueChange={handler}
          />
        </div>
        <Picker
          current={value.oversample}
          items={["none", "2x", "4x"]}
          names={["none", "2x", "4x"]}
          handler={handlePicker}
        />
      </div>
    </div>
  );
};
