import React from 'react'
import PropTypes from 'prop-types'

// Componente
const EqualButton = ({ setOperate }) => (
  <div className="button-container">
    <button
      className="pad-operator pad-equal"
      onClick={() => setOperate(true)}
      tabIndex={0}
      type="button"
    >
      =
    </button>
  </div>
)

// Props Validation
EqualButton.propTypes = {
  setOperate: PropTypes.func.isRequired,
}

export default EqualButton
