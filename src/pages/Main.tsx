import { MainHeader } from './MainHeader/MainHeader'
import { TaskLibrary } from './TaskLibrary/TaskLibrary'
import React from 'react'

export const Main = () => {
  return (
    <div className='height-screen'>
      <MainHeader />
      <TaskLibrary />
    </div>
  )
}
