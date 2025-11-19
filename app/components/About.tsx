import asstects, { infoList, tools } from '@/assects/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 '>
            <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-changa-one'>About me</h2>

            <div className='flex w-full flex-col justify-center lg:flex-row items-center gap-7 my-20 '>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image className='w-full rounded-3xl' src={asstects.profileppic} alt='profile'></Image>
                </div>
                <div className='flex-1 px-10 sm:p-3'>
                    <p className='mb-10 max-w-4xl font-ovo p-6 sm:p-0 text-justify '>I’m Nurboy, a Backend Developer specializing in Node.js, Express.js, Fastify, Prisma, and modern SQL/NoSQL databases. I focus on building fast, secure, and scalable backend systems with clean architecture and efficient APIs.
                        
                        Previously, I worked as a Backend Developer at Bulipe Tech, contributing to performance improvements and backend workflow optimizations. I’m always learning, exploring system design, and building reliable solutions that scale.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl p-6 sm:p-0 '>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (

                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                             hover:bg-[#fcf4ff] hover:border-rose-400 hover:-translate-y-1.5 duration-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]'>
                                <div className='text-4xl mt-3'>{icon}</div>
                                <h3 className='my-4 font-semibold text-gray-700 '>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className='my-6 text-xl text-gray-700 font-ovo'>Tools I Use</h4>
                    <ul className='flex gap-5  items-center'>
                        {tools.map((tool, index) => (
                            <li key={index} className='border-[0.5px] w-12 sm:w-14 aspect-square border-gray-400 rounded-lg p-3.5 cursor-pointer hover:-translate-y-1.5 duration-500 hover:border-rose-400 hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]'>
                                <Image className='w-full sm:w-7' src={tool} alt={"index"}></Image>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
