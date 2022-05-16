import React from 'react'

import Display from './Display.jsx'
import Pad from './Pad.jsx'

import operator from '../util/operator'
import '../styles/Calculator.css'

// Componente
const Calculator = () => {
  const [display, setDisplay] = React.useState('0')
  const [stack, setStack] = React.useState('')
  const [newChar, setNewChar] = React.useState('')
  const [op1, setOp1] = React.useState('')
  const [op2, setOp2] = React.useState('')
  const [operation, setOperation] = React.useState('')
  const [operate, setOperate] = React.useState(false)
  const [clear, setClear] = React.useState(false)

  React.useEffect(() => {
    if (newChar === '') return

    if (stack.split('').includes('=')) {
      if (['+', '-', 'x'].includes(newChar)) {
        setOp1(display)
        setOp2('')
        setOperation(newChar)
        setStack(display + newChar)
        setNewChar('')
        return
      }
      setOp1(newChar)
      setOp2('')
      setOperation('')
      setDisplay(newChar)
      setStack(newChar)
      setNewChar('')
      return
    }

    if (['+', '-', 'x'].includes(newChar)) {
      if (op1 === '') return
      if (operation !== '') return
      setOperation(newChar)
      setStack(stack + newChar)
      setDisplay(newChar)
      setStack(stack + newChar)
    }

    if (operation === '') {
      const newDisplay = op1 + newChar.toString()
      setOp1(newDisplay)
      setDisplay(newDisplay)
      setStack(stack + newChar)
      return
    }

    const newDisplay = op2 + newChar.toString()
    setOp2(newDisplay)
    setDisplay(newDisplay)
    setStack(stack + newChar)
  }, [newChar])

  React.useEffect(() => {
    if (!operate) return
    if (op1 === '' || op2 === '' || operation === '') return

    const result = operator(op1, op2, operation)
    setDisplay(result.toString())
    setStack(stack + '=' + result.toString())
    setOperate(false)
  }, [operate])

  React.useEffect(() => {
    if (!clear) return

    setDisplay('0')
    setNewChar('')
    setOp1('')
    setOp2('')
    setStack('')
    setOperation('')
    setClear(false)
  }, [clear])

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
        setClear={setClear}
      />
    </div>
  )
}

export default Calculator
