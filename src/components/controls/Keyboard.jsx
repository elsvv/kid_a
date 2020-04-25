import React from "react";

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
      octave: 3,
    };
  }

  changeOct = (e) => {
    this.setState({
      octave: e.target.value,
    });
  };

  render() {
    const set = [
      "sine",
      "sine4",
      "triangle",
      "triangle8",
      "square",
      "sawtooth",
    ];
    const {
      handleMouseUp,
      handleMouseDown,
      name,
      changeWaveType,
      typeValue,
      currentNote,
    } = this.props;
    const { notes, playKeys, octave } = this.state;
    const keys = notes.map((note, i) => (
      <Key
        octave={octave}
        note={note}
        key={i}
        playKey={playKeys[i]}
        currentNote={currentNote}
        handleMouseUp={handleMouseUp}
        handleMouseDown={handleMouseDown}
      />
    ));

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
