// Code ControlledInput Component Here
import React, { Component } from 'react'

export default class ControlledInput extends Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handleNames = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        
    }

    render(){
        return(
            <div>
                Form: <input type="text" 
                onChange={this.handleNames} 
                name='firstName'
                placeholder= 'First Name'/>
                <input type="text" 
                name='lastName'
                onChange={this.handleNames} 
                 placeholder= 'Last Name'/>

                 <h3> {this.state.firstName} {this.state.lastName} </h3>
            </div>
        )
    }
}
