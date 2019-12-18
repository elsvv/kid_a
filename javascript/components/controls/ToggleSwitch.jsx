import React from 'react'
import classnames from 'classnames'

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { value } = this.props
    console.log(value, 'toggle')
    this.props.handleClick(value)
  }

  render() {
    const { current, value } = this.props

    const classes = classnames({
      ToggleSwitch: true,
      on: current,
      [`${value}`]: true
    })

    return (
      <div className="toggleContainer">
        <div className={classes} onClick={this.handleClick}>
          <div className="toggleSwitchStroke"></div>
        </div>
      </div>
    )
  }
}
