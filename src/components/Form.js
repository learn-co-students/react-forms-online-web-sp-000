import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }





  render() {
    return (
      <div>
      <form>
        <input type="text" name="firstName" onChange={event => this.props.handleFirstNameChange(event)} value={this.props.formData.firstName} />
        <input type="text" name="lastName" onChange={event => this.props.handleLastNameChange(event)} value={this.props.formData.lastName} />
        <input type="submit" value="submit"/>
      </form>
    
      </div>
    )
  }
}

export default Form;