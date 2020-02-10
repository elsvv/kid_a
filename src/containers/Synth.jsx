import React from "react";
import Tone from "tone";

import BpmSlider from "../components/controls/BpmSlider";
import "./synth.scss";
import RadioheadLooper from "../components/synthesizers/RadioheadLooper";
import KeySynth from "../components/synthesizers/KeySynth";
import AmbientSynth from "../components/synthesizers/AmbientSynth";
import ThreeContainer from "../threeComponents/ThreeContainer/ThreeContainer.jsx";

export default class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm: 90,
      viewSet: "keySynth"
    };

    this.handleViewChange = this.handleViewChange.bind(this);
    this.bpmChange = this.bpmChange.bind(this);
  }

  handleViewChange(value) {
    this.state.viewSet = value;
  }

  bpmChange(value) {
    let { bpm } = this.state;
    bpm = Math.round(value);
    Tone.Transport.bpm.value = bpm;
    console.log("new bpm", Tone.Transport.bpm.value);

    this.setState({
      bpm
    });
  }

  render() {
    let { bpm, viewSet } = this.state;
    return (
      <div className="app">
        <ThreeContainer />
        <div className="synthsContainer">
          <RadioheadLooper bpmChange={this.bpmChange} bpm={bpm} />
          <AmbientSynth
            handleViewChange={this.handleViewChange}
            viewSet={viewSet}
            bpm={bpm}
          />
          <KeySynth
            handleViewChange={this.handleViewChange}
            viewSet={viewSet}
          />
        </div>
      </div>
    );
  }
}
