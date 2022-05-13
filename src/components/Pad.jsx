import React from 'react'
import PropTypes from 'prop-types'

import '../styles/Pad.css'

// Componente
const Pad = ({ setOperate, setNewChar }) => (
  <div className="pad-container">
    <div className="pad" />
  </div>
)

// Props Validation
Pad.propTypes = {
  setOperate: PropTypes.func.isRequired,
  setNewChar: PropTypes.func.isRequired,
}

export default Pad
