import React from 'react'
import _ from 'lodash'
import ToggleSwitch from '../controls/ToggleSwitch'
import Knob from '../controls/Knob'
import Picker from '../controls/Picker'

export default class FeedbackDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      name,
      effect,
      on,
      wet,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue
    } = this.props

    let value = this.props.value

    return (
      <div className="Effect">
        <h1>Feedback Delay</h1>

        <ToggleSwitch
          value="feedbackDelay"
          current={on}
          handleClick={toggleEffect}
        />

        <div className="controlsContainer">
          <Knob
            name="feedbackDelay"
            paramName="wet"
            min={1}
            max={100}
            increment={100}
            initialDeg={-45}
            overDeg={270}
            value={value.wet.value}
            handleValueChange={this.props.handler}
          />
          <Knob
            name="feedbackDelay"
            paramName="delayTime"
            min={1}
            max={100}
            increment={100}
            initialDeg={-45}
            overDeg={270}
            value={value.delayTime.value}
            handleValueChange={this.props.handler}
          />
        </div>
      </div>
    )
  }
}
