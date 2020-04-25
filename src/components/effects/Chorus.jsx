import React from "react";
import Knob from "../controls/Knob";
import ToggleSwitch from "../controls/ToggleSwitch";

export default ({ handler, subHandler, value, on, toggleEffect }) => {
  return (
    <div className="Effect">
      <h1>Chorus</h1>

      <ToggleSwitch current={on} handleClick={toggleEffect} value="chorus" />

      <div className="controlsContainer">
        <div className="row">
          <Knob
            name="chorus"
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
            name="chorus"
            paramName="frequency"
            min={1}
            max={100}
            increment={1}
            initialDeg={-45}
            overDeg={270}
            value={value.frequency.value}
            handleValueChange={handler}
          />
          <Knob
            name="chorus"
            paramName="delayTime"
            min={2}
            max={20}
            increment={1}
            initialDeg={-45}
            overDeg={270}
            value={value.delayTime}
            handleValueChange={handler}
          />
        </div>
        <div className="row">
          <Knob
            name="chorus"
            paramName="depth"
            min={2}
            max={20}
            increment={1}
            initialDeg={-45}
            overDeg={270}
            value={value.depth}
            handleValueChange={handler}
          />
          <Knob
            name="chorus"
            paramName="spread"
            min={0}
            max={180}
            increment={1}
            initialDeg={-45}
            overDeg={270}
            value={value.spread}
            handleValueChange={handler}
          />
        </div>
      </div>
    </div>
  );
};
