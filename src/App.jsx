import { useState } from 'react'
import './styles/App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora</h1>
      </header>
      <div className="main-content">
        <div className="calc-container">
          <h1>aca va la calc</h1>
        </div>
      </div>
    </div>
  )
}

export default App
