import React from 'react'
import SeactionHeading from '../Helper/SeactionHeading'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 mb-20'>
        {/* section heading */}
        <SeactionHeading heading='Exploring Popular Destination' />
        {/* section content */}
        <div className='mt-14 w-[80%] mx-auto'>
            {/* Slider */}
            <DestinationSlider />
        </div>
    </div>
  )
}

export default Destination
