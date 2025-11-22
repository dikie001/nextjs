import React from 'react'
import Home from './components/home';

const page = () => {
  console.log("HEllo dikie...");
  return (
    <main>
      <div className='text-5xl font-bold'>Welcome to dikie's homepage</div>
      <Home />
    </main>

  )
}

export default page