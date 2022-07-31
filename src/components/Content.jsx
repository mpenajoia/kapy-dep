import React from 'react'
import Details from './Details'
import Progress from './Progress'
import Status from './Status'

function Content() {
  return (
    <div className='w-full lg:w-[1100px] flex justify-evenly lg:flex-row flex-col items-center gap-6 lg:gap-0'>
        <Status /> 
        <Progress />
        <Details />
    </div>
  )
}

export default Content