import React from "react";
import Tone from "tone";

import Keyboard from "../controls/Keyboard";

export default class KeySynth extends React.Component {
  constructor(props) {
    super(props);

    let keySynth = new Tone.Synth({
      oscillator: {
        type: "sine",
      },
      envelope: {
        attack: 2,
        decay: 1,
        sustain: 0.4,
        release: 1,
      },
    });

    let gain = new Tone.Gain(0.5);

    keySynth.chain(gain, Tone.Master);

    this.state = {
      keySynth,
      gain,
      currentNote: undefined,
    };
  }

  handleMouseDown = (note, octave) => {
    let { keySynth, currentNote } = this.state;

    keySynth.triggerAttack(`${note}${octave}`);
    currentNote = note;

    this.setState({
      keySynth,
      currentNote,
    });
  };

  handleMouseUp = () => {
    let { keySynth, currentNote } = this.state;

    keySynth.triggerRelease();
    currentNote = undefined;

    this.setState({
      keySynth,
      currentNote,
    });
  };

  changeWaveType = (value) => {
    let { keySynth } = this.state;
    keySynth.oscillator.type = value;

    this.setState({
      keySynth,
    });
  };

  toggleEffect = (effectName) => {
    console.log(effectName);
    let { effect, wet, on, name } = this.state[effectName];

    effect.wet.value = on ? 0 : wet;
    on = !on;

    this.setState({
      [`${effectName}`]: { effect, wet, on, name },
    });
  };

  handleVolume = (a, b, value) => {
    let { gain } = this.state;
    let volume = value;
    gain.gain.value = volume;
    this.setState({
      gain,
    });
  };

  handleEnvelope = (name, param, value) => {
    let synth = this.state[`${name}`];
    let env = synth.envelope;
    env[param] = value;

    this.forceUpdate();
  };

  render() {
    let { keySynth, currentNote } = this.state;
    return (
      <div className="keySynthTest">
        <Keyboard
          valueVol={keySynth.volume.value}
          handleValueChange={this.volumeChange}
          currentNote={currentNote}
          typeValue={keySynth.oscillator.type}
          name="keySynth"
          gain={this.state.gain.gain.value}
          changeWaveType={this.changeWaveType}
          handleMouseDown={this.handleMouseDown}
          handleMouseUp={this.handleMouseUp}
          handleVolume={this.handleVolume}
        />
      </div>
    );
  }
}
