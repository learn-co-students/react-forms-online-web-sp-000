import React from 'react'


class ControlledInput extends React.Component {

  state = {
    firstName: "",
    lastName: ""
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleLastNameChange =event => {
    this.setState({
      lastName: event.target.value
    })
  }
  render(){
    return(

    )
  }
}
export default ControlledInput
