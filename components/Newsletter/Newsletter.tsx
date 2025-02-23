import React from 'react'
import { BsEnvelope, BsEnvelopePaper } from 'react-icons/bs'

const Newsletter = () => {
  return (
    <div className="bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col">
        <BsEnvelopePaper className="w-16 h-16 text-white" />
        <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">Your Travel Journey Start Here</h1>
        <p>Sign up we&apos;ll send the best deals to you</p> 
        {/* subscription input and buttons */}
        <div className="w-full">
            <input type="text" className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none" placeholder='Email' />
        </div>
        <button className="px-6 py-3.5 bg-white hover:bg-red-400 hover:text-white transition-all duration-300 mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none">
            Subscribe
        </button>
    </div>
  )
}

export default Newsletter
