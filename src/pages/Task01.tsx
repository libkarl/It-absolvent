import Footer from '../components/JSHistory/footer/Footer'
import Home from '../components/JSHistory/home/Home'
import Nav_bar from '../components/JSHistory/header/NavBar'
import Possibilities from '../components/JSHistory/possibilities/Possibilities'
import React from 'react'
import Timeline from '../components/JSHistory/timeline/Timeline'
import Trend from '../components/JSHistory/trend/Trend'

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
