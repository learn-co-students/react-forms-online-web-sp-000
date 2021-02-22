import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'


class ParentComponent extends React.Component {
    state = {
        firstName: "",
        lastName:  "",
    }

    handleNameChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleLastNameChange = event => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    render() {
        return (
            <div>
                <Form
                    formData = {this.state}
                    handleNameChange={this.handleNameChange}
                    // handleLastNameChange={this.handleLastNameChange}
                />
                <DisplayData formData={this.state} /> 
            </div>
        )
    }
}

export default ParentComponent;