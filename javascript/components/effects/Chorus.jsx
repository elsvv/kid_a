import React from 'react'
import _ from 'lodash'
import Knob from '../controls/Knob'
import ToggleSwitch from '../controls/ToggleSwitch'
import Picker from '../controls/Picker'

export default class Chorus extends React.Component {
  constructor(props) {
    super(props)

    _.bindAll(this, 'handlerFilter', 'handlePicker', 'handlerFilterKnob')
  }

  handlePicker(value) {
    this.props.handler('chorus', 'oversample', value)
  }

  handlerFilter(value) {
    this.props.subHandler('chorus', 'filter', 'type', value)
  }
  handlerFilterKnob(name, param, value) {
    this.props.subHandler(name, 'filter', param, value)
  }

  render() {
    let value = this.props.value
    return (
      <div className="Effect">
        <h1>Chorus</h1>

        <ToggleSwitch
          current={this.props.on}
          handleClick={this.props.toggleEffect}
          value="chorus"
        />
        <Knob
          name="chorus"
          paramName="wet"
          min={1}
          max={100}
          increment={100}
          initialDeg={-45}
          overDeg={270}
          value={value.wet.value}
          handleValueChange={this.props.handler}
        />

        <div className="controlsContainer">
          <div className="row">
            <Knob
              name="chorus"
              paramName="frequency"
              min={1}
              max={100}
              increment={1}
              initialDeg={-45}
              overDeg={270}
              value={value.frequency.value}
              handleValueChange={this.props.handler}
            />
            <Knob
              name="chorus"
              paramName="delayTime"
              min={2}
              max={20}
              increment={1}
              initialDeg={-45}
              overDeg={270}
              value={value.delayTime}
              handleValueChange={this.props.handler}
            />
          </div>
          <div className="row">
            <Knob
              name="chorus"
              paramName="depth"
              min={2}
              max={20}
              increment={1}
              initialDeg={-45}
              overDeg={270}
              value={value.depth}
              handleValueChange={this.props.handler}
            />
            <Knob
              name="chorus"
              paramName="spread"
              min={0}
              max={180}
              increment={1}
              initialDeg={-45}
              overDeg={270}
              value={value.spread}
              handleValueChange={this.props.handler}
            />
          </div>
        </div>
      </div>
    )
  }
}
