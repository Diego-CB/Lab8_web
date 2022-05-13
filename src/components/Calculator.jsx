import React from 'react'

import Display from './Display.jsx'
import Pad from './Pad.jsx'

import operator from '../util/operator'
import '../styles/Calculator.css'

// Componente
const Calculator = () => {
  const [display, setDisplay] = React.useState('1234567891011121314')
  const [stack, setStack] = React.useState('10-45+12x12')
  const [newChar, setNewChar] = React.useState('')
  const [op1, setOp1] = React.useState('')
  const [op2, setOp2] = React.useState('')
  const [operation, setOperation] = React.useState('')
  const [operate, setOperate] = React.useState(false)

  React.useEffect(() => {
    if (newChar === '') return

    if (['+', '-', 'x'].includes(newChar)) {
      if (op1 === '') return
      if (operation !== '') return
      setOperation(newChar)
      setStack(stack + newChar)
      setDisplay(newChar)
    }

    if (operation === '') {
      setOp1(op1 + newChar)
      setDisplay(op1)
    } else {
      setOp2(op2 + newChar)
      setDisplay(op2)
    }

    setStack(stack + newChar)
  }, [newChar])

  React.useEffect(() => {
    if (op1 === '' || op2 === '' || operation === '') return

    const result = operator(op1, op2, operation)
    setDisplay(result)
  }, [operate])

  return (
    <div className="calculator">
      <h2>Calculate</h2>
      <Display
        display={display}
        stack={stack}
      />
      <Pad
        setOperate={setOperate}
        setNewChar={setNewChar}
      />
    </div>
  )
}

export default Calculator
