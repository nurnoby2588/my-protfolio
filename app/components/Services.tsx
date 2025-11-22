"use client"
import React, { useState } from 'react'
import SubAndTitle from './Atoms/SubAndTitle'
import { services } from '@/assects/assets'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, number } from "motion/react"
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

const Services = () => {
    const [isReadMore, setIsReadMore] = useState<{ [key: number]: boolean }>({});
    console.log(isReadMore)
    const handleReadMore = (id: any) => {
        setIsReadMore((prevState) => ({
            ...prevState,
            [id]: !prevState[id], // Toggle the state for the specific card
        }));
    }
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <SubAndTitle style='text-[var(--font-color)]' subTitle='What I Offers' title='My Services'
                desc='Providing reliable, scalable, and high-quality development solutions to meet modern business and technology needs'

            ></SubAndTitle>

            <motion.ul
                initial={{ opacity: -50, y: 50, }}
                whileInView={{ opacity: 1, y: 0, }}
                // animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.2,
                    delay: .6,
                    // type: "spring",
                    // stiffness: 100
                }}
                className='gap-6 my-10' style={{ display: "grid", gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)' }}>
                {services.map((service, index) => (
                    <motion.li
                        initial={{ opacity: 0, y: 30 }} // Start hidden and slightly below
                        animate={{ opacity: 1, y: 0 }}   // Animate to fully visible and in place
                        transition={{
                            duration: 0.5, // Animation duration
                            delay: index * 0.1, // Staggered delay based on index
                        }}
                        key={index} className='border  rounded-lg px-8 py-12  hover:-translate-y-1.5 cursor-pointer
                    card-gradient
                    bg-[var(--card-bg)] h-fit transition-all duration-500 border-[var(--border)] hover:border-[var(--border)] hover:shadow-[var(--card-shadow)] hover:bg-[var(--card-bg-hover)] '>
                        <div className='w-7 sm:w-9 h-7 sm:h-9 bg-red-400 rounded-md flex items-center justify-center text-[var(--font-color)]'>
                            <samp className='text-lg text-white'>{service.icon}</samp>
                        </div>
                        <h3 className='text-lg my-4 text-[var(--font-color)]'>{service.title}</h3>
                        <p className='text-sm text-[var(--font-color)] leading-5'>{isReadMore[service.id] ? service.description : (service.description.slice(0, 80))}{isReadMore[service.id] ? "" : "..."} </p>
                        <button onClick={() => handleReadMore(service.id)} className='flex items-center gap-2 text-sm mt-5 hover:text-red-400 transition-all duration-700' >
                            <span >{isReadMore[service.id] ? "Read less" : "Read more"}</span>
                            <span>{isReadMore[service.id] ? <MdExpandLess /> : <MdExpandMore />} </span>
                        </button>
                    </motion.li>
                ))}
            </motion.ul>



        </div>
    )
}

export default Services
