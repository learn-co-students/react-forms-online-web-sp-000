import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <div>
       <form>
         <input 
          type = "text"
          onChange = {event => this.props.handleFirstNameChange}
          value = {this.props.formData.firstName}
         />
         <input 
          type = "text"
          onChange = {event => this.props.handleLastNameChange}
          value = {this.props.formData.lastName}
         />
       </form>
      </div>
    )
  }
}

export default Form;