import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    const firstName = event.target.children[0].value
    const lastName = event.target.children[1].value
    this.sendFormDataSomewhere(this.state)
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
  
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="text" name="firstName" value={this.state.firstName} />
        <input type="text" name="lastName" value={this.state.lastName} />
      </form>
    );
  }
}

export default ControlledInput;