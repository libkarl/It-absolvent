import { Footer } from './Footer'
import { Home } from './Home'
import { Nav_bar } from './NavBar'
import { Possibilities } from './Possibilities'
import { Timeline } from './Timeline'
import { Trend } from './Trend'
import React from 'react'

export const JsHistory = () => {
  return (
    <div>
      <Nav_bar />
      <Home />
      <Timeline />
      <Possibilities />
      <Trend />
      <Footer />
    </div>
  )
}
