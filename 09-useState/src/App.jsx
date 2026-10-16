import React, {useState} from 'react'

const App = () => {

  const [num, setnum] = useState(20);
  const [username, setusername] = useState('Mayur')

  function changeNum(){
    setnum(30)
    setusername('nihar')
  }

  return (
    <div>
      <h1>Value of num is {num} <br /> Value of user is {username}</h1>
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App
