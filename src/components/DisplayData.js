import React from 'react'

class DisplayData extends React.Component {
    render(){
        return (
            <React.Fragment>
                <h1>{this.props.formData.firstName}</h1>
                <h1>{this.props.formData.lastName}</h1>
            </React.Fragment>
        )
    }

}

export default DisplayData