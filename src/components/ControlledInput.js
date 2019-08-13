// Code ControlledInput Component Here
import React from 'react'

class ControlledInput extends React.Component {
    state = {
        value: '',
    }

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    }

    handleSubmit = e => {
        e.prevemtDefault()
        this.sendFormDataSomewhere(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={e => e.handleSubmit(e)}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default ControlledInput