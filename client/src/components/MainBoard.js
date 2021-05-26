import React from 'react'
import Stream from './views/Stream'
import Chat from './views/Chat'


const MainBoard =()=>{
  return(
    <div className='mainboard'>
    <Stream /> 
    <Chat />
    </div>
 ) 
}

export default MainBoard
