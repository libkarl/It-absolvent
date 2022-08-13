import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HackerWritter } from './pages/HackerWritter/HackerWritter'
import { JsHistory } from './pages/JSHistory/JsHistory'
import { Main } from './pages/MainPage/Main'
import { urls } from './helpers/urls'
import React from 'react'
import tw from 'tailwind-styled-components'

const DivCoreApp = tw.div`
  text-align: center;
`

export const App = () => {
  return (
    <DivCoreApp>
      <BrowserRouter>
        <Routes>
          <Route path={urls.mainPage} element={<Main />} />
          <Route path={urls.jsHistoryPage} element={<JsHistory />} />
          <Route path={urls.hackerWritter} element={<HackerWritter />} />
        </Routes>
      </BrowserRouter>
    </DivCoreApp>
  )
}
