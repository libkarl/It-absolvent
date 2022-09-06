import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Counter } from './pages/Counter/Counter'
import { HackerWritter } from './pages/HackerWritter/HackerWritter'
import { JsHistory } from './pages/JSHistory/JsHistory'
import { Main } from './pages/MainPage/Main'
import { MemoryGame } from './pages/MemoryGame/MemoryGame'
import { MortgageCalculator } from './pages/MortgageCalculator/MortgageCalcualtor'
import { TodoListApplication } from './pages/Todoapp/Todoapp'
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
          <Route path={urls.counter} element={<Counter />} />
          <Route path={urls.toDoApp} element={<TodoListApplication />} />
          <Route path={urls.mortgageCalculator} element={<MortgageCalculator />} />
          <Route path={urls.memorygame} element={<MemoryGame />} />
        </Routes>
      </BrowserRouter>
    </DivCoreApp>
  )
}
