import React from 'react';

export default class ControlledInput extends React.Component {
  state = {
    value: 'Hi There'
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.sendFormatDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={event => {this.handleSubmit(event)}}>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
