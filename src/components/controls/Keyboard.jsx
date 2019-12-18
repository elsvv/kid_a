import Tone from "tone";
import classnames from "classnames";
import React from "react";

import "./Keyboard.scss";

import Octaves from "./Octaves";
import ButtonSet from "./ButtonSet";
import Key from "./Key";
import KeyboardListener from "./KeyboardListener";
import Slider from "./Slider";

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
      playKeys: ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j"],
      octave: 3
    };

    this.changeOct = this.changeOct.bind(this);
  }

  changeOct(e) {
    console.log("e", e.target.value);
    this.setState({
      octave: e.target.value
    });
    console.log("state", this.state.octave);
  }

  render() {
    const set = [
      "sine",
      "sine4",
      "triangle",
      "triangle8",
      "square",
      "sawtooth"
    ];
    let {
      handleMouseUp,
      handleMouseDown,
      name,
      changeWaveType,
      typeValue,
      currentNote,
      valueVol,
      handleValueChange,
      min,
      max
    } = this.props;
    let { notes, playKeys, octave } = this.state;
    let keys = [];

    notes.map((note, i) => {
      keys.push(
        <Key
          octave={octave}
          note={note}
          key={i}
          playKey={playKeys[i]}
          currentNote={currentNote}
          handleMouseUp={handleMouseUp}
          handleMouseDown={handleMouseDown}
        />
      );
    });

    return (
      <div className="keySynth">
        <div className="keyContainer">
          <KeyboardListener
            handleMouseDown={handleMouseDown}
            handleMouseUp={handleMouseUp}
            octave={octave}
          />

          <div className="keyboard">{keys}</div>
        </div>

        <div className="keyPresets">
          <div className="keyControls">
            <div className="keyVolume">
              <h1>Volume</h1>
              <Slider
                name="vol"
                min="0"
                max="1"
                value={this.props.gain}
                handleValueChange={this.props.handleVolume}
              />
            </div>
            <Octaves
              value={octave}
              min="0"
              max="6"
              changeOct={this.changeOct}
            />
          </div>

          <div className="keyWaves">
            <ButtonSet
              name={name}
              property="type"
              set={set}
              value={typeValue}
              handleValueChange={changeWaveType}
            />
          </div>
        </div>
      </div>
    );
  }
}
