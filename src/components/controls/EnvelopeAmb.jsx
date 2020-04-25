import Tone from "tone";
import React from "react";
import classnames from "classnames";

import Knob from "./Knob";

export default ({ env, name, handleEnvelope }) => {
  const classes = classnames({
    Envelope: true,
    KeyEnv: name === "keySynth",
    RhEnv: name === "rhSynth",
    AmbientEnv: name === "ambSynth",
  });

  return (
    <div className={classes}>
      <div className="row">
        <Knob
          name={name}
          paramName="attack"
          min={1}
          max={150}
          increment={10}
          initialDeg={-45}
          overDeg={270}
          value={env.attack}
          handleValueChange={handleEnvelope}
        />
        <Knob
          name={name}
          paramName="decay"
          min={1}
          max={150}
          increment={10}
          initialDeg={-45}
          overDeg={270}
          value={env.decay}
          handleValueChange={handleEnvelope}
        />
      </div>
      <div className="row">
        <Knob
          name={name}
          paramName="sustain"
          min={1}
          max={150}
          increment={10}
          initialDeg={-45}
          overDeg={270}
          value={env.sustain}
          handleValueChange={handleEnvelope}
        />
        <Knob
          name={name}
          paramName="release"
          min={1}
          max={150}
          increment={10}
          initialDeg={-45}
          overDeg={270}
          value={env.release}
          handleValueChange={handleEnvelope}
        />
      </div>
    </div>
  );
};
