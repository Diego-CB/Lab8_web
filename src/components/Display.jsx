import React from 'react'
import PropTypes from 'prop-types'

import Operation from './Operation.jsx'
import '../styles/Display.css'

const Display = ({ display, stack }) => (
  <>
    <Operation stack={stack} />
    <h3>{display}</h3>
  </>
)

// Props Validation
Display.propTypes = {
  display: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
}

export default Display
