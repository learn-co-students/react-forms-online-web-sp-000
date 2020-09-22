import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

  // handleFirstNameChange = event => {
  //   // console.log(event.target.value)
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   let dataArray = this.state.submittedData.concat(formData);
  //   this.setState({ submittedData: dataArray })
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map((data, idx) => {
  //     return <div key={idx}><span>{data.firstName} </span><span>{data.lastName}</span></div>
  //   })
  // }

  render() {
    return (
      <div>
        {/* <form onSubmit={event => this.handleSubmit(event)}> */}
        <form>
          <input type="text" name="firstName" onChange={event => this.props.handleFirstNameChange(event)} value={this.props.formData.firstName} />
          <input type="text" name="lastName" onChange={event => this.props.handleLastNameChange(event)} value={this.props.formData.lastName} />
          <input type="submit" />
          {/* { this.listOfSubmissions()} */}
        </form>
      </div>
    )
  }
}

export default Form;