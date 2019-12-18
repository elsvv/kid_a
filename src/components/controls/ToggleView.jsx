import React from 'react'
import classnames from 'classnames'

export default class ToggleView extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let { name } = this.props.name
    this.props.handleViewChange(name)
  }
  render() {
    let { name, viewSet } = this.props
    const classes = classnames({
      Button: true,
      ToggleView: true,
      on: name == viewSet
    })
    return <div className={classes}>Toggle {name} Pedalboard</div>
  }
}
