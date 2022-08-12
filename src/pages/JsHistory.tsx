import Footer from './JSHistory/Footer'
import Home from './JSHistory/Home'
import Nav_bar from './JSHistory/NavBar'
import Possibilities from './JSHistory/Possibilities'
import React from 'react'
import Timeline from './JSHistory/Timeline'
import Trend from './JSHistory/Trend'

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
