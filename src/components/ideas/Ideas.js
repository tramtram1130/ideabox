import React from 'react'
import './Ideas.css'
import Card from '/Users/tramtram/turing_work/3mod/projects/1week/ideabox/src/components/card/Card.js'

const Ideas = (props) => {
  const { ideas } = props
  return (
    <div className="ideas-container">
      {ideas.map(idea => <Card key={idea.id} id={idea.id} title={idea.title} description={idea.description} />)}
    </div>
  )
}

export default Ideas