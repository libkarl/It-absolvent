import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { JsHistory } from './pages/JsHistory'
import { urls } from './helpers/urls'
import Main from './pages/Main'
import React from 'react'
import tw from 'tailwind-styled-components'

const DivCoreApp = tw.div`
  text-align: center;
`

const App = () => {
  return (
    <DivCoreApp>
      <BrowserRouter>
        <Routes>
          <Route path={urls.mainPage} element={<Main />} />
          <Route path={urls.jsHistoryPage} element={<JsHistory />} />
        </Routes>
      </BrowserRouter>
    </DivCoreApp>
  )
}

export default App
