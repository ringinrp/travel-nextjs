import React from 'react'

type Props = {
    heading: string;
}

const SeactionHeading = ({heading}: Props) => {
  return (
    <div className='w-[80%] mx-auto'>
        <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</h1>
        <p className='mt-2 text-gray-950 sm:text-base text-sm font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas!</p>
    </div>
  )
}

export default SeactionHeading
