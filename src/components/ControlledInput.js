import React from "react";

class ControlledInput extends React.Component {

	constructor() {
		super();
		this.state = {
			firstName: "John",
			lastName: "Henry"
		};
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text"
							 name="firstName"
							 value={this.state.firstName}
							 onChange={this.handleChange} />
				<input type="text"
							 name="lastName"
							 value={this.state.lastName}
							 onChange={this.handleChange} />
				<input type="submit"
							 value="Submit" />
			</form>
		);
	};

}

export default ControlledInput;
