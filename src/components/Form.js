import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let formData = {firstName: this.state.firstName, lastName: this.state.lastName};
  //   let arrayData = this.state.submittedData.concat(formData);
  //   this.setState = {submittedData: arrayData}
  // }

  // listOnSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lasttName}</span></div>
  //   })
  // }

  // render() {
  //   return (
  //     <form onSubmit={event => this.handleSubmit(event)}>
  //       <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
  //       <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
  //     </form>
  //   )
  // }

  render() {
    return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          onChange={event => this.props.handleChange(event)}
          value={this.props.formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={event => this.props.handleChange(event)}
          value={this.props.formData.lastName}
        />
      </form>
      </div>
    )
  }
}

export default Form;