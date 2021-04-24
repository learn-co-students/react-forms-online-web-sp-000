state = {
    firstName: "John",
    lastName: "Henry",
    subimttedData: []
  }

  listOfSubmissions = () => {
    return this.state.subimttedData.map(data => {
      return <div><span>{data.firstName}</span><span>{data.lastName}</span></div>
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.subimttedData.concat(formData)
    this.setState({subimttedData: dataArray})
  }

  {this.listOfSubmissions()}

  onSubmit={event => {this.handleSubmit(event)}}

  <input type="submit"/>

  