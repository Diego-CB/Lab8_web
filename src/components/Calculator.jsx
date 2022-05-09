import React from 'react'

import Display from './Display.jsx'
import Pad from './Pad.jsx'

import '../styles/Calculator.css'

const Calculator = () => {
  // const [operation, setOperation] = React.useState(Array(3))
  const [display, setDisplay] = React.useState('12545')
  // const [operatorA, setOperatorA] = React.useState(0)
  // const [operatorB, setOperatorB] = React.useState(0)
  const [stack, setStack] = React.useState('-45+12x10÷12')

  return (
    <div className="calculator">
      <h2>Calculate</h2>
      <Display
        display={display}
        stack={stack}
      />
      <Pad />
    </div>
  )
}

export default Calculator
