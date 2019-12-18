import React from 'react'
import Tone from 'tone'

import BpmSlider from '../components/controls/BpmSlider'
import RadioheadLooper from '../components/synthesizers/RadioheadLooper'
import KeySynth from '../components/synthesizers/KeySynth'
import AmbientSynth from '../components/synthesizers/AmbientSynth'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bpm: 90,
      viewSet: 'keySynth'
    }

    this.handleViewChange = this.handleViewChange.bind(this)
    this.bpmChange = this.bpmChange.bind(this)
  }

  handleViewChange(value) {
    this.state.viewSet = value
  }

  bpmChange(value) {
    let { bpm } = this.state
    bpm = Math.round(value)
    Tone.Transport.bpm.value = bpm
    console.log('new bpm', Tone.Transport.bpm.value)

    this.setState({
      bpm
    })
  }

  render() {
    let { bpm, viewSet } = this.state
    return (
      <div className="app">
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
    )
  }
}
