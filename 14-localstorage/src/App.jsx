import React from 'react'

const App = () => {

  const storage = localStorage.setItem('user', 'sarthak')
  const get = localStorage.getItem('user')
  console.log(get)

  return (
    <div>
      App
    </div>
  )
}

export default App
