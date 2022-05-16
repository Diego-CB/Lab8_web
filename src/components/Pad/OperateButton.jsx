import React from 'react'
import PropTypes from 'prop-types'

const getOperation = index => {
  if (index === 0) return 'x'
  if (index === 1) return '-'
  if (index === 2) return '+'
}

// Componente
const OperateButton = ({ buttonIndex, setNewChar }) => (
  <div className="button-container">
    <button
      className="pad-operator"
      onClick={() => setNewChar(getOperation(buttonIndex))}
      tabIndex={0}
      type="button"
    >
      {getOperation(buttonIndex)}
    </button>
  </div>
)

// Props Validation
OperateButton.propTypes = {
  setNewChar: PropTypes.func.isRequired,
  buttonIndex: PropTypes.number.isRequired,
}

export default OperateButton
