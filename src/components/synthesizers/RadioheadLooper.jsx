import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import BpmSlider from '../controls/BpmSlider'

import * as effects from '../../tunes/effects'
import * as synths from '../../tunes/synths'

import Pedalboard from '../effects/Pedalboard'
import EnvelopeAmb from '../controls/EnvelopeAmb'
import Knob from '../controls/Knob'
import Slider from '../controls/Slider'
import PlaySwitch from '../controls/PlaySwitch'

export default class RadioheadLooper extends React.Component {
  constructor(props) {
    super(props)

    let rhSynth = new Tone.PolySynth(1, Tone.Synth, {
      oscillator: {
        type: 'triangle8',
        count: 3,
        spread: 30,
        phase: 10,
        fadeIn: 4
      },
      envelope: {
        attack: 0.3,
        decay: 1,
        sustain: 1,
        release: 5,
        attackCurve: 'exponential'
      }
    })

    let part1 = new Tone.Part(
      function(time, event) {
        rhSynth.triggerAttackRelease(event.note, event.dur, time)
      },
      [
        {
          time: '0:0:0',
          note: 'E4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:1:0',
          note: 'G3',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:2:0',
          note: 'C4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:3:0',
          note: 'G3',
          velocity: 0.1,
          dur: '4n'
        },
        {
          time: '1:0:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:1:0',
          note: 'G3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:2:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:3:0',
          note: 'G3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:0:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:1:0',
          note: 'G3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:2:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:3:0',
          note: 'G3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:0:0',
          note: 'G#3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:1:0',
          note: 'A#3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:2:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:3:0',
          note: 'D4',
          velocity: 0.3,
          dur: '4n'
        }
      ]
    )

    part1.loop = true
    part1.loopEnd = '4m'

    let part2 = new Tone.Part(
      function(time, event) {
        rhSynth.triggerAttackRelease(event.note, event.dur, time)
      },
      [
        {
          time: '0:0:0',
          note: 'E4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:1:0',
          note: 'F3',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:2:0',
          note: 'C4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:3:0',
          note: 'F3',
          velocity: 0.1,
          dur: '4n'
        },
        {
          time: '1:0:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:1:0',
          note: 'F3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:2:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:3:0',
          note: 'F3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:0:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:1:0',
          note: 'F3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:2:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:3:0',
          note: 'F3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:0:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:1:0',
          note: 'F3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:2:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:3:0',
          note: 'F3',
          velocity: 0.3,
          dur: '4n'
        }
      ]
    )

    part2.loop = true
    part2.loopEnd = '4m'

    let part3 = new Tone.Part(
      function(time, event) {
        rhSynth.triggerAttackRelease(event.note, event.dur, time)
      },
      [
        {
          time: '0:0:0',
          note: 'D4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:1:0',
          note: 'F3',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:2:0',
          note: 'A3',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:3:0',
          note: 'F3',
          velocity: 0.1,
          dur: '4n'
        },
        {
          time: '1:0:0',
          note: 'D4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:1:0',
          note: 'F3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:2:0',
          note: 'A3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:3:0',
          note: 'F3',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:0:0',
          note: 'D5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:1:0',
          note: 'F4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:2:0',
          note: 'A4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:3:0',
          note: 'F4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:0:0',
          note: 'D5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:1:0',
          note: 'F4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:2:0',
          note: 'A4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:3:0',
          note: 'F4',
          velocity: 0.3,
          dur: '4n'
        }
      ]
    )

    part3.loop = true
    part3.loopEnd = '4m'

    let part4 = new Tone.Part(
      function(time, event) {
        rhSynth.triggerAttackRelease(event.note, event.dur, time)
      },
      [
        {
          time: '0:0:0',
          note: 'D4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:1:0',
          note: 'G4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:2:0',
          note: 'B4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:3:0',
          note: 'G4',
          velocity: 0.1,
          dur: '4n'
        },
        {
          time: '1:0:0',
          note: 'D4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:1:0',
          note: 'G5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:2:0',
          note: 'B4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:3:0',
          note: 'G5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:0:0',
          note: 'D5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:1:0',
          note: 'G6',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:2:0',
          note: 'B5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:3:0',
          note: 'G4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:0:0',
          note: 'D5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:1:0',
          note: 'G4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:2:0',
          note: 'B4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:3:0',
          note: 'G4',
          velocity: 0.3,
          dur: '4n'
        }
      ]
    )

    part4.loop = true
    part4.loopEnd = '4m'

    let part5 = new Tone.Part(
      function(time, event) {
        rhSynth.triggerAttackRelease(event.note, event.dur, time)
      },
      [
        {
          time: '0:0:0',
          note: 'F4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:1:0',
          note: 'E4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:2:0',
          note: 'D4',
          velocity: 1,
          dur: '4n'
        },
        {
          time: '0:3:0',
          note: 'E5',
          velocity: 0.1,
          dur: '4n'
        },
        {
          time: '1:0:0',
          note: 'D5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:1:0',
          note: 'C5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:2:0',
          note: 'G4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '1:3:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:0:0',
          note: 'F4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:1:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:2:0',
          note: 'B4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '2:3:0',
          note: 'A4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:0:0',
          note: 'C5',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:1:0',
          note: 'D4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:2:0',
          note: 'E4',
          velocity: 0.3,
          dur: '4n'
        },
        {
          time: '3:3:0',
          note: 'C4',
          velocity: 0.3,
          dur: '4n'
        }
      ]
    )

    part5.loop = true
    part5.loopEnd = '4m'

    let gain = new Tone.Gain(0.5)

    rhSynth.chain(gain, Tone.Master)

    this.state = {
      rhSynth,
      // rhSynth2,
      // rhSynth3,
      // rhSynth4,
      // rhSynth5,
      // rhSynth6,
      // rhSynth7,
      gain,
      part1: {
        part: part1,
        on: false
      },
      part2: {
        part: part2,
        on: false
      },
      part3: {
        part: part3,
        on: false
      },
      part4: {
        part: part4,
        on: false
      },
      part5: {
        part: part5,
        on: false
      },
      bpm: 120
    }

    _.bindAll(
      this,
      'handleVolume',
      'toggleRh1',
      'toggleRh2',
      'toggleRh3',
      'toggleRh4',
      'toggleRh5'
    )
  }

  handleVolume(a, b, value) {
    let { gain } = this.state
    let volume = value
    console.log('old', gain.gain.value)
    console.log('comming vol', volume)
    gain.gain.value = volume
    console.log('new', gain.gain.value)
    this.setState({
      gain
    })
  }

  // LOOP

  toggleRh1() {
    let { part1 } = this.state
    let { on, part } = part1

    on ? part1.part.stop() : part1.part.start()

    this.setState({
      part1: {
        part,
        on: !on
      }
    })

    Tone.Transport.bpm.value = this.props.bpm
    Tone.Transport.start()
  }

  toggleRh2() {
    let { part2 } = this.state
    let { on, part } = part2

    on ? part2.part.stop() : part2.part.start()

    this.setState({
      part2: {
        part,
        on: !on
      }
    })

    Tone.Transport.bpm.value = this.props.bpm
    Tone.Transport.start()
  }

  toggleRh3() {
    let { part3 } = this.state
    let { on, part } = part3

    on ? part3.part.stop() : part3.part.start()

    this.setState({
      part3: {
        part,
        on: !on
      }
    })

    Tone.Transport.bpm.value = this.props.bpm
    Tone.Transport.start()
  }

  toggleRh4() {
    let { part4 } = this.state
    let { on, part } = part4

    on ? part4.part.stop() : part4.part.start()

    this.setState({
      part4: {
        part,
        on: !on
      }
    })

    Tone.Transport.bpm.value = this.props.bpm
    Tone.Transport.start()
  }

  toggleRh5() {
    let { part5 } = this.state
    let { on, part } = part5

    on ? part5.part.stop() : part5.part.start()

    this.setState({
      part5: {
        part,
        on: !on
      }
    })

    Tone.Transport.bpm.value = this.props.bpm
    Tone.Transport.start()
  }

  render() {
    let { part1, part2, part3, part4, part5 } = this.state
    return (
      <div className="rhSynth">
        <div className="rhLoops">
          <div className="mainControls">
            <BpmSlider
              min="0"
              max="220"
              value={this.props.bpm}
              handleValueChange={this.props.bpmChange}
            />
            TEMPO: {this.props.bpm}
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

          <div className="playSynth">
            <h2>Part 1</h2>
            <PlaySwitch
              name="play"
              value={part1.on}
              handleToggleClick={this.toggleRh1}
            />
          </div>

          <div className="loops">
            <div className="loop loop1">
              <h2>Part 2</h2>
              <PlaySwitch
                name="play"
                value={part2.on}
                handleToggleClick={this.toggleRh2}
              />
            </div>
            <div className="loop loop2">
              <h2>Part 3</h2>
              <PlaySwitch
                name="play"
                value={part3.on}
                handleToggleClick={this.toggleRh3}
              />
            </div>
            <div className="loop loop3">
              <h2>Part 4</h2>
              <PlaySwitch
                name="play"
                value={part4.on}
                handleToggleClick={this.toggleRh4}
              />
            </div>
            <div className="loop loop4">
              <h2>Part 5</h2>
              <PlaySwitch
                name="play"
                value={part5.on}
                handleToggleClick={this.toggleRh5}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
