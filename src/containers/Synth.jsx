import React from "react";
import Tone from "tone";

import RadioheadLooper from "../components/synthesizers/RadioheadLooper";
import KeySynth from "../components/synthesizers/KeySynth";
import AmbientSynth from "../components/synthesizers/AmbientSynth";
import ThreeContainer from "../threeComponents/ThreeContainer/ThreeContainer";

export default class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 90,
      viewSet: "keySynth",
      showBack: false,
    };
  }

  bpmChange = (value) => {
    let { bpm } = this.state;
    bpm = Math.round(value);
    Tone.Transport.bpm.value = bpm;

    this.setState({
      bpm,
    });
  };

  toggleBack = () => {
    let { showBack } = this.state;
    this.setState({ showBack: !showBack });
  };

  render() {
    let { bpm, viewSet, showBack } = this.state;
    return (
      <div className="app">
        {showBack && <ThreeContainer />}
        <div className="synthsContainer">
          <RadioheadLooper
            toggleBack={this.toggleBack}
            bpmChange={this.bpmChange}
            bpm={bpm}
          />
          <KeySynth viewSet={viewSet} />
          <AmbientSynth viewSet={viewSet} bpm={bpm} />
        </div>
      </div>
    );
  }
}
