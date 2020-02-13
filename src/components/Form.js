import React from 'react'

class Form extends React.Component {
  render() {
    return(
      <div>
        <form>
          <input
            type="text"
            // onChange={event => this.props.handleFirstNameChange(event)}
            onChange={
              function(event){
               return this.props.handleFirstNameChange(event);
              }
          }
            
            value={this.props.formData.firstName}
          />

          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value = {this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}

b

export default Form;
