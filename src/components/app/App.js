import React, {Component} from 'react'
import './App.css'
import Ideas from '/Users/tramtram/turing_work/3mod/projects/1week/ideabox/src/components/ideas/Ideas.js'
import Form from '/Users/tramtram/turing_work/3mod/projects/1week/ideabox/src/components/form/Form.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' }
      ]
    }
    this.addIdea = this.addIdea.bind(this)
  }

  addIdea(newIdea) {
    this.setState({ideas: [...this.state.ideas, newIdea]})
  }

  render() {
    return (
      <main className="App">
        <h1>IdeaBox!</h1>
        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2>}
        <Form 
          addIdea={this.addIdea}
        />
        <Ideas 
          ideas={this.state.ideas}
        />
      </main>
    )
  }
}

export default App

