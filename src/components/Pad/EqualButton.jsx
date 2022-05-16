import React from 'react'
import PropTypes from 'prop-types'

const handlePress = setOperate => {
  console.log('click =')
}

// Componente
const EqualButton = ({ setOperate }) => (
  <div className="button-container">
    <button
      className="pad-operator pad-equal"
      onClick={() => handlePress(setOperate)}
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
