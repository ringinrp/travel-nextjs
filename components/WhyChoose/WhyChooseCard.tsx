import React from 'react'
import Image from 'next/image'

type Props = {
    image: string;
    title: string;
}

const WhyChooseCard = ({image, title}: Props) => {
  return (
    <div>
        {/* images */}
        <Image src={image} width={70} height={70} alt="image" className="mx-auto" />
        {/* content */}
        <h1 className='text-lg font-medium text-gray-900 mt-6 text-center'>{title}</h1>
        <p className="text-center mt-2 text-xs font-mediums text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum molestiae odit iure!</p>
    </div>
  )
}

export default WhyChooseCard;
