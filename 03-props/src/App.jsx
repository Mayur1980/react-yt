import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className="parent">
      <Card user="Aman" age={18} />
      <Card user="Sarthak Sharma" age={43} />
    </div>
  )
}

export default App
