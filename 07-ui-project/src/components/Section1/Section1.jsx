import React from 'react'
import Page1Content from './Page1Content.jsx';
import Navbar from './Navbar.jsx';

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1Content users={props.users} />
    </div>
  )
}

export default Section1
