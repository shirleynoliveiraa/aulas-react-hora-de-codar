import React from 'react'

const Button = (props) => {
  return <button onClick={props.event}>{props.text}</button>
}

export default Button