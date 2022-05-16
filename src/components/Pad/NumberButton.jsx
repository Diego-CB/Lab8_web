import React from 'react'
import PropTypes from 'prop-types'

// Componente
const NumberButton = ({ content, setNewChar }) => (
  <div className="button-container">
    <button
      className="pad-button"
      onClick={() => setNewChar(content)}
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
