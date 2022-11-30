import React from 'react'
import './Ideas.css'

const Ideas = (props) => {
  const { name, age } = props
  return (
    <p>Hello, {name}! You are {age}.</p>
  )
}

export default Ideas