import React from 'react'
import Parent from './Components/Parent';
import './Components/Parent.css'
import ShopContextProvider from './Components/Column-2/Cart/ShopContext';
import Mobile from './Components/Mobile';


function App() {
  return (
    <>
      <div className='desktop'>
        <Parent/>
      </div>
      {/* MOBILE */}
      <div className='mobile'>
        <Mobile/>
      </div>
      
    </>
  )
}

export default App
