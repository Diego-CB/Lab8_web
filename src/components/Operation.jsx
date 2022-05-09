import React from 'react'
import PropTypes from 'prop-types'

const Operation = ({ stack }) => {
  const arrayStack = stack.split('')
  const keys = [...Array(arrayStack.length).keys()]

  return (
    <div className="operation">
      {arrayStack.map((char, index) => {
        if (['+', 'x', '-', '÷'].includes(char)) {
          return <span key={keys[index]}>{char}</span>
        }
        return <p key={keys[index]}>{char}</p>
      })}
    </div>
  )
}

// Props Validation
Operation.propTypes = {
  stack: PropTypes.string.isRequired,
}

export default Operation
