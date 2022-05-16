import React from 'react'
import PropTypes from 'prop-types'

const handlePress = setClear => {
  console.log('click =')
}

// Componente
const Clear = ({ setClear }) => (
  <div className="button-container">
    <button
      className="pad-operator pad-clear"
      onClick={() => handlePress(setClear)}
      tabIndex={0}
      type="button"
    >
      C
    </button>
  </div>
)

// Props Validation
Clear.propTypes = {
  setClear: PropTypes.func.isRequired,
}

export default Clear
