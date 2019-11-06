import React, { Component } from 'react';
import Form from './Form'
import DisplayData from './DisplayData'

export class ParentComponent extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     firstName: "",
  //     lastName: "",
  //   }
  // }

  state = {
    firstName: "",
    lastName: "",
  }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleFirstNameChange={this.handleChange}
          handleLastNameChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
    );
  }
}

export default ParentComponent;
