import React from 'react'
import SeactionHeading from '../Helper/SeactionHeading'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* section Heading */}
      <SeactionHeading heading='Exciting Travel News for You' />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
            <div>
                <NewsCard image="/images/n1.jpg" title="Top 10 to visit in Australia" date="15 Desember 2024"/> 
            </div>
            <div>
                <NewsCard image="/images/n2.jpg" title="Top 10 to visit in Australia" date="15 Desember 2024"/> 
            </div>
            <div>
                <NewsCard image="/images/n3.jpg" title="Top 10 to visit in Australia" date="15 Desember 2024"/> 
            </div>
            <div>
                <NewsCard image="/images/n4.jpg" title="Top 10 to visit in Australia" date="15 Desember 2024"/> 
            </div>
      </div>
    </div>
  )
}

export default News
