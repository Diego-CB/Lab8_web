import React from 'react'
import PropTypes from 'prop-types'

import NumberButton from './NumberButton'
import OperateButton from './OperateButton'

const getRow = colIndex => {
  if (colIndex === 0) return [0, [7, 8, 9]]
  if (colIndex === 1) return [1, [4, 5, 6]]
  if (colIndex === 2) return [2, [1, 2, 3]]
  return undefined
}

// Componente
const PadRow = ({ colIndex, setNewChar }) => {
  const rowInfo = getRow(colIndex)

  return (
    <>
      {rowInfo[1].map(button => (
        <NumberButton
          setNewChar={setNewChar}
          content={button.toString()}
          key={button}
        />
      ))}

      <OperateButton
        setNewChar={setNewChar}
        buttonIndex={rowInfo[0]}
      />
    </>
  )
}

// Props Validation
PadRow.propTypes = {
  setNewChar: PropTypes.func.isRequired,
  colIndex: PropTypes.number.isRequired,
}

export default PadRow
