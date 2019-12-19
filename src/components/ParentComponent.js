import React from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {
    
    state = {
        firstName: "",
        lasName: "" 
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }
    
    handleLastNameChange = event => {
        this.setState({
            lasName: event.target.value 
        })
    }

    render(){
        return (
            <React.Fragment>
                <Form 
                formData = {this.state}
                handleFirstNameChange = {this.handleFirstNameChange}
                handleLastNameChange = {this.handleLastNameChange}
                />
                <DisplayData formData = {this.state}/>
            </React.Fragment>
        )
       
    }
}

export default ParentComponent 