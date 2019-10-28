import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
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
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
      //each of these actions is updating state
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
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
          value={this.state.firstName}
        />
        <input
          type="text"
          onChange={event => this.handleLastNameChange(event)}
          value={this.state.lastName}
        />
        <input type="submit"/>
      </form>
      {this.listOfSubmissions()}
    </div>
  )
}

}

export default Form;
