import React from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import AddMenu from './Components/AddMenu'
import Home from './Components/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/addmenu' element={<AddMenu/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
