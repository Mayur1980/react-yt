import React from 'react'

const Card = (props) => {

  return (
    <div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1784697335149-6081d07b1575?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3M3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"></img>
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card;
