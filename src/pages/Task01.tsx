import Footer from './JSHistory/footer/Footer'
import Home from './JSHistory/home/Home'
import Nav_bar from './JSHistory/header/NavBar'
import Possibilities from './JSHistory/possibilities/Possibilities'
import React from 'react'
import Timeline from './JSHistory/timeline/Timeline'
import Trend from './JSHistory/trend/Trend'

const Task01 = () => {
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

export default Task01
