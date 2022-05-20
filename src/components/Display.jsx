import React from 'react'
import PropTypes from 'prop-types'

import Operation from './Operation'
import '../styles/Display.scss'

// Componente
const Display = ({ display, stack }) => (
  <>
    <Operation stack={stack} />
    <h3 className="main-displpay">{display}</h3>
  </>
)

// Props Validation
Display.propTypes = {
  display: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
}

export default Display
