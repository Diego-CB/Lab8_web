import { useState } from 'react'
import './styles/App.css'
import Calculator from './components/Calculator.jsx'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Calculadora
        </h1>
      </header>
      <div className="main-content">
        <Calculator />
      </div>
    </div>
  )
}

export default App
