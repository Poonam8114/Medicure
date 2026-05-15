import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes> */}
    </div>
  )
}

export default App      