import React from 'react'
import PropTypes from 'prop-types'

const handlePress = (content, setNewChar) => {
  console.log('click', content)
}

// Componente
const NumberButton = ({ content, setNewChar }) => (
  <div className="button-container">
    <button
      className="pad-button"
      onClick={() => handlePress(content, setNewChar)}
      tabIndex={0}
      type="button"
    >
      {content}
    </button>
  </div>
)

// Props Validation
NumberButton.propTypes = {
  content: PropTypes.string.isRequired,
  setNewChar: PropTypes.func.isRequired,
}

export default NumberButton
