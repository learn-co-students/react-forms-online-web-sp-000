import React from 'react';
import { EvalSourceMapDevToolPlugin } from 'webpack';
import Form from './Form'

export default class ParentComponent extends React.Component {
   state = {
       firstName: "",
       lastName: ""
   }

//    handleFirstNameChange = (event) => {
//        this.setState({
//            firstName: event.target.value
//        })
//    }

//    handleLastNameChange = (event) => {
//        this.setState({
//            lastName: event.target.value
//        })
//    }

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

   render() {
       return(
           <div>
           <Form
             formData={this.state}
            //  handleFirstNameChange={this.handleFirstNameChange} 
            //  handleLastNameChange={this.handleLastNameChange}
            handleChange={this.handleChange}
           />
           <DisplayData formData={this.state} />
           </div>
       )
   }
}