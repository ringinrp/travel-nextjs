import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-16 pb-10">
        <div className="w-[80%] mx-auto items-center grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10" >
            {/* 1st part */}
            <div className="space-y-5">
                <h1 className="text-lg font-bold">Company</h1>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">About Us</p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Blogs</p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Careers</p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Gift Cards</p>
            </div>
            {/* 2nd part */}
            <div className="space-y-5">
                <h1 className="text-lg font-bold">Support</h1>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Contacts</p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Legal Notice</p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Privacy Policy</p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Terms & Conditions</p>
            </div>
            {/* 3rd part */}
            <div className="space-y-5">
                <h1 className="text-lg font-bold">Other Services</h1>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Car Hire</p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Activity Finder</p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Tour List</p>
                <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-red-800">Travel Agents</p>
            </div>
            {/* 4th part */}
            <div>
                <h1 className="text-lg font-bold">Contact Us</h1>
                <div className="mt-6">
                    <h1 className="text-sm text-gray-600">Our Mobile Number</h1>
                    <h1 className="text-base font-bold text-blue-950 mt-1">+62 1234 5678</h1>
                </div>
                <div className="mt-6">
                    <h1 className="text-sm text-gray-600">Our Email</h1>
                    <h1 className="text-base font-bold text-blue-950 mt-1">az@gmail.com</h1>
                </div>
            </div>
        </div>
        {/* bottom section */}
        <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p className="text-center md:text-left">Copyright 2025</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span>Social: </span>
                <Link href='#' className="text-gray-500  hover:text-gray-800">
                    <FaTwitter />
                </Link>
                <Link href='#' className="text-gray-500  hover:text-gray-800">
                    <FaFacebook />
                </Link>
            </div>
    </div>
    </div>
  )
}

export default Footer
