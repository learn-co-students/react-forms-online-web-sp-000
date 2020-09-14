import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange = (e) => {
    // debugger
    this.setState({
      lastName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    var formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
        <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleFirstNameChange(event)}
            value={this.state.firstName}/>
          <input
            type="text"
            onChange={event => this.handleLastNameChange(event)}
            value={this.state.lastName}/>
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
        </div>
    )
  }
}

export default Form;