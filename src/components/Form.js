import React from 'react';
 
//controlling the form w state 
class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }
 
  //update
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
 //update
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
 //submit new form
  handleSubmit = event => {
    event.preventDefault() //default behavior of a form
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName } //putting current form data using values stored in state
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }
 //rendering list of names
  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }
 
  //onSubmit added to the form in JSX,
  //anonymous function called 
  //event =>
  //
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleFirstNameChange(event)} //event listener
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