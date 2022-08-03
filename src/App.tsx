import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main_page/Main'
import Nav_bar from './components/JS_history/header/Nav_bar'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='navbar' element={<Nav_bar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
