import { MainHeader } from './MainHeader'
import { TaskLibrary } from './TaskLibrary'
import React from 'react'

export const Main = () => {
  return (
    <div className='height-screen'>
      <MainHeader />
      <TaskLibrary />
    </div>
  )
}
