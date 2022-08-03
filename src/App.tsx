import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main_page/Main'
import React from 'react'
import Task01 from './pages/Task01/Task01'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='task01' element={<Task01 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
