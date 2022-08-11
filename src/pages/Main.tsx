import Main_header from '../components/MainHeader/MainHeader'
import React from 'react'
import Task_library from '../components/TaskLibrary/TaskLibrary'

const Main = () => {
  return (
    <div className='height-screen'>
      <Main_header />
      <Task_library />
    </div>
  )
}

export default Main
