"use client"

import React, { useEffect } from 'react'
import Hero from './Hero/Hero';
import Destination from '@/components/Destination/Destination';
import Hotel from '../Hotel/Hotel';
import WhyChoose from '../WhyChoose/WhyChoose';
import Review from '../Reviews/Review';
import News from '../News/News';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {

  return (
    <div className='overflow-hidden'>
     <Hero />
     <Destination />
     <Hotel />
     <WhyChoose />
     <Review />
     <Newsletter />
    </div>
  )
}

export default Home
