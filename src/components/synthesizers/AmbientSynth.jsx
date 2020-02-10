import React from "react";
import Tone from "tone";

import Pedalboard from "../effects/Pedalboard";
import EnvelopeAmb from "../controls/EnvelopeAmb";
import Knob from "../controls/Knob";
import Slider from "../controls/Slider";
import PlaySwitch from "../controls/PlaySwitch";
import LoopsContainer from "../controls/LoopsContainer";

export default class AmbientSynth extends React.Component {
  constructor(props) {
    super(props);

    let ambSynth1 = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 1,
        decay: 1,
        sustain: 0.4,
        release: 1
      }
    });

    let ambSynth2 = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 1,
        decay: 1,
        sustain: 0.4,
        release: 1
      }
    });

    let ambSynth3 = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 1,
        decay: 1,
        sustain: 0.4,
        release: 1
      }
    });

    let ambSynth4 = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 1,
        decay: 1,
        sustain: 0.4,
        release: 1
      }
    });

    let ambSynth5 = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 1,
        decay: 1,
        sustain: 0.4,
        release: 1
      }
    });

    let ambSynth6 = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 1,
        decay: 1,
        sustain: 0.4,
        release: 1
      }
    });

    let ambSynth7 = new Tone.Synth({
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: 1,
        decay: 1,
        sustain: 0.4,
        release: 1
      }
    });

    let tuneNow = ["C5", "D5", "E5", "F5", "G5", "A5", "B5"];

    let loop1 = new Tone.Loop(time => {
      ambSynth1.triggerAttackRelease(tuneNow[0], "2n", time);
    }, "8n");

    let loop2 = new Tone.Loop(time => {
      ambSynth2.triggerAttackRelease(tuneNow[1], "4n", time);
    }, "8n");

    let loop3 = new Tone.Loop(time => {
      ambSynth3.triggerAttackRelease(tuneNow[2], "4n", time);
    }, "16n");

    let loop4 = new Tone.Loop(time => {
      ambSynth4.triggerAttackRelease(tuneNow[3], "2n", time);
    }, "2n");

    let loop5 = new Tone.Loop(time => {
      ambSynth5.triggerAttackRelease(tuneNow[4], "4n", time);
    }, "8n");

    let loop6 = new Tone.Loop(time => {
      ambSynth6.triggerAttackRelease(tuneNow[5], "4n", time);
    }, "16n");

    let loop7 = new Tone.Loop(time => {
      ambSynth7.triggerAttackRelease(tuneNow[6], "2n", time);
    }, "2n");

    let ambChorus = new Tone.Chorus(),
      ambFeedbackDelay = new Tone.FeedbackDelay(),
      ambJcReverb = new Tone.JCReverb(),
      ambDistortion = new Tone.Distortion(),
      ambVibrato = new Tone.Vibrato();

    ambChorus.wet.value = 0;
    ambFeedbackDelay.wet.value = 0;
    ambJcReverb.wet.value = 0;
    ambDistortion.wet.value = 0;
    ambVibrato.wet.value = 0;

    let gain = new Tone.Gain(0.3);

    let defaultWetValue = 0;

    ambSynth1.chain(
      ambChorus,
      ambFeedbackDelay,
      ambJcReverb,
      ambDistortion,
      ambVibrato,
      gain,
      Tone.Master
    );

    ambSynth2.chain(
      ambChorus,
      ambFeedbackDelay,
      ambJcReverb,
      ambDistortion,
      ambVibrato,
      gain,
      Tone.Master
    );

    ambSynth3.chain(
      ambChorus,
      ambFeedbackDelay,
      ambJcReverb,
      ambDistortion,
      ambVibrato,
      gain,
      Tone.Master
    );

    ambSynth4.chain(
      ambChorus,
      ambFeedbackDelay,
      ambJcReverb,
      ambDistortion,
      ambVibrato,
      gain,
      Tone.Master
    );

    ambSynth5.chain(
      ambChorus,
      ambFeedbackDelay,
      ambJcReverb,
      ambDistortion,
      ambVibrato,
      gain,
      Tone.Master
    );

    ambSynth6.chain(
      ambChorus,
      ambFeedbackDelay,
      ambJcReverb,
      ambDistortion,
      ambVibrato,
      gain,
      Tone.Master
    );

    ambSynth7.chain(
      ambChorus,
      ambFeedbackDelay,
      ambJcReverb,
      ambDistortion,
      ambVibrato,
      gain,
      Tone.Master
    );

    this.state = {
      chorus: {
        name: "chorus",
        effect: ambChorus,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      feedbackDelay: {
        name: "feedbackDelay",
        effect: ambFeedbackDelay,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      jcReverb: {
        name: "jcReverb",
        effect: ambJcReverb,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      vibrato: {
        name: "vibrato",
        effect: ambVibrato,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      distortion: {
        name: "distortion",
        effect: ambDistortion,
        wet: defaultWetValue,
        on: false,
        frTemp: 0
      },
      ambSynth1,
      ambSynth2,
      ambSynth3,
      ambSynth4,
      ambSynth5,
      ambSynth6,
      ambSynth7,
      gain,
      tuneNow,
      loop1: {
        loop: loop1,
        on: false
      },
      loop2: {
        loop: loop2,
        on: false
      },
      loop3: {
        loop: loop3,
        on: false
      },
      loop4: {
        loop: loop4,
        on: false
      },
      loop5: {
        loop: loop5,
        on: false
      },
      loop6: {
        loop: loop6,
        on: false
      },
      loop7: {
        loop: loop7,
        on: false
      }
    };
  }

  changeWaveType = value => {
    let {
      ambSynth1,
      ambSynth2,
      ambSynth3,
      ambSynth4,
      ambSynth5,
      ambSynth6,
      ambSynth7
    } = this.state;

    ambSynth1.voice.oscillator.type = value;
    ambSynth2.voice.oscillator.type = value;
    ambSynth3.voice.oscillator.type = value;
    ambSynth4.voice.oscillator.type = value;
    ambSynth5.voice.oscillator.type = value;
    ambSynth6.voice.oscillator.type = value;
    ambSynth7.voice.oscillator.type = value;

    this.setState({
      ambSynth1,
      ambSynth2,
      ambSynth3,
      ambSynth4,
      ambSynth5,
      ambSynth6,
      ambSynth7
    });
  };

  toggleEffect = effectName => {
    console.log(effectName);
    let { effect, wet, on, name } = this.state[effectName];

    effect.wet.value = on ? 0 : wet;
    on = !on;

    this.setState({
      [`${effectName}`]: { effect, wet, on, name }
    });
  };

  handleVolume = (a, b, value) => {
    let { gain } = this.state;
    let volume = value;
    console.log("old", gain.gain.value);
    console.log("comming vol", volume);
    gain.gain.value = volume;
    console.log("new", gain.gain.value);
    this.setState({
      gain
    });
  };

  handleValueChange = (effectName, param, value) => {
    let { effect, wet, on, name } = this.state[effectName];

    if (effect[param] == "wet") {
      effect[param].value = on == true ? value : 0;
      wet = value;
    } else {
      if (typeof effect[`${param}`] == "object") {
        effect[`${param}`].value = value;
      } else {
        effect[`${param}`] = value;
      }
    }

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    });
  };

  handleSubValueChange = (effectName, param, inner, value) => {
    let { effect, wet, on, name } = this.state[effectName];

    if (typeof effect[`${param}`][`${inner}`] == "object") {
      effect[`${param}`][`${inner}`].value = value;
    } else {
      effect[`${param}`][`${inner}`] = value;
    }

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    });
  };

  handleEnvelope = (param, value) => {
    let {
      ambSynth1,
      ambSynth2,
      ambSynth3,
      ambSynth4,
      ambSynth5,
      ambSynth6,
      ambSynth7
    } = this.state;

    ambSynth1.envelope[param] = value;
    ambSynth2.envelope[param] = value;
    ambSynth3.envelope[param] = value;
    ambSynth4.envelope[param] = value;
    ambSynth5.envelope[param] = value;
    ambSynth6.envelope[param] = value;
    ambSynth7.envelope[param] = value;

    this.forceUpdate();
  };

  // LOOP
  toggleLoop = loopName => {
    let { bpm } = this.props;
    let { loop, on } = this.state[loopName];

    on ? loop.stop() : loop.start();

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    });

    Tone.Transport.bpm.value = this.props.bpm;
    Tone.Transport.start();
  };

  render() {
    let {
      ambSynth1,
      ambSynth2,
      ambSynth3,
      ambSynth4,
      ambSynth5,
      ambSynth6,
      ambSynth7,
      loop1,
      loop2,
      loop3,
      loop4,
      loop5,
      loop6,
      loop7
    } = this.state;

    return (
      <div className="AmbientSynth">
        <div className="ambientFirstRow">
          <div className="ambientLoops">
            <div className="mainControls">
              <div className="volume">
                <h2>Volume</h2>
                <Slider
                  name="vol"
                  min="0"
                  max="1"
                  value={this.state.gain.gain.value}
                  handleValueChange={this.handleVolume}
                />
              </div>
            </div>

            <LoopsContainer
              loops={[loop1, loop2, loop3, loop4, loop5, loop6, loop7]}
              toggleLoop={this.toggleLoop}
            />
          </div>

          <div className="ambientEnvelope">
            <EnvelopeAmb
              handleEnvelope={this.handleEnvelope}
              env={this.state.ambSynth1.envelope}
              name="ambSynth"
            />
          </div>
        </div>

        <Pedalboard
          synth={this.state}
          handler={this.handleValueChange}
          subHandler={this.handleSubValueChange}
          toggleEffect={this.toggleEffect}
        />
      </div>
    );
  }
}
