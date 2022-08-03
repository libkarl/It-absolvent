import Main_header from '../../components/Main_header/Main_header'
import React from 'react'
import Task_library from '../../components/Task_library/Task_library'

const Main: React.FC = _props => {
  return (
    <div className='height-screen'>
      <Main_header />
      <Task_library />
    </div>
  )
}

export default Main
