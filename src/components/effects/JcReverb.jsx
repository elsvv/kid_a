import React from "react";

import ToggleSwitch from "../controls/ToggleSwitch";
import Knob from "../controls/Knob";

export default ({ value, toggleEffect, on, handler }) => {
  return (
    <div className="Effect">
      <h1>JC Reverb</h1>

      <ToggleSwitch current={on} handleClick={toggleEffect} value="jcReverb" />

      <div className="controlsContainer">
        <div className="row">
          <Knob
            name="jcReverb"
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
            name="jcReverb"
            paramName="roomSize"
            min={0}
            max={100}
            increment={100}
            initialDeg={-45}
            overDeg={270}
            value={value.roomSize.value}
            handleValueChange={handler}
          />
        </div>
      </div>
    </div>
  );
};
