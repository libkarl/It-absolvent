import './App.css'
import React from 'react'
import Tilt from 'react-parallax-tilt'
import logo from './logo.svg'

function App() {
  return (
    <div className='App '>
      <div className='container mx-auto mt-10'>
        <Tilt className='w-8/12 h-10 bg-slate-500 mx-auto'>
          <div>
            <h1>React Parallax Tilt 👀</h1>
          </div>
        </Tilt>
      </div>
    </div>
  )
}

export default App
