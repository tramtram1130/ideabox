import React, {Component} from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
    console.log(this.state)
  }

  handleSubmit = event => {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      ...this.state
    }
    this.props.addIdea(newIdea)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      title: "", description: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button onClick={event => this.handleSubmit(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default Form