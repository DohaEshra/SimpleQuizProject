import React from 'react'

const Button = ({text, className, fun  }) => {
  return (
    <button className={className} onClick={fun} >{text}</button>

  )
}

export default Button
