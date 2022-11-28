import React from 'react'
import './Card.css'

const Card = (props) => {
  const {title, description} = props
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>🗑️</button>
    </div>
  )
}

export default Card