import React from 'react';


class Form extends React.Component {

  render() {
    return (
      <form >
        <input type="text" name="firstName" onChange = {(e)=>this.props.handleChange(e)} value={this.props.state.firstName} />
        <input type="text" name="lastName" onChange = {(e)=>this.props.handleChange(e)} value={this.props.state.lastName} />
        <input type = "submit"/>
      </form>

    )
  }
}

export default Form;