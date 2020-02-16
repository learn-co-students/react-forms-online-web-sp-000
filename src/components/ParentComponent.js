import React from 'react'
import Form from './Form'

export default class ParentComponent extends React.Component{
    
   constructor(){
       super();
       this.state = {
           firstName: "Eason",
           lastName: "Chan"
       }
   }

   handleChange = (e) =>{
       this.setState({
           [e.target.name]: e.target.value
       }
       )
 
   }


    render(){
        return(
          <Form state={this.state} handleChange = {this.handleChange} />
        )
    }
}