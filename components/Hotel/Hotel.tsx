import React from 'react'
import SeactionHeading from '../Helper/SeactionHeading'
import HotelCard from './HotelCard'
import { hotelsData } from '@/data/data'

const Hotel = () => {
  return (
    <div className='pt-20 pb-20'>

      {/* section heading */}
      <SeactionHeading heading='Recommended Hotels' />

        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 item-center mt-16'>

            {/* Hotel card */}
           {hotelsData.map((data)=>{
                return <div key={data.id} data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <HotelCard hotel={data} />
                </div>
           })}

        </div>

    </div>
  )
}

export default Hotel
