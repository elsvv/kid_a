import _ from 'lodash'
import Tone from 'tone'
import classnames from 'classnames'
import React from 'react'

import Octaves from './Octaves'
import ButtonSet from './controls/ButtonSet'
import Key from './Key'
import Slider from './controls/Slider'

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
      octave: 3
    }

    _.bindAll(this, 'changeOct')
  }

  changeOct(e) {
    console.log('e', e.target.value)
    this.setState({
      octave: e.target.value
    })
  }

  render() {
    const set = ['sine', 'sine4', 'triangle', 'triangle8', 'square', 'sawtooth']
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
    } = this.props

    let { notes, octave } = this.state
    let keys = []

    notes.map((note, i) => {
      keys.push(
        <Key
          octave={octave}
          note={note}
          key={i}
          currentNote={currentNote}
          handleMouseUp={handleMouseUp}
          handleMouseDown={handleMouseDown}
        />
      )
    })

    return (
      <div className="keySynth">
        <div className="keyContainer">
          <div className="keyboard">{keys}</div>
        </div>

        <div className="keyPresets">
          <div className="keyControls">
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
    )
  }
}
