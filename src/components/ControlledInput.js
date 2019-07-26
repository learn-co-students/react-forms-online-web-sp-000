// Code ControlledInput Component Here
import {Component} from 'react';

export default class ControlledInput extends Component {
  state = {
    firstName: "Bobba",
    lastName: "Fett"
  }

  handleFirstNameChange = event=> {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastNameChange = event=> {
    this.setState({
      lastName: event.target.value
    });
  }

  render() {
    return(
      <form>
        <input value={this.state.firstName} onChange={event => {this.handleFirstNameChange}}/>
        <input value={this.state.lastName} onChange={event => {this.handleLastNameChange}}/>
      </form>
    );
  }
}