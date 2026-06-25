import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='/' />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
