import React from 'react'
import Login from './views/Login'
import Qrcode from './views/Qrcode'
import Level from './views/Level'

function NavBar(){

  return (
    <div className='navbar'>
      <Login />
      <Qrcode />
      <Level />
    </div>
  )
}





export default NavBar

