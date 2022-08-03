import Home from '../../components/JS_history/home/Home'
import Nav_bar from '../../components/JS_history/header/Nav_bar'
import Possibilities from '../../components/JS_history/possibilities/Possibilities'
import React from 'react'
import Timeline from '../../components/JS_history/timeline/Timeline'
import Trend from '../../components/JS_history/trend/Trend'

const Task01 = () => {
  return (
    <div>
      <Nav_bar />
      <Home />
      <Timeline />
      <Possibilities />
      <Trend />
    </div>
  )
}

export default Task01
