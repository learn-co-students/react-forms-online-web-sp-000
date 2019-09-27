// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
    state = {
        olakase: 'ola'
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.olakease)
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
              <input 
              type="text"
              className="olakase"
              value={this.state.olakase}
              onChange={this.handleChange}
            />
            </form>
        );
    }
}

export default ControlledInput;