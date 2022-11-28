import React from 'react'
import './Card.css'

const Card = (props) => {
  console.log('Card Props: ', props)
  const {title, description, id, deleteIdea} = props
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>🗑️</button>
    </div>
  )
}

export default Card