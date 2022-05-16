import React from 'react'
import Calculator from './components/Calculator'
import './styles/App.css'

const App = () => (
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

export default App
