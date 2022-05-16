const operator = (op1, op2, operation) => {
  const intOp1 = parseInt(op1, 10)
  const intOp2 = parseInt(op2, 10)

  if (operation === '+') return intOp1 + intOp2
  if (operation === 'x') return intOp1 * intOp2
  if (operation === '-') return intOp1 - intOp2
}

export default operator
