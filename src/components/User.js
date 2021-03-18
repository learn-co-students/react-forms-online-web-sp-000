import React from 'react'
import Form from './Form'
import DataDisplay from './DataDisplay'

class User extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        />
        <DataDisplay formData={this.state} />
      </div>
    )
  }
}

export default User
