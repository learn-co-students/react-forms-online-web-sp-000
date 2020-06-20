import React, { Component } from 'react';

export default class ParentComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }
    
    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    render () {
        return (
            <Form 
                formData={this.state}
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChange={this.handleLastNameChange}
            />
        )
    }
}