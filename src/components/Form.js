import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={(event) => this.props.handleChange(event)}
            name="firstName"
            value={this.props.formData.firstName}
          ></input>
          <input type="text"
          onChange={event => this.props.handleChange(event)}
          name="lastName"
          value={this.props.formData.lastName}
          ></input>
        </form>
      </div>
    );
  }
}

export default Form;
