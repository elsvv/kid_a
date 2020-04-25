import React from "react";
import ToggleSwitch from "../controls/ToggleSwitch";
import Knob from "../controls/Knob";
import Picker from "../controls/Picker";

export default ({ on, toggleEffect, value, handler }) => {
  return (
    <div className="Effect">
      <h1>Feedback Delay</h1>

      <ToggleSwitch
        value="feedbackDelay"
        current={on}
        handleClick={toggleEffect}
      />

      <div className="controlsContainer">
        <div className="row">
          <Knob
            name="feedbackDelay"
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
            name="feedbackDelay"
            paramName="delayTime"
            min={1}
            max={100}
            increment={100}
            initialDeg={-45}
            overDeg={270}
            value={value.delayTime.value}
            handleValueChange={handler}
          />
        </div>
      </div>
    </div>
  );
};
