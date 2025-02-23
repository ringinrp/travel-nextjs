import React from 'react'
import SeactionHeading from '../Helper/SeactionHeading'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">

      {/* section heading */}
      <SeactionHeading heading='Why Choose' />
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20 ">
        {/* why chosose card */}
        <div>
        <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" />

        </div>
        <div>
        <WhyChooseCard image="/images/c2.svg" title="Best Price Guarantee" />

        </div>
        <div>
        <WhyChooseCard image="/images/c3.svg" title="Best Price Guarantee" />
        </div>
      </div>
    </div>
  )
}

export default WhyChoose
