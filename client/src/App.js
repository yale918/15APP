import NavBar from './components/NavBar'
import MainBoard from './components/MainBoard'
import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css'


function App() {

  return (
    <div className='container'>
      <BrowserRouter> 
      <React.Fragment>
      <MainBoard />
      <NavBar />
      </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

/*
function Container(){
  return (
    
  )
}
*/
export default App;
