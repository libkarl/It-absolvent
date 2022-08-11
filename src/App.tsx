import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import React from 'react'
import Task01 from './pages/Task01'
import tw from 'tailwind-styled-components'

const DivCoreApp = tw.div`
  text-align: center;
`

const App = () => {
  return (
    <DivCoreApp>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='task01' element={<Task01 />} />
        </Routes>
      </BrowserRouter>
    </DivCoreApp>
  )
}

export default App
