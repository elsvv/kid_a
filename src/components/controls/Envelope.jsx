import Tone from "tone";
import React from "react";
import classnames from "classnames";

import Knob from "./Knob";

export default ({ env, name }) => {
  const classes = classnames({
    Envelope: true,
    KeyEnv: name == "keySynth",
    RhEnv: name == "rhSynth",
    AmbientEnv: name == "ambientSynth",
  });

  return (
    <div className={classes}>
      <Knob
        name={name}
        paramName="attack"
        min={1}
        max={150}
        increment={10}
        initialDeg={-45}
        overDeg={270}
        value={env.attack}
        handleValueChange={this.props.handleEnvelope}
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
        handleValueChange={this.props.handleEnvelope}
      />
      <Knob
        name={name}
        paramName="sustain"
        min={1}
        max={150}
        increment={10}
        initialDeg={-45}
        overDeg={270}
        value={env.sustain}
        handleValueChange={this.props.handleEnvelope}
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
        handleValueChange={this.props.handleEnvelope}
      />
    </div>
  );
};
