import React from 'react'
import PropTypes from 'prop-types'

import PadRow from './Pad/PadRow.jsx'
import NumberButton from './Pad/NumberButton.jsx'
import EqualButton from './Pad/EqualButton.jsx'
import ClearButton from './Pad/ClearButton.jsx'

import '../styles/Pad.css'

// Componente
const Pad = ({ setOperate, setNewChar, setClear }) => (
  <div className="pad-container">
    <div className="pad">
      {[0, 1, 2].map(rowNum => (
        <PadRow
          colIndex={rowNum}
          setNewChar={setNewChar}
          key={rowNum}
        />
      ))}
      <ClearButton setClear={setClear} />
      <NumberButton content="0" setNewChar={setNewChar} />
      <NumberButton content="00" setNewChar={setNewChar} />
      <EqualButton setOperate={setOperate} />
    </div>
  </div>
)

// Props Validation
Pad.propTypes = {
  setOperate: PropTypes.func.isRequired,
  setNewChar: PropTypes.func.isRequired,
  setClear: PropTypes.func.isRequired,
}

export default Pad
