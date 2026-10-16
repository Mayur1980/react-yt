import React,{useState} from 'react'

const App1 = () => {

  const [num, setnum] = useState(9)

  function increaseNum(){
    setnum(num+1)
  }

  function decreaseNum(){
    setnum(num-1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App1
