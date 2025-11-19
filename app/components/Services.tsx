import React from 'react'
import SubAndTitle from './Atoms/SubAndTitle'
import { services } from '@/assects/assets'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <SubAndTitle subTitle='What I Offers' title='My Services'
            desc='Providing reliable, scalable, and high-quality development solutions to meet modern business and technology needs'
            
            ></SubAndTitle>
          
            <ul className='gap-6 my-10' style={{ display: "grid", gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)' }}>
                {services.map((service, index) => (
                    <li key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:border-[#F7A5A5] hover:bg-[#FFDBB6] hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 duration-500 cursor-pointer'>
                        <div className='w-7 sm:w-9 h-7 sm:h-9 bg-red-400 rounded-md flex items-center justify-center '>
                            <samp className='text-lg text-white'>{service.icon}</samp>
                        </div>
                        <h3 className='text-lg my-4 text-gray-700'>{service.title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{service.description.slice(0, 80)}... </p>
                        <Link className='flex items-center gap-2 text-sm mt-5 hover:text-red-400 transition-all duration-700' href={`${service.link}`}>
                            <span>Read more</span>
                            <span><FaArrowRightLong /></span>
                        </Link>
                    </li>
                ))}
            </ul>
            
            
            
        </div>
    )
}

export default Services
