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

  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
    console.log(this.state)
  }

  handleSubmit() {
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
        <button>SUBMIT</button>
      </form>
    )
  }
}

export default Form