import React, { Component } from 'react';

class ControlledInput extends Component {

  state = {
    firstName: "John",
    lastName: "Henry"
  }

  onChangefirst = (e)=> {
    this.setState({
      firstName: e.target.value
    })
  }

  onChangeHandle =(e)=> {

    console.log(e.target.value)
    this.setState({
      lastName: e.target.value
    })
  }

  handleSubmit =(event)=>{
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChangefirst} />
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChangeHandle} />
        <button>Submit</button>
      </form>
    )
  }
}
export default ControlledInput;
